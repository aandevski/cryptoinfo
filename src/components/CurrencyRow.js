import React, { Component } from 'react';
import config from '../config'

export class CurrencyRow extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		window.location.href = '/currencies/' + this.props.details.Symbol
	}
	render() {
		return (
			<tr onClick={this.handleClick}>
				<td>
					<img
						src={config.baseUrl + this.props.details.ImageUrl}
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