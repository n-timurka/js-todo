import Component from './component.js'

export default class InputComponent extends Component {
	constructor(props) {
		super(props)
	}
	renderElement() {
		const element = document.createElement('div')
		element.classList.add('input')
		if(this.props.label) {
			const label = document.createElement('label')
			label.for = this.props.id
			label.innerText = this.props.label
			element.append(label)
		}
		const input = document.createElement('input')
		input.classList.add('input-class')
		input.id = this.props.id
		input.type = this.props.type
		input.placeholder = this.props.placeholder
		input.addEventListener('change', (e) => console.log(e))
		element.append(input)

		return element
	}
	render() {
		return `<div class='input'>
					${this.props.label ? `<label for="${this.props.id}">${this.props.label}</label>` : ''}
					<input class="input-class" id="${this.props.id}" type="${this.props.type}" placeholder="${this.props.placeholder || ''}"/>
				</div>`
	}
}