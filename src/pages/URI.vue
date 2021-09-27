<template>
	<div class="h-screen p-5 sm:p-10 flex flex-col bg-gray-200 dark:bg-black">
		<div class="flex flex-col items-end">
			<div class="text-xs dark:text-white">{{ gist.title.length }}/{{ LIMITS.title }}</div>
			<input name="title" v-model.trim="gist.title" @keypress="checkLength" placeholder="Use a sensible title" class="w-full p-2.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
		</div>

		<div class="flex flex-col items-end flex-grow my-5">
			<div class="text-xs dark:text-white">{{ gist.text.length }}/{{ LIMITS.text }}</div>
			<textarea name="text" v-model.trim="gist.text" @change="checkLength" placeholder="Your data here..." class="w-full p-2.5 border border-black dark:border-white bg-white dark:bg-gray-300 flex-grow resize-none" />
		</div>

		<div class="flex flex-row-reverse justify-between">
			<Button @click="share">Share</Button>
			<Button @click="hide" v-if="copied">Copied!</Button>
			<Button @click="clear">Clear</Button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Button from '@/components/Button.vue'

const STORAGE_KEY = 'uri-gist-data'
const LIMITS: Record<string, number> = {
	title: 125,
	text: 25_000
}

export default defineComponent({
	name: 'URI',

	components: {
		Button
	},

	setup() {
		const copied = ref<boolean>(false)
		const gist = reactive<Record<string, string>>({ title: '', text: '' })

		const route = useRoute()
		const router = useRouter()

		onMounted(() => {
			if (route.query.title || route.query.text) {
				gist.title = String(route.query.title)
				gist.text = String(route.query.text)
			} else {
				const savedData = localStorage.getItem(STORAGE_KEY)

				if (savedData) {
					const data = JSON.parse(savedData)

					gist.title = data.title
					gist.text = data.text
				}
			}
		})

		watch(
			() => gist,
			(value) => {
				router.push({ query: { title: gist.title, text: gist.text } })

				localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
			},
			{ deep: true }
		)

		const share = async () => {
			if (!!navigator.share) {
				await navigator.share({
					title: gist.title,
					text: gist.text,
					url: window.location.href
				})
			} else {
				await navigator.clipboard.writeText(window.location.href)
				copied.value = true

				setTimeout(() => (copied.value = false), 1500)
			}
		}

		const hide = () => {
			copied.value = false
		}

		const clear = () => {
			gist.title = ''
			gist.text = ''
		}

		const checkLength = (e: any) => {
			if (gist[e.target.name].length >= LIMITS[e.target.name]) {
				e.preventDefault()
			}
		}

		return {
			gist,
			copied,
			LIMITS,

			share,
			hide,
			clear,
			checkLength
		}
	}
})
</script>
