import React, { Component } from 'react';

export class Currency extends Component {

	render() {
		return <div><h1>Currency {this.props.match.params.id} goes here</h1></div>;
	}

}


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