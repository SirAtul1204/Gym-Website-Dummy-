import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	componentDidMount = () => {
		let pageName = this.props.pageName;
		let elt = document.getElementById(pageName);
		elt.classList.add("active");
	};
	render() {
		return (
			<React.Fragment>
				<div className="major-nav">
					<div>
						<Link to="/" className="nav-link" id="home">
							Home
						</Link>
						<Link to="/trainers" className="nav-link" id="trainers">
							Trainers
						</Link>
						<Link to="/contact" className="nav-link" id="contact">
							Contact
						</Link>
					</div>
					<div>
						<Link to="/buyMembership" className="nav-link" id="buyMembership">
							Buy Membership
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Nav;
