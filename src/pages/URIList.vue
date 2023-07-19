<template>
	<div class="min-h-screen p-5 sm:p-10 flex flex-col gap-5 bg-gray-200 dark:bg-black">
		<div @click="goBack" class="text-xs cursor-pointer text-white">// Go Back</div>

		<div v-for="gist in gists" :key="gist.id" class="flex flex-col gap-2 p-3 border border-black dark:border-white bg-white dark:bg-gray-300">
			<div class="font-semibold">{{ gist.title }}</div>
			<div class="text-sm">{{ gist.text.length > 350 ? (expanded.includes(gist.id) ? gist.text : `${gist.text.substring(0, 350)}...`) : gist.text }}</div>
			<div v-if="listInLS" class="flex flex-row-reverse justify-between gap-1">
				<div class="flex justify-end gap-1">
					<SecondaryButton @click="share(gist.id)" size="sm">{{ shareText }}</SecondaryButton>
					<SecondaryButton @click="edit(gist.id)" size="sm">Edit</SecondaryButton>
					<SecondaryButton @click="remove(gist.id)" size="sm">Delete</SecondaryButton>
				</div>

				<SecondaryButton v-if="gist.text.length > 350 && !expanded.includes(gist.id)" @click="expand(gist.id)" size="sm">Expand</SecondaryButton>
			</div>
		</div>

		<div class="flex flex-row-reverse justify-between">
			<Button as="router-link" to="/uri">Create New</Button>
			<Button v-if="listInLS" @click="purge">Delete All!</Button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { compress } from 'lz-string'
import { URIGist, URIGistList } from '@/models'
import { URI_STORAGE_KEY, notifyDuration } from '@/config'
import Button from '@/components/Button.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'

const initialList: URIGistList = [
	{
		id: '',
		title: 'Empty List',
		text: 'You do not have any saved Gist!'
	}
]

export default defineComponent({
	name: 'URIList',

	components: {
		Button,
		SecondaryButton
	},

	setup() {
		const expanded = ref<Array<string>>([])
		const gists = ref<URIGistList>(initialList)
		const listInLS = ref<boolean>(false)
		const shareText = ref<string>('Share')

		const router = useRouter()

		onMounted(() => {
			const storedURIs = localStorage.getItem(URI_STORAGE_KEY)

			if (storedURIs) {
				const gistList: URIGistList = JSON.parse(storedURIs)

				gists.value = gistList
				listInLS.value = true
			}
		})

		const share = async (key: string) => {
			const gist: URIGist = gists.value.find((gist) => gist.id === key) as URIGist

			if (!!navigator.share) {
				await navigator.share({
					title: gist.title,
					text: gist.text,
					url: `${window.location.origin}/uri?id=${encodeURIComponent(gist.id)}&title=${encodeURIComponent(gist.title)}&text=${compress(gist.text)}`
				})
			} else {
				await navigator.clipboard.writeText(`${window.location.origin}/uri?id=${encodeURIComponent(gist.id)}&title=${encodeURIComponent(gist.title)}&text=${compress(gist.text)}`)
				shareText.value = 'Copied!'

				setTimeout(() => (shareText.value = 'Share'), notifyDuration)
			}
		}

		const edit = async (key: string) => {
			const gist: URIGist = gists.value.find((gist) => gist.id === key) as URIGist

			await router.push(`/uri?id=${encodeURIComponent(gist.id)}&title=${encodeURIComponent(gist.title)}&text=${compress(gist.text)}`)
		}

		const remove = (key: string) => {
			if (gists.value.length === 1) return purge()

			gists.value = gists.value.filter((gist) => gist.id !== key)
			localStorage.setItem(URI_STORAGE_KEY, JSON.stringify(gists.value))
		}

		const expand = (key: string) => {
			expanded.value.push(key)
		}

		const purge = () => {
			localStorage.removeItem(URI_STORAGE_KEY)
			gists.value = initialList
			listInLS.value = false
		}

		const goBack = () => {
			router.back()
		}

		return {
			expanded,
			gists,
			listInLS,
			shareText,

			goBack,
			share,
			edit,
			remove,
			expand,
			purge
		}
	}
})
</script>
