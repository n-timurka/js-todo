import AddToDoFormComponent from '../components/addToDoForm.js'
import ToDoFilterComponent from '../components/todoFilter.js'
import ToDoListComponent from '../components/todoList.js'
import Page from './page.js'

export default class ToDoPage extends Page {
	constructor(anchor) {
		super(anchor)
		this.onInit()
		this.data = {
			todo: this.store.state.todo,
			filter: 'all',
			text: 'new todo'
		}
	}
	async onInit() {
		await this.store.dispatch('getTodo')
	}
	filter() {
		if(this.data.filter === 'active') {
			this.data.todo = this.store.state.todo.filter(todo => todo.completed === false)
		} else if(this.data.filter === 'finished') {
			this.data.todo = this.store.state.todo.filter(todo => todo.completed === true)
		} else {
			this.data.todo = this.store.state.todo
		}
	}
	render() {
		this.filter()
		const AddToDoForm = new AddToDoFormComponent()
		const ToDoFilter = new ToDoFilterComponent({ 
			items: this.store.state.todo,
			filter: this.data.filter
		})
		const ToDoList = new ToDoListComponent({ items: this.data.todo})

		this.anchor.innerHTML = `
								<div class='todo-page'>
									<h1>To-do list</h1>
									<p class="logout"><a href='#' id='logout-link'>Logout</a></p>
									<div class="card">
										${AddToDoForm.render()}
									</div>
									<div class="card">
										${ToDoFilter.render()}
										${ToDoList.render()}
									</div>
								</div>`
		this.anchor.querySelector('#logout-link').addEventListener('click', (e) => {
			e.preventDefault()
			this.store.dispatch('logout')
			this.router.changePage('login')
		})
		this.anchor.querySelector('#add-todo-input').addEventListener('change', (e) => {
			this.data.text = e.target.value
		})						
		this.anchor.querySelector('.add-todo-form').addEventListener('submit', (e) => {
			e.preventDefault()
			this.store.dispatch('addTodo', {text: this.data.text})
		})
		this.anchor.querySelectorAll('.todo-list-filters li').forEach(item => item.addEventListener('click', (e) => {
			this.data.filter = e.target.dataset.name
			this.render()
		}))
		this.anchor.querySelectorAll('.todo-list-item .delete').forEach(item => item.addEventListener('click', (e) => {
			e.preventDefault()
			console.log(e.target)
			//this.store.dispatch('deleteTodo', {text: this.data.text})
		}))
		this.anchor.querySelectorAll('.todo-list-item .input-checkbox input').forEach(item => item.addEventListener('change', (e) => {
			e.preventDefault()
			console.log(e.target.parentElement)
			// this.store.dispatch('editTodo', { edit: this.data.text })
		}))
		this.anchor.querySelectorAll('.todo-list-item-text').forEach(item => item.addEventListener('click', (e) => {
			e.preventDefault()
			console.log(e.target)
			//this.store.dispatch('editTodo', {text: this.data.text})
		}))
	}
}