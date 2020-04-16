import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import home from "../routes/Home";
import detail from "../routes/Detail";

function App() {
	return (
		<Router>
			<Route exact path='/' component={home}></Route>
			<Route path='/:id' component={detail}></Route>
		</Router>
	);
}

export default App;
