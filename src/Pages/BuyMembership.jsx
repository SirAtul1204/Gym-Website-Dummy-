import React, { Component } from "react";
import Nav from "../Nav";
import Intro from "../Components/BuyMembership/Intro";
import Form from "../Components/BuyMembership/Form";

class BuyMembership extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Nav pageName="buyMembership" />
				<Intro />
				<Form />
			</React.Fragment>
		);
	}
}

export default BuyMembership;
