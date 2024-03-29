<template>
	<div class="flex flex-col">
		<div class="text-xl pt-3 pb-1 font-semibold">Search by Title</div>
		<input v-model="searchTerm" type="search" placeholder="Search keywords" class="w-full outline-none p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300 dark:text-black" />

		<div class="text-xl pt-3 pb-1 font-semibold">Filter by Tags</div>
		<div class="flex flex-col gap-1.5">
			<Draggable v-if="filteredTags?.length" :list="filteredTags" group="tags" itemKey="id" class="flex flex-wrap gap-1.5 p-1 border border-black dark:border-white" ref="filterEl" @change="removeIfPresentInFilter">
				<template #item="{ element: tag }: { element: Tag }">
					<button @click="removeTagFromFilters?.(tag)" :title="`Remove ${tag.name} from filters`" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">
						{{ tag.name }}
						<CloseIcon :color="tag.textColor" :width="12" :height="12" class="ml-1" />
					</button>
				</template>
			</Draggable>
			<Draggable :list="allTags" itemKey="id" :group="{ name: 'tags', pull: 'clone', put: false }" class="flex flex-wrap gap-1.5 py-1" :clone="skipIfTagPresent">
				<template #item="{ element: tag }: { element: Tag }">
					<button @click="addTagToFilters(tag)" @contextmenu.prevent="editTag(tag)" :title="`Add ${tag.name} to filters or right click to edit`" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">{{ tag.name }}</button>
				</template>
			</Draggable>
		</div>

		<div class="text-xl pt-3 pb-1 font-semibold">
			<template v-if="searchTerm">
				Search Results <span class="font-normal">({{ computedNotes.length }})</span>
			</template>
			<template v-else>Saved Notes</template>
		</div>
		<div v-if="computedNotes.length" class="overflow-auto flex flex-col gap-1.5" style="max-height: calc(100vh - 150px)">
			<div v-for="(note, k) in computedNotes" :key="k" class="text-sm p-1 leading-snug border border-black dark:border-white">
				<span class="cursor-pointer" @click="selectNote?.(note)">{{ note.title }}</span>
				<div class="flex gap-1 justify-end">
					<button @click="addTagToFilters(tag)" v-for="(tag, k) in note.tags" :key="k" :title="tag.name" class="w-2 h-2" :style="`background: ${tag.color}`" />
				</div>
			</div>
		</div>
		<div v-else class="text-sm p-1 text-red-600 dark:text-yellow-300 leading-snug border border-black dark:border-white">
			<template v-if="searchTerm">No Results Found!</template>
			<template v-else>Empty List</template>
		</div>
	</div>
</template>

<script lang="ts">
import { useNewGistStore, useNewTagStore } from '@/store'
import { computed, defineComponent, ref } from 'vue'
import CloseIcon from '@/components/icons/Close.vue'
import { GistList, Tag, Tags } from '@/models'
import { mapActions, mapState } from 'pinia'
import { getTextColor } from '@/helpers'
import Draggable from 'vuedraggable'

export default defineComponent({
	name: 'SideNav',

	components: {
		CloseIcon,
		Draggable
	},

	props: {
		notes: {
			type: Array as () => GistList,
			required: true
		},
		selectNote: {
			type: Function
		},

		filteredTags: {
			type: Array as () => Tags,
			required: true
		},
		addTagToFilters: {
			type: Function,
			required: true
		},
		removeTagFromFilters: {
			type: Function
		}
	},

	computed: {
		...mapState(useNewGistStore, ['allTags'])
	},

	methods: {
		...mapActions(useNewGistStore, ['skipIfTagPresent'])
	},

	setup(props) {
		const newGistStore = useNewGistStore()
		const newTagStore = useNewTagStore()

		const filterEl = ref<(Record<string, any> & HTMLDivElement) | null>(null)
		const searchTerm = ref<string>('')

		const computedNotes = computed(() => {
			if (props.filteredTags?.length) {
				return props.notes.filter((note) => note.tags?.some((tag) => props.filteredTags?.map((tag) => tag.id).includes(tag.id)))
			}
			if (searchTerm.value) {
				// TODO: Implement search over WS
				return props.notes.filter((note) => new RegExp(searchTerm.value, 'i').test(note.title))
			}
			return props.notes
		})

		const removeIfPresentInFilter = ({ added }: { added: { element: Tag; newIndex: number } }) => {
			if (props.filteredTags.filter(({ id }) => added.element.id === id).length > 1) {
				props.filteredTags.splice(added.newIndex, 1)
			}
		}

		const editTag = (tag: Tag) => {
			if (tag.isShared) return alert('This tag is shared by some user and cannot be edited')
			newTagStore.setTitle(tag.name)
			newTagStore.setColor(tag.color)
			newTagStore.setUpdateId(tag.id)
			newGistStore.toggleNewTagModalOpen()
		}

		return {
			filterEl,
			searchTerm,
			computedNotes,

			editTag,
			getTextColor,
			removeIfPresentInFilter
		}
	}
})
</script>
