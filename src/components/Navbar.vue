<template>
	<div class="sticky top-0">
		<div class="flex items-center justify-between px-5 sm:px-10 py-3 bg-gray-300 dark:bg-black dark:text-white leading-none">
			<div class="text-3xl font-semibold">{{ user?.displayName }}</div>
			<div class="flex gap-4 items-center">
				<SecondaryButton size="sm" @click="toggleNewTagModalOpen">New Tag</SecondaryButton>
				<SecondaryButton size="sm" @click="toggleNewGist">New Note</SecondaryButton>
				<span class="h-6 bg-white" style="width: 1px" />
				<SecondaryButton size="sm" @click="logout">Logout</SecondaryButton>
			</div>
		</div>
		<hr class="border-black dark:border-white" />
	</div>
</template>

<script lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import ProfileIcon from '@/components/icons/Profile.vue'
import firebase from '@/config/firebase'
import { signOut } from 'firebase/auth'
import { useNewGistStore, useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'pinia'

export default defineComponent({
	name: 'Navbar',

	components: {
		ProfileIcon,
		SecondaryButton
	},

	computed: {
		...mapState(useUserStore, ['user'])
	},

	methods: {
		...mapActions(useNewGistStore, ['toggleNewGist', 'toggleNewTagModalOpen'])
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
