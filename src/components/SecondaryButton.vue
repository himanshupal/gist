<template>
	<button :class="[{ 'px-2 py-1 text-xs': size === 'sm' }, { 'px-14 py-3': size === 'md' }]" class="dark:bg-black border dark:border-white dark:text-white hover:bg-gray-100 dark:hover:bg-black">
		<slot />
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type ButtonSize = 'sm' | 'md' | 'lg'

export default defineComponent({
	name: 'SecondaryButtonComponent',

	props: {
		size: {
			type: String as () => ButtonSize,
			default: 'md'
		}
	}
})
</script>
