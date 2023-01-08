<template>
	<form @submit.prevent="register" class="min-h-screen p-5 sm:p-10 grid gap-4 place-content-center bg-gray-200 dark:bg-black">
		<div class="text-3xl dark:text-white">Register</div>

		<hr />

		<div v-if="!!registrationErrors.other" class="flex flex-col gap-1">
			<div v-for="(error, k) in registrationErrors.other" :key="k" class="text-xs text-red-500">{{ error }}</div>
		</div>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="name" class="dark:text-white">Full Name</label>
			<input v-model.trim="registrationDetails.name" name="name" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.name" class="text-xs text-red-500">{{ registrationErrors.name }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="email" class="dark:text-white">Email</label>
			<input v-model.trim="registrationDetails.email" name="email" type="email" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.email" class="text-xs text-red-500">{{ registrationErrors.email }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="username" class="dark:text-white">Username</label>
			<input v-model.trim="registrationDetails.username" name="username" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.username" class="text-xs text-red-500">{{ registrationErrors.username }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="password" class="dark:text-white">Password</label>
			<input v-model.trim="registrationDetails.password" name="password" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.password" class="text-xs text-red-500">{{ registrationErrors.password }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="confirmationPassword" class="dark:text-white">Confirm Password</label>
			<input v-model.trim="registrationDetails.confirmationPassword" name="confirmationPassword" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!registrationErrors.confirmationPassword" class="text-xs text-red-500">{{ registrationErrors.confirmationPassword }}</div>
		</fieldset>

		<hr />

		<Button type="submit" class="items-center">Register</Button>
		<router-link to="/login" replace class="text-xs dark:text-white text-center">Already have an account? Login here.</router-link>
	</form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { RegistrationDetails, RegistrationErrors } from '@/models'
import Button from '@/components/Button.vue'

export default defineComponent({
	name: 'Login',

	components: {
		Button
	},

	setup() {
		const registrationDetails = reactive<RegistrationDetails>({ name: '', email: '', username: '', password: '', confirmationPassword: '' })
		const registrationErrors = reactive<RegistrationErrors>({ name: '', email: '', username: '', password: '', confirmationPassword: '' })

		const register = () => {
			if (!registrationDetails.name) registrationErrors.name = "Name can't be empty!"
			else registrationErrors.name = ''

			if (!registrationDetails.email) registrationErrors.email = "Email can't be empty!"
			else registrationErrors.email = ''

			if (!registrationDetails.username) registrationErrors.username = "Username can't be empty!"
			else registrationErrors.username = ''

			if (!registrationDetails.password) registrationErrors.password = "Password can't be empty!"
			else registrationErrors.password = ''

			if (!registrationDetails.confirmationPassword) registrationErrors.confirmationPassword = "Confirmation password can't be empty!"
			else registrationErrors.confirmationPassword = ''

			if (registrationDetails.password && registrationDetails.confirmationPassword)
				if (registrationDetails.password !== registrationDetails.confirmationPassword) {
					registrationErrors.password = registrationErrors.confirmationPassword = 'Passwords do not match!'
				} else {
					registrationErrors.password = ''
					registrationErrors.confirmationPassword = ''
				}

			if (!Object.values(registrationErrors).filter((e) => e.length).length) {
				console.info({ registrationDetails })
			}
		}

		return {
			registrationDetails,
			registrationErrors,

			register
		}
	}
})
</script>