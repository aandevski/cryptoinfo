import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import { CurrencyListContainer } from '../containers/CurrencyListContainer';

export class Currencies extends Component {
  render() {
    return (
    	<div>
	    	<PageHeader>
				Most popular currencies
			</PageHeader>
	    	<CurrencyListContainer includePages={true} limit={100} />
    	</div>
    );
  }

}