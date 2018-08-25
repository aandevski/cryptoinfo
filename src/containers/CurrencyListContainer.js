import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CurrencyList } from '../components/CurrencyList';
import { Cryptocompare } from '../data/cryptocompare';

export class CurrencyListContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currencies: []
		};
	}

	componentDidMount() {
		Cryptocompare.topCurrencies(this.props.page, this.props.currencyType, this.props.limit).then(fetchedCurrencies => {
			this.setState({
				currencies: fetchedCurrencies
			});
		});
	}

	render() {
		return <CurrencyList currencies={this.state.currencies} />;
	}

}

CurrencyListContainer.PropTypes = {
	page: PropTypes.number,
	limit: PropTypes.number,
	currencyType: PropTypes.string
};

CurrencyListContainer.defaultProps = {
	page: 0,
	limit: 10,
	currencyType: 'USD'
}