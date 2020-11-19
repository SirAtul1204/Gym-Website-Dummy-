import React, { Component } from "react";
import Nav from "../Nav";
import Intro from "../Components/Contact/Intro";
import Details from "../Components/Contact/Details";
import Footer from "../Footer";
import MobileNav from "../MobileNav";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MobileNav pageName="mobile-nav-contact" />
        <Nav pageName="contact" />
        <Intro />
        <Details />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
