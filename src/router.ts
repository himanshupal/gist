import { nextTick } from '@vue/runtime-core'
import { createRouter, createWebHistory, Router, RouterHistory, RouteRecordRaw, isNavigationFailure } from 'vue-router'

import { appName } from '@/config.json'

import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import URI from '@/pages/URI.vue'
import URIList from '@/pages/URIList.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
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
	}
]

const history: RouterHistory = createWebHistory()

const router: Router = createRouter({ routes, history })

router.afterEach((to, from, failure) => {
	if (isNavigationFailure(failure)) {
		console.warn('Router', failure)
	}

	nextTick(() => {
		document.title = String(to.meta.title ? `${to.meta.title} • ${appName}` : appName)
	})
})

export default router
