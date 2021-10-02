<template>
	<div class="min-h-screen bg-gray-200 dark:bg-black dark:text-white">
		<Navbar />
		<hr />
		<div class="flex gap-3 px-5 sm:px-10 pt-2 pb-5 sm:pb-10">
			<SideNav class="w-1/3" />
			<div class="flex flex-col flex-grow">
				<input type="color" v-model="color" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import SideNav from '@/components/SideNav.vue'

export default defineComponent({
	name: 'Dashboard',

	components: {
		Navbar,
		SideNav
	},

	setup() {
		const color = ref<any | null>(null)

		return {
			color
		}
	},

	watch: {
		color(color) {
			console.log({ color })
		}
	}
})
</script>
