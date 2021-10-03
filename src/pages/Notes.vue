<template>
	<div class="min-h-screen bg-gray-200 dark:bg-black dark:text-white">
		<Navbar />

		<hr class="border-black dark:border-white" />

		<div class="flex gap-3 px-5 sm:px-10 pt-2.5 pb-5 sm:pb-10">
			<SideNav :notes="notes" :selectNote="selectNote" :filteredTags="filteredTags" :addTagToFilters="addTagToFilters" :removeTagFromFilters="removeTagFromFilters" class="p-1 w-1/2 md:w-1/4" />

			<div class="flex flex-col gap-1.5 flex-grow p-1 w-1/2 md:w-3/4">
				<template v-if="selectedNote">
					<div class="flex flex-wrap gap-1.5 pt-3 pb-1">
						<button @click="addTagToFilters(tag)" v-for="(tag, k) in selectedNote.tags" :key="k" :title="`Add ${tag.name} to filters`" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">{{ tag.name }}</button>
					</div>
					<div class="text-3xl py-1 font-semibold">{{ selectedNote.title }}</div>
					<div class="font-light">{{ selectedNote.content }}</div>

					<hr class="border-black dark:border-white" />

					<div class="flex flex-row-reverse gap-1.5 justify-between">
						<div class="flex gap-2 self-start">
							<SecondaryButton size="sm" @click="edit">Edit</SecondaryButton>
							<SecondaryButton size="sm" @click="remove">Delete</SecondaryButton>
						</div>
						<div class="w-96 flex flex-col gap-1.5 text-sm">
							<div class="text-xl font-semibold">Shared with</div>
							<form @submit.prevent="invite" class="flex border border-black dark:border-white">
								<input type="text" placeholder="Username or Email" v-model="inviteUser" class="p-1 flex-grow outline-none dark:text-black" />
								<button type="submit" class="p-1 px-2.5">Invite</button>
							</form>
							<div v-if="selectedNote.sharedWith?.length" class="flex flex-col gap-1.5">
								<div v-for="user in selectedNote.sharedWith" :key="user.id" class="flex items-center justify-between font-medium">
									{{ user.name.length > 24 ? `${user.name.substring(0, 24)}...` : user.name }} <span @click="revoke(user)" class="flex items-center font-light p-1 border border-black dark:border-white cursor-pointer">@{{ user.username }}<CloseIcon :width="14" :height="14" color="white" class="mx-1" /></span>
								</div>
							</div>
						</div>
					</div>
				</template>
				<template v-else>
					<div class="text-xl pt-3 pb-1 text-center text-red-600 dark:text-yellow-300">Please select a Gist first...</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Gist, Tag, Tags, User } from '@/models'
import SecondaryButton from '@/components/SecondaryButton.vue'
import Navbar from '@/components/Navbar.vue'
import SideNav from '@/components/SideNav.vue'
import CloseIcon from '@/components/icons/Close.vue'

import { notes } from '@/temp'

export default defineComponent({
	name: 'Notes',

	components: {
		SecondaryButton,
		Navbar,
		SideNav,
		CloseIcon
	},

	setup() {
		const selectedNote = ref<Gist>()
		const inviteUser = ref<string>('')
		const filteredTags = ref<Tags>([])

		const addTagToFilters = (tag: Tag) => {
			if (!filteredTags.value.map((tag) => tag.id).includes(tag.id)) {
				filteredTags.value.push(tag)
			}
		}

		const removeTagFromFilters = (tag: Tag) => {
			filteredTags.value = filteredTags.value.filter((savedTag) => savedTag.id !== tag.id)
		}

		const selectNote = (note: Gist) => {
			selectedNote.value = note
			console.log({ note })
		}

		const edit = () => {
			console.log({ edit: selectedNote.value })
		}

		const remove = () => {
			console.log({ remove: selectedNote.value })
		}

		const invite = () => {
			console.log({ invite: inviteUser.value })
		}

		const revoke = (user: User) => {
			console.log({ revoke: user })
		}

		return {
			notes,
			inviteUser,
			selectedNote,
			filteredTags,

			edit,
			remove,
			invite,
			revoke,
			selectNote,
			addTagToFilters,
			removeTagFromFilters
		}
	}
})
</script>
