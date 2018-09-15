import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CurrencyList } from '../components/CurrencyList';
import { Cryptocompare } from '../data/cryptocompare';

export class CurrencyListContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 0,
			currencies: []
		};

		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentDidMount() {
		Cryptocompare.topCurrencies(this.props.currencyType, this.props.limit).then(fetchedCurrencies => {
			this.setState({
				currencies: fetchedCurrencies
			});
		});
	}

	handlePageChange(page) {
		if(this.state.page === page)
			return;
		this.setState({
			page: page
		});
	}

	render() {
		return <CurrencyList includePages={this.props.includePages} currencies={this.state.currencies.slice(this.state.page*10, (this.state.page+1)*10)} pageChange={this.handlePageChange} />;
	}

}

CurrencyListContainer.PropTypes = {
	limit: PropTypes.number,
	currencyType: PropTypes.string
};

CurrencyListContainer.defaultProps = {
	limit: 10,
	currencyType: 'USD'
}