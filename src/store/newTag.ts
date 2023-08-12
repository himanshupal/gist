import { randomTextColor } from '@/helpers'
import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'
import { Tag } from '@/models'

interface INewTag {
	title: Ref<Tag['name']>
	color: Ref<Tag['color']>
	updateId: Ref<Tag['id']>

	setTitle(title: Tag['name']): void
	setColor(color: Tag['color']): void
	setUpdateId(id: Tag['id']): void
	clearTagData(): void
}

export default defineStore<'newTag', INewTag>('newTag', () => {
	const title = ref<string>('')
	const updateId = ref<string>('')
	const color = ref<string>(randomTextColor())

	const setTitle: INewTag['setTitle'] = (value) => {
		title.value = value
	}

	const setColor: INewTag['setColor'] = (value) => {
		color.value = value
	}

	const setUpdateId: INewTag['setUpdateId'] = (value) => {
		updateId.value = value
	}

	const clearTagData: INewTag['clearTagData'] = () => {
		color.value = randomTextColor()
		title.value = ''
	}

	return {
		title,
		color,
		updateId,

		setTitle,
		setColor,
		setUpdateId,
		clearTagData
	}
})
