import React from 'react'

import Converter from '../components/Converter'

import {Cryptocompare} from '../data/cryptocompare'

export default class ConverterContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			rate: 0,
			fromCurrency: 'BTC',
			fromCurrencyValue: 1,
			toCurrency: 'USD',
			currencies: []
		}

		this.handleCurrencyChange = this.handleCurrencyChange.bind(this)
		this.handleValueChange = this.handleValueChange.bind(this)
		this.handleReplacement = this.handleReplacement.bind(this)
		this.handleRefresh = this.handleRefresh.bind(this)
	}

	componentDidMount() {
		this.loadNewRate()
		Cryptocompare.getAllCurrencyNames().then(d=> {
			d.splice(1,0,'USD')
			this.setState({
				currencies: d
			})
		})
	}

	componentWillUpdate(newProps, newState) {
		if(newState.fromCurrency !== this.state.fromCurrency || newState.toCurrency !== this.state.toCurrency) {
			this.loadNewRate()
			return false
		}
	}

	loadNewRate() {
		this.setState({
			loading: true
		}, () => {
			Cryptocompare.getRate(this.state.fromCurrency, this.state.toCurrency).then((d) => {
				this.setState({
					rate: d,
					loading: false
				})
			})
		})
	}

	handleCurrencyChange(event) {
		let newState = {}
		newState[event.target.name] = event.target.value
		this.setState(newState)
	}

	handleValueChange(event) {
		if(event.target.value >= 0) {
			this.setState({
				fromCurrencyValue: event.target.value
			})
		}
	}

	handleReplacement(event) {
		const from = this.state.fromCurrency
		const to = this.state.toCurrency
		this.setState({
			fromCurrency: to,
			toCurrency: from
		})
	}

	handleRefresh(event) {
		this.loadNewRate()
	}

	render() {
		return (
			<Converter
				currencies = {this.state.currencies}

				fromCurrency = {this.state.fromCurrency}
				fromCurrencyValue = {this.state.fromCurrencyValue}
				toCurrency = {this.state.toCurrency}
				toCurrencyValue = {this.state.fromCurrencyValue * this.state.rate}

				loading={this.state.loading}

				handleValueChange = {this.handleValueChange}
				handleCurrencyChange = {this.handleCurrencyChange}
				handleReplacement = {this.handleReplacement}
				handleRefresh = {this.handleRefresh}
			/>
		)
	}
}