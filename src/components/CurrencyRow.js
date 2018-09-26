import React, { Component } from 'react';
import config from '../config';

import {Link} from 'react-router-dom'

export class CurrencyRow extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<tr>
				<td>
					<img
						src={config.baseUrl + this.props.details.ImageUrl}
						style={{width: 50}}
					/>
				</td>
				<td><Link to={"currencies/"+this.props.details.Name}>{this.props.details.Name}</Link></td>
				<td>{this.props.details.FullName}</td>
				<td>$ {(parseFloat(this.props.conversionInfo.TotalVolume24H)*this.props.details.price).toLocaleString()}</td>
				<td>$ {(this.props.conversionInfo.Supply*this.props.details.price).toLocaleString()}</td>
				<td>$ {(this.props.details.price).toLocaleString()}</td>
			</tr>
		)
	}
}