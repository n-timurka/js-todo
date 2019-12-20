import LoginPage from './pages/login'
import ToDoPage from './pages/todo'
import store from './store/store.js'

class Router {
	constructor() {
		this.routes = [
			{
				name: 'login',
				url: 'login',
				component: LoginPage
			}, 
			{
				name: 'todo',
				url: '',
				component: ToDoPage
			}
		]
		this.activeRoute = localStorage.getItem('token') ? 'todo' : 'login'
	}
	changePage(page) {
		const route = getActivePage()
		this.activeRoute = route.name
		store.events.fire('route-change')
	}
	getActivePage() {
		return this.routes.find(route => route.name === this.activeRoute)
	}
}

export default new Router()
