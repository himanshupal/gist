import { Tag } from '@/models/Tag'

export interface Gist<TagType extends string | object = Tag> {
	id: string
	title: string
	content: string
	tags: Array<TagType>
	sharedWith?: Array<string>
	sharedBy?: string
	isShared?: true
}

export type GistList = Array<Gist>
