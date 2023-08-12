<template>
	<form @submit.prevent="register" class="min-h-screen p-5 sm:p-10 grid gap-4 place-content-center bg-gray-200 dark:bg-black">
		<div class="text-3xl dark:text-white">Register</div>

		<hr />

		<div v-if="!!registrationErrors.other" class="flex flex-col gap-1">
			<div v-for="(error, k) in registrationErrors.other" :key="k" class="text-xs text-red-500">{{ error }}</div>
		</div>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="name" class="dark:text-white">Full Name</label>
			<input v-model.trim="registrationDetails.name" name="name" autocomplete="name" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.name" class="text-xs text-red-500">{{ registrationErrors.name }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="email" class="dark:text-white">Email</label>
			<input v-model.trim="registrationDetails.email" name="email" type="email" autocomplete="email" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.email" class="text-xs text-red-500">{{ registrationErrors.email }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="username" class="dark:text-white">Username</label>
			<input v-model.trim="registrationDetails.username" @focusout="checkUsernameExists" name="username" autocomplete="username" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.username" class="text-xs text-red-500">{{ registrationErrors.username }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="password" class="dark:text-white">Password</label>
			<input v-model.trim="registrationDetails.password" name="password" type="password" autocomplete="new-password" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.password" class="text-xs text-red-500">{{ registrationErrors.password }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="confirmationPassword" class="dark:text-white">Confirm Password</label>
			<input v-model.trim="registrationDetails.confirmationPassword" name="confirmationPassword" type="password" autocomplete="new-password" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.confirmationPassword" class="text-xs text-red-500">{{ registrationErrors.confirmationPassword }}</div>
		</fieldset>

		<hr />

		<Button type="submit" class="items-center" :disabled="!isDevelopment || registrationLoading || registrationSuccessful">
			<template v-if="registrationSuccessful">Registered! You may login now</template>
			<template v-else>
				<template v-if="registrationLoading">Loading...</template>
				<template v-else>Register</template>
				<span class="text-sm" v-if="!isDevelopment"> (Not available currently)</span>
			</template>
		</Button>
		<router-link to="/login" replace class="text-xs dark:text-white text-center">Already have an account? Login here.</router-link>
	</form>
</template>

<script lang="ts">
import { createUserWithEmailAndPassword, AuthError, updateProfile } from 'firebase/auth'
import { RegistrationDetails, RegistrationErrors } from '@/models'
import { defineComponent, reactive, ref as useRef } from 'vue'
import { get, set, ref } from 'firebase/database'
import { authErrorMessages } from '@/config'
import Button from '@/components/Button.vue'
import firebase from '@/config/firebase'

export default defineComponent({
	name: 'Login',

	components: {
		Button
	},

	setup() {
		const registrationDetails = reactive<RegistrationDetails>({ name: '', email: '', username: '', password: '', confirmationPassword: '' })
		const registrationErrors = reactive<RegistrationErrors>({ name: '', email: '', username: '', password: '', confirmationPassword: '' })
		const registrationSuccessful = useRef<boolean>(false)
		const registrationLoading = useRef<boolean>(false)

		const isDevelopment = import.meta.env.DEV

		const checkUsernameExists = async () => {
			if (!registrationDetails.username) return
			const data = await get(ref(firebase.database, `/users/${registrationDetails.username}`))
			if (data.val()) registrationErrors.username = 'Username already taken'
			else registrationErrors.username = ''
		}

		const register = async () => {
			if (!registrationDetails.name) registrationErrors.name = "Name can't be empty!"
			else registrationErrors.name = ''

			if (!registrationDetails.email) registrationErrors.email = "Email can't be empty!"
			else registrationErrors.email = ''

			if (!registrationDetails.username) registrationErrors.username = "Username can't be empty!"
			else if (!registrationErrors.username) registrationErrors.username = ''

			if (!registrationDetails.password) registrationErrors.password = "Password can't be empty!"
			else registrationErrors.password = ''

			if (!registrationDetails.confirmationPassword) registrationErrors.confirmationPassword = "Confirmation password can't be empty!"
			else registrationErrors.confirmationPassword = ''

			if (registrationDetails.password && registrationDetails.confirmationPassword) {
				if (registrationDetails.password !== registrationDetails.confirmationPassword) {
					registrationErrors.password = registrationErrors.confirmationPassword = 'Passwords do not match!'
				} else {
					registrationErrors.password = ''
					registrationErrors.confirmationPassword = ''
				}
			}

			if (!registrationErrors.username && registrationErrors.email && !registrationErrors.password) {
				delete registrationErrors.other
			}

			if (!Object.values(registrationErrors).filter((e) => e.length).length) {
				try {
					registrationLoading.value = true
					const userCredentials = await createUserWithEmailAndPassword(firebase.auth, registrationDetails.email, registrationDetails.password)
					await Promise.all([
						updateProfile(userCredentials.user, {
							displayName: registrationDetails.name
						}),
						set(ref(firebase.database, `/users/${userCredentials.user.uid}`), {
							username: registrationDetails.username
						}),
						set(ref(firebase.database, `/users/${registrationDetails.username}`), {
							email: registrationDetails.email,
							uid: userCredentials.user.uid
						})
					])
					registrationSuccessful.value = true
				} catch (err) {
					const error = err as AuthError
					registrationErrors.other = [...(registrationErrors.other || []), authErrorMessages[error.code] || error.message]
				} finally {
					registrationLoading.value = false
				}
			}
		}

		return {
			registrationSuccessful,
			registrationDetails,
			registrationErrors,
			registrationLoading,
			isDevelopment,

			checkUsernameExists,
			register
		}
	}
})
</script>
