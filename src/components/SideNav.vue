<template>
	<div class="flex flex-col">
		<div class="text-xl pt-3 pb-1 font-semibold">Search by Title</div>
		<input v-model="searchTerm" type="search" placeholder="Search keywords" class="w-full outline-none p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300 dark:text-black" />

		<div class="text-xl pt-3 pb-1 font-semibold">Filter by Tags</div>
		<div class="flex flex-col gap-1.5">
			<div v-if="filteredTags.length" class="flex flex-wrap gap-1.5 p-1 border border-black dark:border-white">
				<button @click="removeTagFromFilters(tag)" v-for="(tag, k) in filteredTags" :key="k" :title="`Remove ${tag.name} from filters`" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">
					{{ tag.name }}
					<CloseIcon :color="tag.textColor" :width="12" :height="12" class="ml-1" />
				</button>
			</div>
			<div class="flex flex-wrap gap-1.5 py-1">
				<button @click="addTagToFilters(tag)" v-for="(tag, k) in uniqueTags" :key="k" :title="`Add ${tag.name} to filters`" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">{{ tag.name }}</button>
			</div>
		</div>

		<div class="text-xl pt-3 pb-1 font-semibold">
			<template v-if="searchTerm">
				Search Results <span class="font-normal">({{ computedNotes.length }})</span>
			</template>
			<template v-else>Saved Notes</template>
		</div>
		<div v-if="computedNotes.length" class="max-h-96 overflow-auto flex flex-col gap-1.5">
			<div v-for="(note, k) in computedNotes" :key="k" class="text-sm p-1 leading-snug border border-black dark:border-white">
				<span class="cursor-pointer" @click="selectNote(note)">{{ note.title }}</span>
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
import { computed, defineComponent, ref } from 'vue'
import { GistList, Tag, Tags } from '@/models'
import { getTextColor, randomTextColor } from '@/helpers'
import CloseIcon from '@/components/icons/Close.vue'

export default defineComponent({
	name: 'SideNav',

	components: {
		CloseIcon
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
			type: Array as () => Tags
		},
		addTagToFilters: {
			type: Function
		},
		removeTagFromFilters: {
			type: Function
		}
	},

	setup(props) {
		const searchTerm = ref<string>('')
		const uniqueTags = ref<Tags>([])

		props.notes.forEach((note) => {
			note.tags?.forEach((tag) => {
				if (!uniqueTags.value.map((tag) => tag.id).includes(tag.id)) {
					if (!tag?.color) tag.color = randomTextColor()
					tag.textColor = getTextColor(tag.color)
					uniqueTags.value.push(tag)
					return tag
				} else {
					const sampleTag = uniqueTags.value.find((current) => current.id === tag.id)
					if (!tag?.color) tag.color = sampleTag?.color
					tag.textColor = sampleTag?.textColor
				}
			})
		})

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

		return {
			searchTerm,
			uniqueTags,
			computedNotes,

			getTextColor
		}
	}
})
</script>
