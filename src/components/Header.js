import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {

	render() {
		return (
			<div style={{background: '#DDD'}}>
				<Link to="/">HOMEPAGE</Link>
				<ul>
					<li><Link to="/currencies">Currencies</Link></li>
					<li><Link to="/rigs">Mining rigs</Link></li>
					<li><Link to="/converter">Converter</Link></li>
				</ul>
			</div>
		);
	}

}