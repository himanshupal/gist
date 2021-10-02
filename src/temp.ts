import { nanoid } from 'nanoid'

interface User {
	id: string
	name: string
	email: string
	username: string
	password?: string
}

export interface Tag {
	id: string
	name: string
	color?: string
	textColor?: string
	createdAt: Date
}

interface Gist {
	id: string
	title: string
	content?: string
	tags?: Array<Tag>
	archived?: Date | boolean
	deleted?: Date | boolean
	sharedWith?: Array<User>
	createdAt: Date
	createdBy: User
}

export const notes: Array<Gist> = [
	{
		title: 'Gist 1',
		id: nanoid(),
		createdAt: new Date(2021, 1, 15),
		createdBy: {
			id: nanoid(),
			name: 'Himanshu Pal',
			username: 'himanshupal',
			email: 'him@himanshupal@xyz'
		},
		tags: [
			{
				id: '1',
				name: 'Home',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '2',
				name: 'Work',
				// color: '#ff0000',
				createdAt: new Date(2019, 6, 12)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '4',
				name: 'College',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			}
		]
	},
	{
		title: 'Gist 2',
		id: nanoid(),
		createdAt: new Date(2021, 1, 15),
		createdBy: {
			id: nanoid(),
			name: 'Himanshu Pal',
			username: 'himanshupal',
			email: 'him@himanshupal@xyz'
		},
		tags: [
			{
				id: '1',
				name: 'Home',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '5',
				name: 'Travel',
				// color: '#eecc00',
				createdAt: new Date(2018, 5, 21)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '6',
				name: 'Friends',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	}
]
