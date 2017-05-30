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
		for (var i=0;i < matchingBoxNum;i++) {
			matchingBox.push(<Box/>)
		}
		return (
			<div className="container">
				{matchingBox}
			</div>//container
		)
	}
}

render(<App/>, window.document.getElementById("app"));