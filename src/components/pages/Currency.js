import React, { Component } from 'react';

import CurrencyDetailsContainer from '../../containers/CurrencyDetailsContainer'

export class CurrencyPage extends Component {

	render() {
		return (
			<div>
				<CurrencyDetailsContainer id={this.props.match.params.id} />
			</div>
		);
	}

}