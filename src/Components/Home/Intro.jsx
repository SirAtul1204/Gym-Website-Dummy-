import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";

class Intro extends Component {
  state = {
    imgIntro: "",
  };

  componentDidMount = () => {
    const unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    });
    unsplash.search
      .photos("gym", 1, 25)
      .then(toJson)
      .then((data) => {
        console.log(data);
        let imgIntro =
          data["results"][Math.floor(Math.random() * 25)]["urls"]["raw"];

        imgIntro += "&fit=crop&w=400&h=400";

        this.setState({ imgIntro: imgIntro });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="intro">
          <p>
            This is dummy website for a gym just to showcase my web dev skills.
            No information given here is real.
          </p>
          <img src={this.state.imgIntro} alt="Gym and Fitness" />
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
