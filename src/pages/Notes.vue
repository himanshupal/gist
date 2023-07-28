<template>
	<div class="min-h-screen bg-gray-200 dark:bg-black dark:text-white flex flex-col">
		<Navbar />

		<div class="flex gap-3 px-5 sm:px-10 pt-2.5 pb-5 sm:pb-10 flex-1">
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
							<SecondaryButton size="sm" @click="deleteNote">Delete</SecondaryButton>
						</div>
						<div class="w-96 flex flex-col gap-1.5 text-sm">
							<div class="text-xl font-semibold">Shared with</div>
							<form @submit.prevent="invite" class="flex border border-black dark:border-white">
								<input type="text" placeholder="Username or Email" v-model="inviteUser" class="p-1 flex-grow outline-none dark:text-black" />
								<button type="submit" class="p-1 px-2.5">Invite</button>
							</form>
							<div v-if="selectedNote.sharedWith?.length" class="flex flex-col gap-1.5">
								<template v-for="user in selectedNote.sharedWith">
									<div v-if="typeof user !== 'string'" :key="user.id" class="flex items-center justify-between font-medium">
										{{ user.name.length > 24 ? `${user.name.substring(0, 24)}...` : user.name }} <span @click="revoke(user)" class="flex items-center font-light p-1 border border-black dark:border-white cursor-pointer">@{{ user.username }}<CloseIcon :width="14" :height="14" color="white" class="mx-1" /></span>
									</div>
								</template>
							</div>
						</div>
					</div>
				</template>

				<template v-else-if="newGistActive">
					<form class="flex flex-col" @submit.prevent="saveNewNote" @reset="clearNewGistData">
						<label for="title" class="text-xl pt-3 pb-1">Title</label>
						<input name="title" type="text" class="w-full outline-none p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300 dark:text-black" v-model="newGistTitle" />

						<label for="tags" class="text-xl pt-3 pb-1">Tags <span class="text-sm">(Drag from the list)</span></label>
						<Draggable v-model="newGistTags" itemKey="id" group="tags" class="w-full outline-none p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300 dark:text-black flex gap-1.5" style="height: 38px">
							<template #item="{ element: tag }: { element: Tag }">
								<button @click="removeTag(tag.id)" :title="`Remove ${tag.name} from tags`" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">{{ tag.name }} <CloseIcon :width="12" :height="12" class="ml-0.5" /></button>
							</template>
						</Draggable>

						<label for="content" class="text-xl pt-3 pb-1">Content</label>
						<textarea name="content" class="w-full outline-none p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300 dark:text-black h-96" v-model="newGistContent" />

						<div class="flex justify-end gap-6">
							<Button type="button" class="mt-6 text-center" @click="clearAndToggleNewGist">Cancel</Button>
							<Button type="reset" class="mt-6 text-center">Clear</Button>
							<Button type="submit" class="mt-6 text-center" :disabled="isSaving || invalidInput">{{ isSaving ? 'Saving...' : 'Save' }}</Button>
						</div>
					</form>
				</template>

				<div v-else class="text-xl pt-3 pb-1 text-center text-red-600 dark:text-yellow-300">Please select a Gist first...</div>
			</div>
		</div>
	</div>

	<NewTagModal />
</template>

<script lang="ts">
import { set, ref, push, Unsubscribe, onChildAdded, update, onChildChanged, remove, onChildRemoved } from 'firebase/database'
import { computed, defineComponent, onMounted, onUnmounted, ref as useRef, watch } from 'vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import { getTextColor, randomTextColor } from '@/helpers'
import { useNewGistStore, useUserStore } from '@/store'
import NewTagModal from '@/components/NewTagModal.vue'
import CloseIcon from '@/components/icons/Close.vue'
import { Gist, Tag, Tags, User } from '@/models'
import SideNav from '@/components/SideNav.vue'
import Navbar from '@/components/Navbar.vue'
import Button from '@/components/Button.vue'
import { mapActions, mapState } from 'pinia'
import firebase from '@/config/firebase'
import Draggable from 'vuedraggable'

export default defineComponent({
	name: 'Notes',

	components: {
		SecondaryButton,
		Draggable,
		Navbar,
		Button,
		SideNav,
		CloseIcon,
		NewTagModal
	},

	computed: {
		...mapState(useNewGistStore, ['newGistActive', 'newTagModalOpen'])
	},

	methods: {
		...mapActions(useNewGistStore, ['removeTag', 'clearNewGistData'])
	},

	setup() {
		const selectedNote = useRef<Gist>()
		const inviteUser = useRef<string>('')
		const filteredTags = useRef<Tags>([])
		const notes = useRef<Gist[]>([])

		const isSaving = useRef<boolean>(false)
		const isInitialChange = useRef<boolean>(true)
		const isInitialChangeForTags = useRef<boolean>(true)
		const isEditing = useRef<string | false>(false)

		const unsubFromChildAdded = useRef<Unsubscribe>()
		const unsubFromChildUpdated = useRef<Unsubscribe>()
		const unsubFromChildRemoved = useRef<Unsubscribe>()

		const unsubFromTagsChildAdded = useRef<Unsubscribe>()
		const unsubFromTagsChildUpdated = useRef<Unsubscribe>()
		const unsubFromTagsChildRemoved = useRef<Unsubscribe>()

		const userStore = useUserStore()
		const newGistStore = useNewGistStore()

		const newGistTitle = computed({
			get() {
				return newGistStore.title
			},
			set(v) {
				newGistStore.updateTitle(v)
			}
		})

		const newGistContent = computed({
			get() {
				return newGistStore.content
			},
			set(v) {
				newGistStore.updateContent(v)
			}
		})

		const newGistTags = computed({
			get() {
				return newGistStore.tags
			},
			set(v) {
				newGistStore.updateTags(v)
			}
		})

		const invalidInput = computed(() => !newGistTitle.value || !newGistContent.value)

		const fetchAndUpdateTags = () => {
			if (userStore.user && isInitialChangeForTags.value) {
				isInitialChangeForTags.value = false
				newGistStore.allTags?.length && newGistStore.clearAllCachedTags()
				unsubFromChildAdded.value = onChildAdded(ref(firebase.database, `/users/${userStore.user.uid}/tags`), (data) => {
					const tag: Tag = data.val()
					const color = tag.color || randomTextColor()
					const textColor = getTextColor(color)
					newGistStore.addToAllTags({ ...tag, id: data.key as string, color, textColor })
				})
				unsubFromTagsChildUpdated.value = onChildChanged(ref(firebase.database, `/users/${userStore.user.uid}/tags`), (data) => {
					const tag: Tag = data.val()
					const currentTag = newGistStore.allTags!.find(({ id }) => id === data.key)
					newGistStore.updateTag({ ...currentTag, ...tag })
				})
				unsubFromTagsChildRemoved.value = onChildRemoved(ref(firebase.database, `/users/${userStore.user.uid}/tags`), (data) => {
					newGistStore.removeTag(data.key as string)
				})
			}
		}

		const fetchAndUpdateNotes = () => {
			if (userStore.user && newGistStore.allTags && isInitialChange.value) {
				isInitialChange.value = false
				unsubFromChildAdded.value = onChildAdded(ref(firebase.database, `/users/${userStore.user.uid}/notes`), (data) => {
					const note: Gist<string> = data.val()
					notes.value.push({ ...note, id: data.key as string, tags: note.tags.map((id) => newGistStore.allTags!.find((f) => f.id === id)).filter(Boolean) as Tags })
				})
				unsubFromChildUpdated.value = onChildChanged(ref(firebase.database, `users/${userStore.user.uid}/notes`), (data) => {
					const note: Gist<string> = data.val()
					notes.value = notes.value.map((v) => (v.id === data.key ? { ...v, ...note, tags: note.tags?.map((id) => newGistStore.allTags!.find((f) => f.id === id)).filter(Boolean) as Tags } : v))
				})
				unsubFromChildRemoved.value = onChildRemoved(ref(firebase.database, `users/${userStore.user.uid}/notes`), (data) => {
					notes.value = notes.value.filter((note) => note.id !== data.key)
				})
			}
		}

		watch(newGistStore, ({ newGistActive }) => {
			if (newGistActive) {
				selectedNote.value = undefined
			} else if (isEditing.value) {
				isEditing.value = false
			}
		})

		watch([userStore, newGistStore], fetchAndUpdateNotes)
		onMounted(fetchAndUpdateNotes)

		watch(userStore, fetchAndUpdateTags)
		onMounted(fetchAndUpdateTags)

		onUnmounted(() => {
			unsubFromChildAdded.value?.()
			unsubFromChildUpdated.value?.()
			unsubFromChildRemoved.value?.()
			unsubFromTagsChildAdded.value?.()
			unsubFromTagsChildUpdated.value?.()
			unsubFromTagsChildRemoved.value?.()
		})

		const saveNewNote = async () => {
			if (!userStore.user || invalidInput.value) return
			try {
				isSaving.value = true
				if (isEditing.value) {
					await update(ref(firebase.database), {
						[`/users/${userStore.user.uid}/notes/${isEditing.value}/title`]: newGistTitle.value,
						[`/users/${userStore.user.uid}/notes/${isEditing.value}/content`]: newGistContent.value,
						[`/users/${userStore.user.uid}/notes/${isEditing.value}/tags`]: newGistStore.tags.map(({ id }) => id)
					})
				} else {
					await set(push(ref(firebase.database, `/users/${userStore.user.uid}/notes`)), {
						title: newGistTitle.value,
						content: newGistContent.value,
						tags: newGistTags.value.map(({ id }) => id)
					})
				}
				clearAndToggleNewGist()
			} catch (err) {
				console.error("Couldn't save the data due to", err)
			} finally {
				if (isEditing.value) isEditing.value = false
				isSaving.value = false
			}
		}

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
			if (newGistStore.newGistActive) {
				newGistStore.toggleNewGist()
			}
		}

		const edit = () => {
			if (!selectedNote.value) return
			newGistStore.updateTitle(selectedNote.value.title)
			newGistStore.updateContent(selectedNote.value.content)
			newGistStore.updateTags(selectedNote.value.tags || [])
			isEditing.value = selectedNote.value.id
			newGistStore.toggleNewGist()
		}

		const deleteNote = async () => {
			if (!userStore.user || !selectedNote.value) return
			if (!window.confirm('Are you sure you want to delete this note?')) return
			try {
				await remove(ref(firebase.database, `/users/${userStore.user.uid}/notes/${selectedNote.value.id}`))
				selectedNote.value = undefined
			} catch (err) {
				console.error(`Failed deleting the note:`, err)
			}
		}

		const invite = () => {
			console.log({ invite: inviteUser.value })
		}

		const revoke = (user: User) => {
			console.log({ revoke: user })
		}

		const clearAndToggleNewGist = () => {
			newGistStore.clearNewGistData()
			newGistStore.toggleNewGist()
		}

		return {
			notes,
			inviteUser,
			selectedNote,
			filteredTags,

			invalidInput,
			newGistTitle,
			newGistContent,
			newGistTags,
			isSaving,

			edit,
			invite,
			revoke,
			deleteNote,
			selectNote,
			addTagToFilters,
			removeTagFromFilters,
			clearAndToggleNewGist,
			saveNewNote
		}
	}
})
</script>
