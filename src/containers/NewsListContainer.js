import React, { Component } from 'react';

import { Cryptocompare } from '../data/cryptocompare';
import { NewsList } from '../components/NewsList';

export class NewsListContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			page: 0,
			news: []
		};

		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentDidMount() {
		Cryptocompare.latestNews().then(fetchedNews => {
			if(this.props.limit) {
				fetchedNews = fetchedNews.slice(0, this.props.limit);
			}
			this.setState({
				news: fetchedNews
			});
		});
	}

	handlePageChange(page) {
		if(this.state.page === page)
			return;
		this.setState({
			page: page
		});
	}

	render() {
		return <NewsList includePages={this.props.includePages} pageChange={this.handlePageChange} news={this.state.news.slice(this.state.page*10, (this.state.page+1)*10)} />;
	}

}