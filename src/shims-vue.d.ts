declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
	export default component
}

interface ImportMetaEnv {
	readonly VITE_FIREBASE_API_KEY: string
	readonly VITE_FIREBASE_AUTH_DOMAIN: string
	readonly VITE_FIREBASE_PROJECT_ID: string
	readonly VITE_FIREBASE_STORAGE_BUCKET: string
	readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string
	readonly VITE_FIREBASE_APP_ID: string
	readonly VITE_FIREBASE_DATABASE_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
