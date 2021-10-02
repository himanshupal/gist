<template>
	<form @submit.prevent="login" class="min-h-screen p-5 sm:p-10 grid gap-4 place-content-center bg-gray-200 dark:bg-black">
		<div class="text-3xl dark:text-white">Login</div>

		<hr />

		<div v-if="!!loginErrors.other" class="flex flex-col gap-1">
			<div v-for="(error, k) in loginErrors.other" :key="k" class="text-xs text-red-500">{{ error }}</div>
		</div>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="username" class="dark:text-white">Username or Email</label>
			<input v-model.trim="loginDetails.username" name="username" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!loginErrors.username" class="text-xs text-red-500">{{ loginErrors.username }}</div>
		</fieldset>

		<fieldset class="w-64 sm:w-96 flex flex-col gap-1">
			<label for="password" class="dark:text-white">Password</label>
			<input v-model.trim="loginDetails.password" name="password" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
			<div v-if="!!loginErrors.password" class="text-xs text-red-500">{{ loginErrors.password }}</div>
		</fieldset>

		<Button type="submit" class="items-center">Login</Button>
		<router-link to="/register" replace class="text-xs dark:text-white text-center">Don&apos;t have an account? Register here.</router-link>
	</form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { LoginDetails, LoginErrors } from '@/models/Login'
import Button from '@/components/Button.vue'

export default defineComponent({
	name: 'Login',

	components: {
		Button
	},

	setup() {
		const loginDetails = reactive<LoginDetails>({ username: '', password: '' })
		const loginErrors = reactive<LoginErrors>({ username: '', password: '' })

		const login = () => {
			if (!loginDetails.username) loginErrors.username = "Username can't be empty!"
			else loginErrors.username = ''

			if (!loginDetails.password) loginErrors.password = "Password can't be empty!"
			else loginErrors.password = ''

			if (!Object.values(loginErrors).filter((e) => e.length).length) {
				console.info({ loginDetails })
			}
		}

		return {
			loginDetails,
			loginErrors,

			login
		}
	}
})
</script>
