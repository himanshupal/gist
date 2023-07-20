import { Gist, Tag, Tags } from '@/models'
import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'

interface INewGist {
	title: Ref<Gist['title']>
	content: Ref<Gist['content']>
	tags: Ref<Required<Gist>['tags']>

	newGistActive: Ref<boolean>
	newTagModalOpen: Ref<boolean>

	clearNewGistData(): void
	updateTitle(value: string): void
	updateContent(value: string): void
	updateTags(newTags: Tags): void
	removeTag(tag: Tag): void
	skipIfTagPresent(tag: Tag): Tag | undefined

	toggleNewTagModalOpen(): void
	toggleNewGist(): void
}

export default defineStore<'newGist', INewGist>('newGist', () => {
	const title = ref<string>('')
	const content = ref<string>('')
	const tags = ref<Tags>([])

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

	return {
		title,
		content,
		tags,

		newGistActive,
		newTagModalOpen,

		updateTitle,
		updateContent,
		updateTags,
		removeTag,
		skipIfTagPresent,
		clearNewGistData,

		toggleNewTagModalOpen,
		toggleNewGist
	}
})
