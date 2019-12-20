import Component from './component.js'

export default class ToDoFilterComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		if(this.props.items.length === 0) return ''
		const items = [
			{ name: 'all', title: 'All', count: this.props.items.length},
			{ name: 'active', title: 'Active', count: this.props.items.filter(item => !item.done).length},
			{ name: 'finished', title: 'Finished', count: this.props.items.filter(item => item.done).length}
		]
		return `<div class="todo-list-filters">
					<ul>
						${items.map(item => {
							return `<li ${item.name === this.props.filter ? 'class="active"' : ''} data-name="${item.name}">
										${item.title} (${item.count})
									</li>`
						}).join('')}
					</ul>
				</div>`
	}
}