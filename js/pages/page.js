import store from '../store/store.js'
import router from '../router.js'
import api from '../api.js'

export default class Page {
	constructor(anchor) {
		this.anchor = anchor
		this.api = api
		this.store = store
		this.router = router
		this.store.events.subscribe('change', () => this.render())
	}
	async onInit() {}
}