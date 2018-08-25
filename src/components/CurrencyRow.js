import React, { Component } from 'react';

export class CurrencyRow extends Component {
	render() {
		return (
			<tr>
				<td>
					<img
						src={'https://www.cryptocompare.com' + this.props.details.ImageUrl}
						style={{width: 50}}
					/>
				</td>
				<td>{this.props.details.Symbol}</td>
				<td>{this.props.details.CoinName}</td>
				<td>{this.props.details.Algorithm}</td>
				<td>{this.props.details.ProofType}</td>
				<td>{this.props.details.TotalCoinSupply == 0 ? 'N/A' : this.props.details.TotalCoinSupply}</td>
			</tr>
		)
	}
}