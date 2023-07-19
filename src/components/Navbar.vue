<template>
	<div class="flex items-center justify-between px-5 sm:px-10 py-3 bg-gray-300 dark:bg-black dark:text-white leading-none">
		<div class="text-3xl font-semibold">{{ user?.displayName }}</div>
		<button class="flex items-center justify-center bg-white text-black rounded-full p-2" :onclick="logout">Logout</button>
	</div>
</template>

<script lang="ts">
import ProfileIcon from '@/components/icons/Profile.vue'
import firebase from '@/config/firebase'
import { signOut } from 'firebase/auth'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { mapState } from 'pinia'

export default defineComponent({
	name: 'Navbar',

	components: {
		ProfileIcon
	},

	computed: {
		...mapState(useUserStore, ['user'])
	},

	setup() {
		const router = useRouter()

		const logout = async () => {
			await signOut(firebase.auth)
			router.push('/login')
		}

		return {
			logout
		}
	}
})
</script>
