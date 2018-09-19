import React from 'react'

import PropTypes from 'prop-types'

export default class CurrencyDetails extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.id}</h1>
				<p>{JSON.stringify(this.props.details)}</p>
			</div>
		);
	}
}

CurrencyDetails.propTypes = {
	id: PropTypes.string.isRequired,
	details: PropTypes.isRequired
}