import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

class Form extends Component {
	state = {};

	handleCaptcha = (v) => {
		console.log(v);
	};

	render() {
		return (
			<React.Fragment>
				<div className="form">
					<form>
						<div className="form-input">
							<label for="name">Full Name</label>
							<input type="text" id="name" name="name" placeholder="Atul Singh" />
						</div>
						<div className="form-input">
							<label for="age">Age</label>
							<input type="number" id="age" name="age" placeholder="20" />
						</div>
						<div className="form-input">
							<label for="height">Height (in meters)</label>
							<input type="number" id="height" name="height" placeholder="182" />
						</div>
						<div className="form-input">
							<label for="weight">Weight (In Kilograms)</label>
							<input type="number" id="weight" name="weight" placeholder="72" />
						</div>
						<div className="form-input">
							<label for="phone">Phone Number</label>
							<input type="text" id="phone" name="phone" placeholder="999999999" />
						</div>
						<div className="form-input">
							<ReCAPTCHA
								sitekey="6Lfa3tsZAAAAAANOveRaeKhrWmIdQfNi0KRKG40e"
								onChange={this.handleCaptcha}
								size="compact"
							/>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Form;
