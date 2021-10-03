import { Tag } from '@/models/Tag'
import { User } from '@/models/User'

export interface Gist {
	id: string
	title: string
	content: string
	tags?: Array<Tag>
	archived?: Date | boolean
	deleted?: Date | boolean
	sharedWith?: Array<User>
	createdAt: Date
	createdBy: User
}

export type GistList = Array<Gist>
