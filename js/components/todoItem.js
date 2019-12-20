import Component from './component.js'
import InputComponent from './input.js'
import ButtonComponent from './button.js'
import CheckboxComponent from './checkbox.js'

export default class ToDoItemComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const doneCheckbox = new CheckboxComponent()
		const input = new InputComponent({ id: "add-todo-input", placeholder: "Input text here..."})
		const deleteBtn = new ButtonComponent({ text: "&#10006;", class: "delete"})

		return `<div class='todo-list-item${this.props.item.done ? ' done' : ''}'>
					${doneCheckbox.render()}
					<div class='todo-list-item-text'>${this.props.item.text}</div>
					<div class='todo-list-item-delete'>${deleteBtn.render()}</div>
				</div>`
	}
}