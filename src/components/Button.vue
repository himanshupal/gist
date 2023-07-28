<template>
	<component :is="as" class="px-14 py-3 border border-black dark:border-white bg-white dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-200 text-center flex flex-col justify-center text-gray-900 disabled:bg-gray-300 disabled:dark:bg-gray-400 disabled:dark:hover:bg-gray-400">
		<slot />
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ButtonComponent',

	props: {
		as: {
			type: String,
			default: 'button'
		}
	}
})
</script>
