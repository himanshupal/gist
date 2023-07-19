<template>
	<router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onUnmounted, ref as useRef } from 'vue'
import { get, ref } from 'firebase/database'
import { LOGIN_STATUS_KEY } from '@/config'
import { Unsubscribe } from 'firebase/auth'
import firebase from '@/config/firebase'
import { useUserStore } from '@/store'

export default defineComponent({
	name: 'Layout',

	setup() {
		const unsub = useRef<Unsubscribe>()
		const userStore = useUserStore()

		onBeforeMount(() => {
			unsub.value = firebase.auth.onAuthStateChanged((user) => {
				userStore.updateUser(user)
				if (user) {
					localStorage.setItem(LOGIN_STATUS_KEY, '1')
					get(ref(firebase.database, `/users/${user.uid}`)).then((userData) => {
						const { username } = userData.val()
						userStore.updateUsername(username)
					})
				} else {
					localStorage.removeItem(LOGIN_STATUS_KEY)
					userStore.updateUsername(null)
				}
			})
		})

		onUnmounted(() => {
			unsub.value?.()
		})
	}
})
</script>

<style lang="css">
@import 'tailwindcss/tailwind.css';
@import url('https://fonts.googleapis.com/css2?&family=Special+Elite&family=Spartan&family=Abril+Fatface&display=swap');
</style>
