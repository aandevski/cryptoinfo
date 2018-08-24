import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Currencies extends Component {

	render() {
		return (
			<div>
				<ol>
					<li><Link to="/currencies/BTC">Bitcoin (BTC)</Link></li>
					<li><Link to="/currencies/ETH">Ethereum (ETH)</Link></li>
					<li><Link to="/currencies/XRP">Ripple (XRP)</Link></li>
				</ol>
			</div>
		);
	}

}