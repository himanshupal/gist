<template>
	<dialog class="m-0 p-2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" :open="newTagModalOpen">
		<form method="dialog" class="flex gap-2 flex-col" @submit="createNewTag">
			<div class="flex gap-2 items-center justify-between">
				<label for="name">Tag Name</label>
				<input name="name" type="text" v-model.trim="name" maxlength="16" class="w-48 border border-black p-1" />
			</div>

			<div class="flex gap-2 items-center justify-between">
				<label for="color">Color</label>
				<input name="color" type="color" v-model.trim="color" class="w-48 border border-black" />
			</div>

			<div class="flex gap-2">
				<SecondaryButton class="flex-1" size="sm" type="submit">Save</SecondaryButton>
				<SecondaryButton class="flex-1" size="sm" type="button" @click="toggleNewTagModalOpen">Cancel</SecondaryButton>
			</div>
		</form>
	</dialog>
</template>

<script lang="ts">
import { useNewGistStore, useUserStore, useNewTagStore } from '@/store'
import SecondaryButton from '@/components/SecondaryButton.vue'
import { ref, set, push } from 'firebase/database'
import { computed, defineComponent, watch } from 'vue'
import { mapState, mapActions } from 'pinia'
import firebase from '@/config/firebase'

export default defineComponent({
	name: 'NewTagModal',

	components: {
		SecondaryButton
	},

	computed: {
		...mapState(useNewGistStore, ['newTagModalOpen'])
	},

	methods: {
		...mapActions(useNewGistStore, ['toggleNewTagModalOpen'])
	},

	setup() {
		const newTagStore = useNewTagStore()

		const name = computed({
			get: () => newTagStore.title,
			set: newTagStore.setTitle
		})

		const color = computed({
			get: () => newTagStore.color,
			set: newTagStore.setColor
		})

		const userStore = useUserStore()
		const newGistStore = useNewGistStore()

		watch(newGistStore, (store) => {
			if (!store.newTagModalOpen) {
				newTagStore.clearTagData()
			}
		})

		const createNewTag = async () => {
			if (!userStore.user) return
			try {
				if (name.value) {
					if (newTagStore.updateId) {
						await set(ref(firebase.database, `/users/${userStore.user.uid}/tags/${newTagStore.updateId}`), { name: name.value, color: color.value })
						newTagStore.setUpdateId('')
					} else {
						await set(push(ref(firebase.database, `/users/${userStore.user.uid}/tags`)), { name: name.value, color: color.value })
					}
				}
			} catch (err) {
				console.error('Failed creating tag:', err)
			} finally {
				newGistStore.toggleNewTagModalOpen()
			}
		}

		return {
			name,
			color,

			createNewTag
		}
	}
})
</script>
