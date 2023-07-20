<template>
	<dialog class="m-0 p-2 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" :open="newTagModalOpen">
		<form method="dialog" class="flex gap-2 flex-col" @submit="toggleNewTagModalOpen">
			<div class="flex gap-2 items-center justify-between">
				<label for="name">Tag Name</label>
				<input name="name" type="text" v-model.trim="name" maxlength="16" class="w-48 border border-black p-1" />
			</div>

			<div class="flex gap-2 items-center justify-between">
				<label for="color">Color</label>
				<input name="color" type="color" v-model.trim="color" class="w-48 border border-black" />
			</div>

			<div class="flex gap-2">
				<SecondaryButton class="flex-1" size="sm" type="button" @click="createNewTag">Save</SecondaryButton>
				<SecondaryButton class="flex-1" size="sm" type="submit">Cancel</SecondaryButton>
			</div>
		</form>
	</dialog>
</template>

<script lang="ts">
import SecondaryButton from '@/components/SecondaryButton.vue'
import { useNewGistStore, useUserStore } from '@/store'
import { defineComponent, ref as useRef } from 'vue'
import { ref, set, push } from 'firebase/database'
import { mapState, mapActions } from 'pinia'
import { randomTextColor } from '@/helpers'
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

	setup(_, ctx) {
		const name = useRef<string>('')
		const color = useRef<string>(randomTextColor())

		const userStore = useUserStore()
		const newGistStore = useNewGistStore()

		const createNewTag = async () => {
			if (!userStore.user) return
			await set(push(ref(firebase.database, `/users/${userStore.user.uid}/tags`)), {
				name: name.value,
				color: color.value
			})
			newGistStore.toggleNewTagModalOpen()
		}

		return {
			name,
			color,

			createNewTag
		}
	}
})
</script>
