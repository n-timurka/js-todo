import Component from './component.js'

export default class CheckboxComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return `<label class='input-checkbox'>
					<input type='checkbox'/>
					<span class="checkmark"></span>
				</label>`
	}
}