class Api {
	constructor() {
		this.url = 'https://todo-app-back.herokuapp.com'
	}
	async send(url, method, body) {
		let response = await fetch(this.url + url, {
		  method: method,
		  headers: {
		    'Content-Type': 'application/json',
		    'Authorization': localStorage.getItem('token')
		  },
		  body: JSON.stringify(body)
		})
		if (response.ok) {
		  	return await response.json()
		} else {
		  	const data = await response.json()
		  	throw new Error(data.error)
		}
	}
	async get(url) {
		return this.send(url, 'GET')
	}
	async post(url, data) {
		return this.send(url, 'POST', data)
	}
	async put(url, data) {
		return this.send(url, 'PUT', data)
	}
	async delete(url, data) {
		return this.send(url, 'POST', data)
	}
}

export default new Api()