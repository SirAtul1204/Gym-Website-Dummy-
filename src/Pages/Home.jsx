import React, { Component } from "react";
import Nav from "../Nav";
import Intro from "../Components/Home/Intro";
import About from "../Components/Home/About";
import Footer from "../Footer";

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Nav pageName="home" />
				<Intro />
				<About />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Home;
