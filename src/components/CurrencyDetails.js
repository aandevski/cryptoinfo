import React from 'react'
import PropTypes from 'prop-types'
import config from '../config';
import { parseUnixDate } from '../data/helpers';
import {Table} from 'react-bootstrap';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

export default class CurrencyDetails extends React.Component {
	render() {
		return (
			<div>
				<div style={{ textAlign: 'center', margin: '70px 0' }}>
					<img 
						src={config.baseUrl + this.props.coinDetails.ImageUrl}
						style={{
							width: '100px',
							display: 'inline-block',
							marginRight: '20px'
						}}
						alt={this.props.coinDetails.FullName}
					/>
					<h1
						style={{display: 'inline-block', marginTop: '50px'}}
					>
						{this.props.coinDetails.FullName}
					</h1>
				</div>

				<Table striped>
					<thead>
					<tr>
						<th>Symbol</th>
						<th>Algorithm</th>
						<th>Proof of Type</th>
						<th>Net Hashes Per Second</th>
						<th>Block Number</th>
						<th>Block Time</th>
						<th>Block Reward</th>
						<th>Price</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>{this.props.coinDetails.Name}</td>
						<td>{this.props.coinDetails.Algorithm}</td>
						<td>{this.props.coinDetails.ProofType}</td>
						<td>{parseInt(this.props.coinDetails.NetHashesPerSecond, 10)}</td>
						<td>{this.props.coinDetails.BlockNumber}</td>
						<td>{this.props.coinDetails.BlockTime}</td>
						<td>{this.props.coinDetails.BlockReward}</td>
						<td>{this.props.coinDetails.price}</td>
					</tr>
					</tbody>
				</Table>

				<div style={{textAlign: 'center' }}>
					<LineChart
						width={1000} height={300} data={this.props.historicalData}
						margin={{top: 20, right: 0, left: 0, bottom: 20}}
					>
						<XAxis dataKey="time" tickFormatter={parseUnixDate}/>
						<YAxis/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Line type="monotone" dataKey="close" stroke="#82ca9d" />
					</LineChart>
				</div>
			</div>
		);
	}
}

CurrencyDetails.propTypes = {
	id: PropTypes.string.isRequired,
	details: PropTypes.isRequired
}