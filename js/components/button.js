import Component from './component.js'

export default class ButtonComponent extends Component {
	constructor(props) {
		super("button")
		this.props = props
	}
	render() {
		return `<button class='btn${this.props.class ? ` ${this.props.class}` : ''}' type="${this.props.type || 'button'}">${this.props.text}</button>`
	}
	renderElement() {
		const element = document.createElement('button')
		element.innerText = this.props.text
		element.classList.add('btn')
		element.type = this.props.type || 'submit'
		return element
	}
	onClick(fn) {
      	this.element.addEventListener('click', fn)
    }
}