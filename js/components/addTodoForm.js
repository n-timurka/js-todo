import Component from './component.js'
import InputComponent from './input.js'
import ButtonComponent from './button.js'

export default class AddToDoFormComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const input = new InputComponent({ id: "add-todo-input", placeholder: "Input text here..."})
		const button = new ButtonComponent({text: "Add", type: 'submit'})
		return `<form class='add-todo-form'>
					${input.render()}
					${button.render()}
				</form>`
	}
}