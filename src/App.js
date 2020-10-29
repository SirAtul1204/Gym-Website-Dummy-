import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import BuyMembership from "./Pages/BuyMembership";

class App extends Component {
	render() {
		return (
			<Router>
				<HashRouter>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/trainers">
							<Trainers />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/buyMembership">
							<BuyMembership />
						</Route>
					</Switch>
				</HashRouter>
			</Router>
		);
	}
}

export default App;
