import { nanoid } from 'nanoid'
import { GistList } from '@/models'

export const notes: GistList = [
	{
		title: 'Gist 1',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
		id: nanoid(),
		createdAt: new Date(2021, 1, 15),
		createdBy: {
			id: nanoid(),
			name: 'Himanshu Pal',
			username: 'himanshupal',
			email: 'him@himanshupal@xyz'
		},
		sharedWith: [
			{
				id: nanoid(),
				name: 'Himanshu Pal',
				username: 'himanshupal',
				email: 'him@himanshupal@xyz'
			},
			{
				id: nanoid(),
				name: 'Himanshu Pal',
				username: 'himanshupal',
				email: 'him@himanshupal@xyz'
			},
			{
				id: nanoid(),
				name: 'Lorem Ipsum g elit. Minima consectetur culpa accusantium',
				username: 'himanshupal16543',
				email: 'him@himanshupal@xyz'
			}
		],
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
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur.',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis.',
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
	},
	{
		title: 'Gist 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '7',
				name: 'Chetan',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Im suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '9',
				name: 'Faraz',
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
	},
	{
		title: 'Gist 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			},
			{
				id: '1',
				name: 'Home',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '10',
				name: 'Priyanshu',
				// color: '#ff0000',
				createdAt: new Date(2019, 6, 12)
			},
			{
				id: '9',
				name: 'Faraz',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '11',
				name: 'Arshad',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '5',
				name: 'Travel',
				// color: '#eecc00',
				createdAt: new Date(2018, 5, 21)
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
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Gist 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '7',
				name: 'Chetan',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Im suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '9',
				name: 'Faraz',
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
	},
	{
		title: 'Gist 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			},
			{
				id: '1',
				name: 'Home',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '10',
				name: 'Priyanshu',
				// color: '#ff0000',
				createdAt: new Date(2019, 6, 12)
			},
			{
				id: '9',
				name: 'Faraz',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '11',
				name: 'Arshad',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '5',
				name: 'Travel',
				// color: '#eecc00',
				createdAt: new Date(2018, 5, 21)
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
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Gist 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '7',
				name: 'Chetan',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Im suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '9',
				name: 'Faraz',
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
	},
	{
		title: 'Gist 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			},
			{
				id: '1',
				name: 'Home',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '10',
				name: 'Priyanshu',
				// color: '#ff0000',
				createdAt: new Date(2019, 6, 12)
			},
			{
				id: '9',
				name: 'Faraz',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '11',
				name: 'Arshad',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '5',
				name: 'Travel',
				// color: '#eecc00',
				createdAt: new Date(2018, 5, 21)
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
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Gist 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '7',
				name: 'Chetan',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Im suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, error libero officiis, labore blanditiis molestiae sed? Voluptatibus suscipit nisi esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '9',
				name: 'Faraz',
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
	},
	{
		title: 'Gist 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '8',
				name: 'Ranvir',
				// color: '#ffff00',
				createdAt: new Date(2012, 11, 31)
			},
			{
				id: '1',
				name: 'Home',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '10',
				name: 'Priyanshu',
				// color: '#ff0000',
				createdAt: new Date(2019, 6, 12)
			},
			{
				id: '9',
				name: 'Faraz',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '11',
				name: 'Arshad',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '5',
				name: 'Travel',
				// color: '#eecc00',
				createdAt: new Date(2018, 5, 21)
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
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	},
	{
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur culpa accusantium vero praesentium consequuntur prantium consequuntur.',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem, earum obcaecati architecto pariatur libero nulla nisi quas? Optio a repudiandae asperiores quae atque officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus earum delectus dignissimos quam sit autem suscipit officia, corrupti quis aperiam quibusdam aliquid culpa molestias, erri esse. Quae, facilis, expedita debitis unde aspernatur modi molestias impedit error, praesentium fuga eveniet voluptate?',
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
				id: '12',
				name: 'Abhay',
				// color: '#0000ff',
				createdAt: new Date(2020, 3, 30)
			},
			{
				id: '3',
				name: 'Office',
				// color: '#00ff00',
				createdAt: new Date(2022, 4, 19)
			},
			{
				id: '13',
				name: 'Vivek',
				// color: '#00ffff',
				createdAt: new Date(2017, 10, 24)
			}
		]
	}
]
