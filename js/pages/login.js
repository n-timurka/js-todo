import InputComponent from '../components/input'
import ButtonComponent from '../components/button'
import Page from './page.js'

export default class LoginPage extends Page {
	constructor(anchor) {
		super(anchor)
		this.data = {
			email: '',
			password: '',
			error: ''
		}
	}
	render() {
		const input = new InputComponent({ id: 'email-input', label: 'Email', type: 'email' })
		const password = new InputComponent({ id: 'password-input', type: 'password', label: 'Password' })
		const button = new ButtonComponent({ text: "Login", type: "submit" })

		this.anchor.innerHTML = `
								<div class='login-page'>
									<form class="card" id="login-form">
										<h3>Login</h3>
										${input.render()}
										${password.render()}
										<div class='panel'>
											${button.render()}
											<div class='error'>${this.data.error}</div>
										</div>
									</form>
								</div>`

		document.getElementById('email-input').addEventListener('change', (e) => {
			this.data.email = e.target.value
		})
		document.getElementById('password-input').addEventListener('change', (e) => {
			this.data.password = e.target.value
		})
		document.getElementById('login-form').addEventListener('submit', async (e) => {
			e.preventDefault()
			try {
				await this.store.dispatch('login', { email: this.data.email, password: this.data.password })
				this.router.changePage('todo')
			} catch (e) {
				this.data.error = e.message
				this.render()
			}
		})
	}
}