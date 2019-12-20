import actions from './actions.js'
import Events from './events.js'
import state from './state.js'

export default {
	state,
	actions,
	events: new Events(),
	async dispatch(action, payload) {
		if(this.actions[action]) {
			this.state = await this.actions[action](this.state, payload)
			this.events.fire('change', this.state)
		}
	},
}