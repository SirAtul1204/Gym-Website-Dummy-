import React, { Component } from "react";

class Intro extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="buyMembership-intro">
					<h1>Get Your Membership Now</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia asperiores
						sunt ipsam vitae eligendi iusto corrupti maiores vero nostrum obcaecati
						officia, dolorum sed nam quae ipsum nobis? Dolorum, numquam ratione!
					</p>
					<p className="instruction">Fill the form below to get your membership</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Intro;
