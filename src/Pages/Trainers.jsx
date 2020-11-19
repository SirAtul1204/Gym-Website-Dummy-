import React, { Component } from "react";
import Nav from "../Nav";
import Intro from "../Components/Trainers/Intro";
import Table from "../Components/Trainers/Table";
import Footer from "../Footer";
import MobileNav from "../MobileNav";

class Trainers extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <MobileNav pageName="mobile-nav-trainers" />
        <Nav pageName="trainers" />
        <Intro />
        <Table />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Trainers;
