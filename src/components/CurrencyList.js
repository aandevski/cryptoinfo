import React, { Component } from 'react';

import {Table} from 'react-bootstrap';
import { CurrencyRow } from './CurrencyRow';

export class CurrencyList extends Component {

	render() {
		const currencies = this.props.currencies.map((currency, i) => {
			return <CurrencyRow key={`currency_${i}`} details={currency.CoinInfo} />;
		});
		
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>Logo</th>
							<th>Symbol</th>
							<th>Coin Name</th>
							<th>Algorithm</th>
							<th>Proof Type</th>
							<th>Price (USD)</th>
						</tr>
					</thead>
					<tbody>
						{currencies}
					</tbody>
				</Table>
			</div>
		);
	}

}