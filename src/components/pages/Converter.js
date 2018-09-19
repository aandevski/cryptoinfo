import React, { Component } from 'react';

import {FormControl, FormGroup, Row, Col} from 'react-bootstrap'

export class ConverterPage extends Component {

	render() {
		return (
			<div>
				<h1>Converter</h1>

				<form>
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
				</form>
			</div>
		);
	}

}