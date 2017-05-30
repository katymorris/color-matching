import css from "./css/styles.css";
import $ from 'jquery';
import exec from 'script-loader!./scripts.js';
// import jsdom from "jsdom";
import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

import { Box } from "./components/Box";

class App extends React.Component {
	render() {
		var matchingBoxNum = 12;
		var matchingBox = [];
		var colorMatchNum = 2;
		var colors = ["red", "red", "blue", "blue", "green", "green", "orange", "orange"]
		var shuffledColors = shuffle(colors);
		//shuffle colors
		function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}
		//create boxes and send props
		for (var i=0;i < shuffledColors.length;i++) {
			console.log(shuffledColors[i])
			matchingBox.push(<Box key={i} color={shuffledColors[i]}/>)
		}
		return (
			<div className="container">
				{matchingBox}
			</div>//container
		)
	}
}

render(<App/>, window.document.getElementById("app"));