export default class Events {
	constructor() {
		this.subscribers = {}
	}
	subscribe(event, callback) {
		if(!this.subscribers[event]) {
			this.subscribers[event] = []
		}
		this.subscribers[event].push(callback)
	}
	unsubscribe(event, callback) {
		if (this.subscribers[event]) {
			this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback)
		}
	}
	fire(event, payload) {
		if (!this.subscribers[event]) {
			return
		}
		this.subscribers[event].forEach(subscriber => subscriber(payload))
	}
}