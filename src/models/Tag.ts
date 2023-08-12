export interface Tag {
	id: string
	name: string
	color: string
	textColor?: string
	isShared?: true
}

export type Tags = Array<Tag>
