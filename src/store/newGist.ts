import { Gist, Tag, Tags } from '@/models'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

interface INewGist {
	title: Ref<Gist['title']>
	content: Ref<Gist['content']>
	tags: Ref<Required<Gist>['tags']>
	allTags: Ref<Required<Gist>['tags'] | undefined>

	newGistActive: Ref<boolean>
	newTagModalOpen: Ref<boolean>

	clearNewGistData(): void
	updateTitle(value: string): void
	updateContent(value: string): void
	updateTags(newTags: Tags): void
	removeTag(tag: Tag): void
	skipIfTagPresent(tag: Tag): Tag | undefined

	addToAllTags(tag: Tag): void
	removeFromAllTags(tag: Tag): void

	toggleNewTagModalOpen(): void
	toggleNewGist(): void
}

export default defineStore<'newGist', INewGist>('newGist', () => {
	const title = ref<string>('')
	const content = ref<string>('')
	const tags = ref<Tags>([])

	const allTags = ref<Tags>()

	const newGistActive = ref<boolean>(false)
	const newTagModalOpen = ref<boolean>(false)

	const updateTitle: INewGist['updateTitle'] = (value) => {
		title.value = value
	}

	const updateContent: INewGist['updateContent'] = (value) => {
		content.value = value
	}

	const removeTag: INewGist['removeTag'] = (tag) => {
		tags.value = tags.value.filter(({ id }) => id !== tag.id)
	}

	const updateTags: INewGist['updateTags'] = (newTags) => {
		tags.value = newTags
	}

	const skipIfTagPresent: INewGist['skipIfTagPresent'] = (tag) => {
		if (!tags.value.some(({ id }) => id === tag.id)) {
			return tag
		}
	}

	const clearNewGistData = () => {
		title.value = ''
		content.value = ''
		tags.value = []
	}

	const toggleNewTagModalOpen = () => {
		newTagModalOpen.value = !newTagModalOpen.value
	}

	const toggleNewGist = () => {
		newGistActive.value = !newGistActive.value
	}

	const addToAllTags = (tag: Tag) => {
		allTags.value ||= []
		allTags.value.push(tag)
	}

	const removeFromAllTags = (tag: Tag) => {
		allTags.value ||= []
		allTags.value = allTags.value.filter(({ id }) => id !== tag.id)
	}

	return {
		title,
		content,
		tags,
		allTags,

		newGistActive,
		newTagModalOpen,

		updateTitle,
		updateContent,
		updateTags,
		removeTag,
		skipIfTagPresent,
		clearNewGistData,

		toggleNewTagModalOpen,
		toggleNewGist,

		addToAllTags,
		removeFromAllTags
	}
})
