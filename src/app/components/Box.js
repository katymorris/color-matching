import React from "react";
import PropTypes from 'prop-types';

export class Box extends React.Component {

	onBoxClick() {
		console.log(this.div)
		var cardBox = this.div.querySelector('.card-box')
		cardBox.classList.add("card-flip")
	}

	render() {
		return (
			<div className="card-container" ref={(div) => { this.div = div; }} onClick={this.onBoxClick.bind(this)}>
				<div className="card-box">
					<div className="card-front"></div>
					<div className="card-back"></div>
				</div>
			</div>//box wrapper
		)
	}
}