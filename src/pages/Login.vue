<template>
	<form @submit.prevent="login" class="min-h-screen p-5 sm:p-10 grid gap-4 place-content-center bg-gray-200 dark:bg-black">
		<div class="text-3xl dark:text-white">Login</div>

		<hr />

		<div v-if="!!loginErrors.other" class="flex flex-col gap-1">
			<div v-for="(error, k) in loginErrors.other" :key="k" class="text-xs text-red-500">{{ error }}</div>
		</div>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="username" class="dark:text-white">Username or Email</label>
			<input v-model.trim="loginDetails.username" name="username" autocomplete="username" @focusout="checkUsernameExists" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!loginErrors.username" class="text-xs text-red-500">{{ loginErrors.username }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="password" class="dark:text-white">Password</label>
			<input v-model.trim="loginDetails.password" name="password" type="password" autocomplete="current-password" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!loginErrors.password" class="text-xs text-red-500">{{ loginErrors.password }}</div>
		</fieldset>

		<hr />

		<Button type="submit" class="items-center" :disabled="!isDevelopment || loginLoading">
			<template v-if="loginLoading">Loading...</template>
			<template v-else>Login</template>
			<span class="text-sm" v-if="!isDevelopment"> (Not available currently)</span>
		</Button>
		<router-link to="/register" replace class="text-xs dark:text-white text-center">Don&apos;t have an account? Register here.</router-link>
	</form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref as useRef } from 'vue'
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth'
import { LoginDetails, LoginErrors } from '@/models'
import { authErrorMessages } from '@/config'
import { get, ref } from 'firebase/database'
import Button from '@/components/Button.vue'
import firebase from '@/config/firebase'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'Login',

	components: {
		Button
	},

	setup() {
		const router = useRouter()

		const emailToUse = useRef<string>('')
		const loginLoading = useRef<boolean>(false)
		const loginDetails = reactive<LoginDetails>({ username: '', password: '' })
		const loginErrors = reactive<LoginErrors>({ username: '', password: '' })

		const isDevelopment = import.meta.env.DEV

		const checkUsernameExists = async () => {
			if (!loginDetails.username) return
			else if (loginDetails.username.includes('@')) {
				emailToUse.value = loginDetails.username
				loginErrors.username = ''
				return
			}
			const data = await get(ref(firebase.database, `/users/${loginDetails.username}`))
			if (!data.hasChild('email')) loginErrors.username = "Username doesn't exist"
			else {
				emailToUse.value = data.val().email
				loginErrors.username = ''
			}
		}

		const login = async () => {
			if (!loginDetails.username) loginErrors.username = "Username can't be empty!"
			else loginErrors.username = ''

			if (!loginDetails.password) loginErrors.password = "Password can't be empty!"
			else loginErrors.password = ''

			if (!loginErrors.username && !loginErrors.password) delete loginErrors.other

			if (!Object.values(loginErrors).filter((e) => e.length).length) {
				try {
					loginLoading.value = true
					await signInWithEmailAndPassword(firebase.auth, emailToUse.value, loginDetails.password)
					router.push('/notes')
				} catch (err) {
					const error = err as AuthError
					loginErrors.other = [...(loginErrors.other || []), authErrorMessages[error.code] || error.message]
				} finally {
					loginLoading.value = false
				}
			}
		}

		return {
			checkUsernameExists,
			loginLoading,
			isDevelopment,
			loginDetails,
			loginErrors,

			login
		}
	}
})
</script>
