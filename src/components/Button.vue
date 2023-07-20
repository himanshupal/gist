<template>
	<component :is="as" class="px-14 py-3 border border-black dark:border-white bg-white dark:bg-gray-300 hover:bg-gray-100 dark:hover:bg-gray-200 text-center flex flex-col justify-center text-gray-900">
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
