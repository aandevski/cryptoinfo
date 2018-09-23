import React from 'react'
import PropTypes from 'prop-types'

import CurrencyDetails from '../components/CurrencyDetails'

import {Cryptocompare} from '../data/cryptocompare'

export default class CurrencyDetailsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			coinDetails: {}
		}
	}

	componentDidMount() {
		Cryptocompare.getCurrencyDetails(this.props.id).then(d => {
			this.setState({
				coinDetails: d
			})
		}) 
	}

	render() {
		return <CurrencyDetails id={this.props.id} coinDetails={this.state.coinDetails}/>
	}
}

CurrencyDetailsContainer.propTypes = {
	id: PropTypes.string.isRequired
}