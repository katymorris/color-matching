import React from "react";
import PropTypes from 'prop-types';

export class Box extends React.Component {
	render() {
		return (
			<div className="card-container">
				<div className="card-box">
					<div className="card-front"></div>
					<div className="card-back"></div>
				</div>
			</div>//box wrapper
		)
	}
}