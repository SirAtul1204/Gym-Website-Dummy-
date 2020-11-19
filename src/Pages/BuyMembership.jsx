import React, { Component } from "react";
import Nav from "../Nav";
import Intro from "../Components/BuyMembership/Intro";
import Form from "../Components/BuyMembership/Form";
import Footer from "../Footer";
import MobileNav from "../MobileNav";

class BuyMembership extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MobileNav pageName="mobile-nav-buyMembership" />
        <Nav pageName="buyMembership" />
        <Intro />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BuyMembership;
