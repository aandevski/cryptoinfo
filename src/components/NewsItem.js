import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';

export class NewsItem extends Component {

	render() {
		return (
			<Panel>
				<Panel.Heading>
					{this.props.details.source_info.name}
				</Panel.Heading>
				<Panel.Body>
					<img style={{width: 150, height: 150, float: 'left', margin: '5px 20px 5px 5px'}} src={this.props.details.imageurl} alt={this.props.details.title} />
						<h4 style={{fontWeight: 'bold'}}>
							<a style={{textDecoration: 'none', color: 'black'}} href={this.props.details.url} target="_blank">{this.props.details.title}</a>
						</h4>
						{this.props.details.body}
						<div>
							<a href={this.props.details.url} target="_blank">Read more..</a>
						</div>
				</Panel.Body>
			</Panel>
		);
	}

}