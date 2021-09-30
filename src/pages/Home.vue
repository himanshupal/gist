<template>
	<div class="h-screen grid gap-4 place-content-center text-center bg-gray-200 dark:bg-black">
		<Button as="router-link" v-for="(option, k) in options" :key="k" :to="option.to">
			{{ option.text }}
			<div class="text-xs">({{ option.sub }})</div>
		</Button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { URI_STORAGE_KEY } from '@/config.json'
import Button from '@/components/Button.vue'

export default defineComponent({
	name: 'Home',

	components: {
		Button
	},

	setup() {
		const listInLS = localStorage.getItem(URI_STORAGE_KEY)

		const options = ref<Array<Record<string, string>>>([
			{
				text: 'Temporary',
				sub: 'URI based',
				to: listInLS ? '/uri/all' : '/uri'
			},
			{
				text: 'Persisting',
				sub: 'Requires login',
				to: '/login'
			}
		])

		return {
			options
		}
	}
})
</script>
