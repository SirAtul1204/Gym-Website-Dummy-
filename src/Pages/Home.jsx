import React, { Component } from "react";
import Nav from "../Nav";
import Intro from "../Components/Home/Intro";
import About from "../Components/Home/About";
import Footer from "../Footer";
import MobileNav from "../MobileNav";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MobileNav pageName="mobile-nav-home" />
        <Nav pageName="home" />
        <Intro />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
