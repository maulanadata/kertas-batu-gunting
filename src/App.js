import React, { Component } from "react";
import Controller from "./components/controller";

import "./App.css";

class App extends Component {
	render() {
		return (
		<div className="App" style={{ backgroundColor:"grey"}}>
			<div level={3} style={{ textAlign:"center", marginTop:"20px", fontSize:"30px", fontWeight:"bold" }}>
				Stone Paper Scissor
			</div>
			<Controller />
		</div>
		);
	}
}

export default App;
