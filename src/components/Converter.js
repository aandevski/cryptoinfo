import React from 'react'
import PropTypes from 'prop-types'

import {FormGroup,FormControl,Row,Col} from 'react-bootstrap'

export default class Converter extends React.Component {
	render() {
		return (
			<div>
				<FormGroup>
					<Row>
						<Col xs="6" md="3">
							<FormControl
								type="number"
							/>
						</Col>
						<Col xs="6" md="3">
							<FormControl componentClass="select" placeholder="select">
								<option value="btc">BTC</option>
								<option value="usd">USD</option>
							</FormControl>
						</Col>
						<Col xs="6" md="3">
							<FormControl
								type="number"
							/>
						</Col>
						<Col xs="6" md="3">
							<FormControl componentClass="select" placeholder="select">
								<option value="btc">BTC</option>
								<option value="usd">USD</option>
							</FormControl>
						</Col>
					</Row>
				</FormGroup>
			</div>
		)
	}
}