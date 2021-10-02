<template>
	<form @submit.prevent="share" class="min-h-screen p-5 sm:p-10 flex flex-col bg-gray-200 dark:bg-black">
		<div @click="goBack" class="text-xs cursor-pointer text-white">// Go Back</div>

		<div class="flex flex-col items-end">
			<div class="text-xs dark:text-white">{{ gist.title.length }}/{{ LIMITS.title }}</div>
			<input name="title" v-model.trim="gist.title" @keypress="checkLength" placeholder="Use a sensible title" class="w-full p-2.5 border border-black dark:border-white bg-white dark:bg-gray-300" />
		</div>

		<div class="flex flex-col items-end flex-grow my-5">
			<div class="text-xs dark:text-white">{{ gist.text.length }}/{{ LIMITS.text }}</div>
			<textarea name="text" v-model.trim="gist.text" @keypress="checkLength" placeholder="Your data here..." class="w-full p-2.5 border border-black dark:border-white bg-white dark:bg-gray-300 flex-grow resize-none" />
		</div>

		<div class="flex flex-row-reverse justify-between">
			<div class="flex gap-2">
				<Button type="button" @click="save">
					Save
					<div style="font-size: 0.55rem">(Ctrl+S)</div>
				</Button>
				<Button type="submit">Share</Button>
			</div>
			<Button type="button" @click="hide" v-if="!!notification">{{ notification }}</Button>
			<Button type="button" @click="clear">Clear</Button>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { LocationQueryRaw, useRoute, useRouter } from 'vue-router'
import { nanoid } from 'nanoid'
import { URIGist, URIGistList } from '@/models/URI'
import { URI_STORAGE_KEY, notifyDuration } from '@/config.json'
import Button from '@/components/Button.vue'

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
		const notification = ref<string>('')
		const gist = reactive<URIGist>({ id: nanoid(), title: '', text: '' })

		const route = useRoute()
		const router = useRouter()

		const checkForSave = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.code === `KeyS`) {
				e.preventDefault()
				save()
			}
		}

		onBeforeMount(() => {
			document.addEventListener('keydown', checkForSave)
		})

		onMounted(() => {
			if (route.query.id) {
				gist.id = decodeURI(String(route.query.id))
			}
			if (route.query.title) {
				gist.title = decodeURI(String(route.query.title))
			}
			if (route.query.text) {
				gist.text = decodeURI(String(route.query.text))
			}
		})

		onBeforeUnmount(() => {
			document.removeEventListener('keydown', checkForSave)
		})

		watch(
			() => gist,
			(value) => {
				let query: LocationQueryRaw = { id: encodeURIComponent(value.id) }

				if (value.title) query = { ...query, title: encodeURIComponent(value.title) }
				if (value.text) query = { ...query, text: encodeURIComponent(value.text) }

				router.replace({ query })
			},
			{ deep: true }
		)

		const notify = (message: string) => {
			notification.value = message
			setTimeout(() => (notification.value = ''), notifyDuration)
		}

		const share = async () => {
			if (!!navigator.share) {
				await navigator.share({
					title: gist.title,
					text: gist.text,
					url: window.location.href
				})
			} else {
				await navigator.clipboard.writeText(window.location.href)
				notify('Copied!')
			}
		}

		const save = () => {
			const storedURIs = localStorage.getItem(URI_STORAGE_KEY)

			let dataToSave: Record<string, string> = { id: gist.id }
			if (!gist.title && !gist.text) {
				return notify('Empty Data!')
			}

			if (gist.title) dataToSave = { ...dataToSave, title: gist.title }
			if (gist.title) dataToSave = { ...dataToSave, text: gist.text }

			if (!!storedURIs) {
				let newList: URIGistList = JSON.parse(storedURIs)

				if (newList.find((li) => li.id === gist.id)) {
					newList = newList.filter((li) => li.id !== gist.id)
				}
				newList = [...newList, gist]

				localStorage.setItem(URI_STORAGE_KEY, JSON.stringify(newList))
			} else {
				localStorage.setItem(URI_STORAGE_KEY, JSON.stringify([gist]))
			}

			notify('Saved!')
		}

		const hide = () => {
			notification.value = ''
		}

		const clear = () => {
			gist.title = ''
			gist.text = ''
		}

		const checkLength = (e: KeyboardEvent) => {
			const target = e.target as HTMLInputElement

			if (gist[target.name as keyof URIGist].length >= LIMITS[target.name]) {
				e.preventDefault()
			}
		}

		const goBack = () => {
			router.back()
		}

		return {
			gist,
			notification,
			LIMITS,

			save,
			share,
			hide,
			clear,
			checkLength,
			goBack
		}
	}
})
</script>
