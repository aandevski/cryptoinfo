import React from 'react'
import PropTypes from 'prop-types'

import Converter from '../components/Converter'

import {Cryptocompare} from '../data/cryptocompare'

export default class ConverterContainer extends React.Component {

	async componentDidMount() {
		let d = await Cryptocompare.getRate('BTC','USD')
		console.log(d)
	}

	render() {
		return (
			<Converter />
		)
	}
}