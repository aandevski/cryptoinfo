import React, { Component } from 'react';

import { PageHeader } from 'react-bootstrap';
import { CurrencyListContainer } from '../containers/CurrencyListContainer';

export class Homepage extends Component {

	render() {
		return (
			<div>
				<PageHeader>
					Most popular currencies
				</PageHeader>
		    	<CurrencyListContainer limit={3}/>
		    </div>
		);
	}

}