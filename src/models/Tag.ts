export interface Tag {
	id: string
	name: string
	color?: string
	textColor?: string
	createdAt: Date
}

export type Tags = Array<Tag>
