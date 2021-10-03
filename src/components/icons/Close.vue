<template>
	<svg :width="width" :height="height" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.2974 6.0312L6.29736 18.0312" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.29736 6.0312L18.2974 18.0312" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CloseIcon',

	props: {
		color: {
			type: String,
			default: '#000'
		},

		width: {
			type: Number,
			default: 25
		},
		height: {
			type: Number,
			default: 25
		}
	}
})
</script>
