import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";

class About extends Component {
	state = {
		img1: "",
		img2: "",
		img3: "",
	};
	componentDidMount = () => {
		const unsplash = new Unsplash({
			accessKey: "rFkNGFTM1VVxCA4Or6nMEcQr3zr0Pnzo4nJNoDXJ-t0",
		});
		unsplash.search
			.photos("exercise", 1, 25)
			.then(toJson)
			.then((data) => {
				console.log(data);
				let img1 = data["results"][Math.floor(Math.random() * 25)]["urls"]["raw"];
				let img2 = data["results"][Math.floor(Math.random() * 25)]["urls"]["raw"];
				let img3 = data["results"][Math.floor(Math.random() * 25)]["urls"]["raw"];

				img1 += "&fit=crop&w=400&h=400";
				img2 += "&fit=crop&w=400&h=400";
				img3 += "&fit=crop&w=400&h=400";

				this.setState({ img1: img1, img2: img2, img3: img3 });
			});
	};
	render() {
		return (
			<React.Fragment>
				<div className="about">
					<h1>About</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam
						accusantium qui odit asperiores. Totam, ex quibusdam repellat quo illum
						dolorum earum in minima perspiciatis doloribus veritatis animi maxime rem
						mollitia obcaecati distinctio ipsam ad quos, fugit dolore. Temporibus quas
						cupiditate, ut architecto corrupti corporis nam obcaecati sit natus esse?
					</p>
					<ul>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam
							temporibus aspernatur earum quae officia.
						</li>
						<li>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
							libero magnam vel officiis sed officia?
						</li>
					</ul>
					<div className="about-imgs">
						<img src={this.state.img1} alt="Gym and Fitness" />
						<img src={this.state.img2} alt="Gym and Fitness" />
						<img src={this.state.img3} alt="Gym and Fitness" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default About;
