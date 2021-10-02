<template>
	<div class="flex items-center justify-between px-5 sm:px-10 py-3 bg-gray-300 dark:bg-black dark:text-white leading-none">
		<div class="text-3xl font-semibold">{{ name }}</div>

		<button class="flex items-center justify-center bg-white rounded-full p-2">
			<ProfileIcon />
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileIcon from '@/components/icons/Profile.vue'

export default defineComponent({
	name: 'Navbar',

	components: {
		ProfileIcon
	},

	props: {
		name: {
			type: String,
			default: 'User'
		}
	}
})
</script>
