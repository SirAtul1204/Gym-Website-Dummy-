import React, { Component } from "react";
import Instagram from "../../Images/instagram.svg";
import LinkedIn from "../../Images/linkedin.svg";
import GitHub from "../../Images/github.png";

class Details extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<div className="contact-details">
					<a
						className="contact-details-link"
						href="https://www.instagram.com/sir_atul_12/"
						target="_blank">
						<img src={Instagram} alt="instagram" />
						<span>@sir_atul_12</span>
					</a>
					<a
						className="contact-details-link"
						href="https://www.linkedin.com/in/atul-singh-2628431ab/"
						target="_blank">
						<img src={LinkedIn} alt="linkedin" />
						<span>Atul Singh</span>
					</a>
					<a
						className="contact-details-link"
						href="https://github.com/SirAtul1204"
						target="_blank">
						<img src={GitHub} alt="github" />
						<span>SirAtul1204</span>
					</a>
				</div>
			</React.Fragment>
		);
	}
}

export default Details;
