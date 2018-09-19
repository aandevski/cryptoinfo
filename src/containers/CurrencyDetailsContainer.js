import React from 'react'
import PropTypes from 'prop-types'

import CurrencyDetails from '../components/CurrencyDetails'

export default class CurrencyDetailsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			details: {}
		}
	}

	componentDidMount() {
	}

	render() {
		return <CurrencyDetails id={this.props.id} details={this.state.details}/>
	}
}

CurrencyDetailsContainer.propTypes = {
	id: PropTypes.string.isRequired
}