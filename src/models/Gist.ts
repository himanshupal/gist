import { Tag } from '@/models/Tag'
import { User } from './User'

export interface Gist<TagType extends string | object = Tag> {
	id: string
	title: string
	content: string
	tags: Array<TagType>
	sharedWith?: Array<string | User>
	createdAt: Date
	createdBy: string
}

export type GistList = Array<Gist>
