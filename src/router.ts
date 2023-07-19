import { nextTick } from '@vue/runtime-core'
import { createRouter, createWebHistory, Router, RouterHistory, RouteRecordRaw, isNavigationFailure } from 'vue-router'

import { LOGIN_STATUS_KEY, appName } from '@/config'

import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import URI from '@/pages/URI.vue'
import URIList from '@/pages/URIList.vue'
import Notes from '@/pages/Notes.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Anytime Notes'
		}
	},
	{
		path: '/uri',
		name: 'URI',
		component: URI,
		meta: {
			title: 'URI'
		}
	},
	{
		path: '/uri/all',
		name: 'URIList',
		component: URIList,
		meta: {
			title: 'All URI based Note'
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'Login'
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: {
			title: 'New Account'
		}
	},
	{
		path: '/notes',
		name: 'Notes',
		component: Notes,
		meta: {
			title: 'All'
		}
	}
]

const history: RouterHistory = createWebHistory()

const router: Router = createRouter({ routes, history })

router.beforeEach((to, from, next) => {
	const isLoggedIn = localStorage.getItem(LOGIN_STATUS_KEY)

	if (to.path === '/notes' && !isLoggedIn) {
		return next('/login')
	}

	if (to.path === '/login' && isLoggedIn) {
		return next('/notes')
	}

	next()
})

router.afterEach((to, from, failure) => {
	if (isNavigationFailure(failure)) {
		console.warn('Router', failure)
	}

	nextTick(() => {
		document.title = String(to.meta.title ? `${to.meta.title} • ${appName}` : appName)
	})
})

export default router
