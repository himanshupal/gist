import { Tag } from '@/models/Tag'
import { User } from './User'

export interface Gist {
	id: string
	title: string
	content: string
	tags?: Array<Tag>
	sharedWith?: Array<string | User>
	createdAt: Date
	createdBy: string
}

export type GistList = Array<Gist>
