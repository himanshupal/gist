<template>
	<div class="flex flex-col">
		<input v-model="searchTerm" type="search" placeholder="Search keywords" class="p-1.5 border border-black dark:border-white bg-white dark:bg-gray-300 dark:text-black" />

		<div class="text-xl pt-3 pb-1 font-semibold">Filter by Tags</div>
		<div class="flex flex-col gap-1.5">
			<div v-if="filteredTags.length" class="flex flex-wrap gap-1.5 p-1 border border-black dark:border-white">
				<button @click="removeTagFromFilters(tag)" v-for="(tag, k) in filteredTags" :key="k" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">{{ tag.name }}</button>
			</div>
			<div class="flex flex-wrap gap-1.5 p-1">
				<button @click="addTagToFilters(tag)" v-for="(tag, k) in tags" :key="k" class="flex items-center justify-center leading-none p-1.5 pt-2.5 rounded-sm text-xs" :style="`background: ${tag.color}; color: ${tag.textColor}`">{{ tag.name }}</button>
			</div>
		</div>

		<div class="text-xl pt-3 pb-1 font-semibold">Saved Notes</div>
		<div class="flex flex-col gap-1.5">
			<div v-for="(note, k) in computedNotes" :key="k" class="text-lg p-1 border border-black dark:border-white">
				{{ note.title }}
				<div class="flex gap-1 justify-end">
					<button @click="addTagToFilters(tag)" v-for="(tag, k) in note.tags" :key="k" class="w-2 h-2" :style="`background: ${tag.color}`" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { getTextColor, randomTextColor } from '@/helpers'
import { notes, Tag } from '@/temp'

export default defineComponent({
	name: 'SideNav',

	setup() {
		const searchTerm = ref<string>('')
		const uniqueTags = ref<Array<Tag>>([])
		const filteredTags = ref<Array<Tag>>([])

		const tags = notes.flatMap((note) => {
			return note.tags?.filter((tag) => {
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

		const addTagToFilters = (tag: Tag) => {
			if (!filteredTags.value.map((tag) => tag.id).includes(tag.id)) {
				filteredTags.value.push(tag)
			}
		}

		const removeTagFromFilters = (tag: Tag) => {
			filteredTags.value = filteredTags.value.filter((savedTag) => savedTag.id !== tag.id)
		}

		const computedNotes = computed(() => {
			if (filteredTags.value.length) {
				return notes.filter((note) => note.tags?.some((tag) => filteredTags.value.map((tag) => tag.id).includes(tag.id)))
			}
			return notes
		})

		return {
			searchTerm,
			filteredTags,
			computedNotes,
			tags,

			getTextColor,
			addTagToFilters,
			removeTagFromFilters
		}
	}
})
</script>
