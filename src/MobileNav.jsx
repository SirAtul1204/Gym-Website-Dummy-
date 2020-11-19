import React, { Component } from "react";
import { Link } from "react-router-dom";
import hamburger from "./Images/menu.svg";

class MobileNav extends Component {
  state = {
    isMobileNavOpen: false,
  };
  revealNav = () => {
    let nav = document.getElementById("mobile-nav");
    if (this.state.isMobileNavOpen) {
      nav.style.display = "none";
      this.setState({ isMobileNavOpen: false });
    } else {
      nav.style.display = "flex";
      this.setState({ isMobileNavOpen: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="mobile-major-nav" id="mobile-nav">
          <Link to="/" id="mobile-nav-home">
            Home
          </Link>
          <Link to="/trainers" id="mobile-nav-trainers">
            Trainers
          </Link>
          <Link to="/contact" id="mobile-nav-contact">
            Contact
          </Link>
          <Link to="/buyMembership" id="mobile-nav-buyMembership">
            Buy Membership
          </Link>
        </div>
        <div className="hamburger" onClick={this.revealNav}>
          <img
            src={hamburger}
            alt="mobile-nav"
            style={{ width: "30px", padding: "2%" }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MobileNav;
