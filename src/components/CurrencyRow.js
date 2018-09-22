import React, { Component } from 'react';
import config from '../config';

export class CurrencyRow extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		window.location.href = '/currencies/' + this.props.details.Name
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
				<td>{this.props.details.Name}</td>
				<td>{this.props.details.FullName}</td>
				<td>$ {(parseFloat(this.props.conversionInfo.TotalVolume24H)*this.props.details.price).toLocaleString()}</td>
				<td>$ {(this.props.conversionInfo.Supply*this.props.details.price).toLocaleString()}</td>
				<td>$ {(this.props.details.price).toLocaleString()}</td>
			</tr>
		)
	}
}