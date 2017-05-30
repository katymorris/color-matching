import React from "react";
import PropTypes from 'prop-types';


export class Box extends React.Component {
	constructor(props) {
		super();
		this.color = props.color
		this.flipped = false
	}

	onBoxClick() {
		var cardBox = this.div.querySelector('.card-box');
		cardBox.classList.add("card-flip");
		this.flipped = true
		
		
	}
	render() {
		var boxStyle = {
		  backgroundColor: this.props.color
		}
		return (
			<div className="card-container" id={this.props.boxNum} ref={(div) => { this.div = div; }} onClick={this.onBoxClick.bind(this)}>
				<div className="card-box">
					<div className="card-front"></div>
					<div className="card-back" style={boxStyle}></div>
				</div>
			</div>//box wrapper
		)
	}
}