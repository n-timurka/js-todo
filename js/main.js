import router from './router.js'
import store from './store/store.js'

class Main {
	constructor(anchor) {
		this.anchor = anchor
		store.events.subscribe('route-change', () => this.render())
		this.render()
	}
	render() {
		const route = router.getActivePage()
		const page = new route.component(this.anchor)
		page.render()
	}
}

// tkwx42kxc5
new Main(document.querySelector("#app"))
