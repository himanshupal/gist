/**
 * @type {import('vite').UserConfig}
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

export default defineConfig({
	server: {
		port: 12345
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	plugins: [vue()]
})
