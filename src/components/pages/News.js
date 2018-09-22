import React, { Component } from 'react';

import { PageHeader } from 'react-bootstrap';
import { NewsListContainer } from '../../containers/NewsListContainer';

export class NewsPage extends Component {

	render() {
		return (
			<div>
				<PageHeader>
					Latest news
				</PageHeader>
		    	<NewsListContainer includePages={true}/>
		    </div>
		);
	}

}