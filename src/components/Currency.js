import React, { Component } from 'react';

export class Currency extends Component {

	render() {
		return <div><h1>Currency {this.props.match.params.id} goes here</h1></div>;
	}

}