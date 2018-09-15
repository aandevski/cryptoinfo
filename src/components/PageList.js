import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

export class PageList extends Component {

	render() {
		const buttons = Array.from(Array(this.props.count).keys()).map(i => <Button key={'page_' + i} onClick={() => this.props.function(i)}>{i+1}</Button>);
		return (
			<ButtonGroup>
				{buttons}
			</ButtonGroup>
		);
	}

}