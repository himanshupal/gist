import { User } from 'firebase/auth'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

interface IUserStore {
	user: Ref<User | null>
	username: Ref<string | null>
	updateUser(user: IUserStore['user']['value']): void
	updateUsername(user: IUserStore['username']['value']): void
}

export default defineStore<'userStore', IUserStore>('userStore', () => {
	const user = ref<IUserStore['user']['value']>(null)
	const username = ref<IUserStore['username']['value']>(null)

	function updateUser(newUser: IUserStore['user']['value']) {
		user.value = newUser
	}

	function updateUsername(newUsername: IUserStore['username']['value']) {
		username.value = newUsername
	}

	return {
		updateUsername,
		updateUser,
		username,
		user
	}
})
