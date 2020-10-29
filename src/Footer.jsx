import React, { Component } from "react";
import Instagram from "./Images/instagram.svg";
import LinkedIn from "./Images/linkedin.svg";
import GitHub from "./Images/github.png";

class Footer extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="footer">
					<p>FOLLOW THE CREATOR AT (SirAtul1204) :</p>
					<div className="social-links">
						<a href="https://www.instagram.com/sir_atul_12/" target="_blank">
							<img src={Instagram} alt="Instagram" />
						</a>
						<a href="https://www.linkedin.com/in/atul-singh-2628431ab/" target="_blank">
							<img src={LinkedIn} alt="LinkedIn" />
						</a>
						<a href="https://github.com/SirAtul1204" target="_blank">
							<img src={GitHub} alt="GitHub" />
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
