import App from './app.svelte'
import './assets/tailwind.css'
import './assets/global.css'

const app = new App({
	target: document.body,
	props: { hello: 'world' }
})

export default app
