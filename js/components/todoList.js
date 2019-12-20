import Component from './component.js'
import ToDoItemComponent from './ToDoItem.js'

export default class ToDoListComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<div class='todo-list-items'>
					${this.props.items.length === 0 ? "<p class='todo-empty-list'>Todo list is empty</p>" : ""}
					${this.props.items.map(item => {
						const itemBlock = new ToDoItemComponent({item})
						return itemBlock.render()
					}).join('')}
				</div>`
	}
}