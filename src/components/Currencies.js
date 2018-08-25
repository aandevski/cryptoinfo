import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import { CurrencyListContainer } from '../containers/CurrencyListContainer';

export class Currencies extends Component {
  render() {
    return (
    	<div>
	    	<PageHeader>
				Most popular currencies
			</PageHeader>
	    	<CurrencyListContainer />
    	</div>
    );
  }

}