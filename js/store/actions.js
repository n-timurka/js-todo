import api from '../api.js'

export default {
	getTodo: async (state) => {
		const todo = await api.get('/todos')
		return {
			...state,
			todo
		}
	},
	addTodo: async (state, payload) => {
		const result = await api.post('/todos', payload)
		return  {
			...state,
			todo: [
				result,
				...state.todo
			]
		}
	},
	editTodo: async (state, payload) => {
		const result = await api.put('/todos/' + payload.id, payload.data)
		return  {
			...state,
			todo: [
				result,
				...state.todo
			]
		}
	},
	deleteTodo: async (state, payload) => {
		await api.delete('/todos/' + payload.id)
		return state.todo.filter(todo => todo._id !== payload.id)
	},
	login: async (state, payload) => {
		try {
			const response = await api.post('/login', payload)
			state = {
				...state,
				token: response.token
			}
			localStorage.setItem('token', state.token)
			return state
		} catch(e) {
			throw e
		}
	},
	logout: (state) => {
		localStorage.removeItem('token')
		return {
			...state,
			token: null
		}
	}
}