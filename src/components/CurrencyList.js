import React, { Component } from 'react';

import {Table} from 'react-bootstrap';
import { CurrencyRow } from './CurrencyRow';
import { PageList } from './PageList';

export class CurrencyList extends Component {

	render() {
		const currencies = this.props.currencies.map((currency, i) => {
			return <CurrencyRow key={`currency_${i}`} details={currency.CoinInfo} conversionInfo={currency.ConversionInfo} />;
		});
		
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>Logo</th>
							<th>Symbol</th>
							<th>Coin Name</th>
							<th>Volume (24h)</th>
							<th>Market Cap</th>
							<th>Price (USD)</th>
						</tr>
					</thead>
					<tbody>
						{currencies}
					</tbody>
				</Table>
				{this.props.includePages ? <PageList count={10} function={this.props.pageChange} /> : ""}
			</div>
		);
	}

}