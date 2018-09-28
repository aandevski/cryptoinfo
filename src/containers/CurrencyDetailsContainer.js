import React from 'react'
import PropTypes from 'prop-types'

import CurrencyDetails from '../components/CurrencyDetails'

import {Cryptocompare} from '../data/cryptocompare'

export default class CurrencyDetailsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			coinDetails: {},
			historicalData: []
		}
	}

	componentDidMount() {
		Cryptocompare.getCurrencyDetails(this.props.id).then(d => {
			this.setState({
				coinDetails: d
			})
		})
		Cryptocompare.getHistoricalData(this.props.id).then(d=> {
			console.log(d)
			this.setState({historicalData: d})
		})
	}

	render() {
		return <CurrencyDetails id={this.props.id} coinDetails={this.state.coinDetails} historicalData={this.state.historicalData}/>
	}
}

CurrencyDetailsContainer.propTypes = {
	id: PropTypes.string.isRequired
}