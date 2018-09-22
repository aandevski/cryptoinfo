import React, { Component } from 'react';

import { NewsItem } from './NewsItem';
import { PageList } from './PageList';

export class NewsList extends Component {

	render() {
		const news = this.props.news.map((newsitem, i) => {
			console.log(newsitem);
			return <NewsItem key={`news_${i}`} details={newsitem} />;
		});
		
		return (
			<div>
				{news}
				{this.props.includePages ? <PageList count={10} function={this.props.pageChange} /> : ""}
			</div>
		);
	}

}