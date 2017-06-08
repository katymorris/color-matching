import React from "react";
import PropTypes from 'prop-types';


export class Box extends React.Component {
	constructor(props) {
		super();
		this.color = props.color
		this.flipped = false
	}

	runMatchCheck(element1, element2) {
		var box1Color = element1.querySelector(".card-back").style.backgroundColor
		var box2Color = element2.querySelector(".card-back").style.backgroundColor
		if (box1Color == box2Color) {
			element1.classList.add('matched');
			element2.classList.add('matched');
			element1.classList.remove('flipped');
			element2.classList.remove('flipped');
		} else {
			element1.classList.remove('flipped');
			element2.classList.remove('flipped');
			element1.classList.remove('card-flip');
			element2.classList.remove('card-flip');
		}
	}

	onBoxClick() {
		var cardBox = this.div.querySelector('.card-box');
		cardBox.classList.add("card-flip");
		cardBox.classList.add("flipped")
		this.flipped = true
		
		if (document.getElementsByClassName("flipped").length == 2) {
			var element1 = document.getElementsByClassName("flipped")[0];
			var element2 = document.getElementsByClassName("flipped")[1];
			this.runMatchCheck(element1, element2)
		}
		
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