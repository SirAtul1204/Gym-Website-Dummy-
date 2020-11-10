import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Form extends Component {
  state = {
    captchaResponse: "",
    isModalOpen: false,
    email: "",
  };

  handleCaptcha = (v) => {
    let captchaResponse = v;
    console.log(v);
    this.setState({ captchaResponse: captchaResponse });
  };

  validate = () => {
    let a = this.verifyName();
    let b = this.verifyAge();
    let c = this.verifyGender();
    let d = this.verifyHeight();
    let e = this.verifyWeight();
    let f = this.verifyPhoneNumber();
    let g = this.verifyCaptcha();
    let i = this.verifyEmail();

    if (a && b && c && d & e && f && g && i) {
      return true;
    } else {
      return false;
    }
  };

  verifyName = () => {
    const regex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg-name");

    if (regex.test(name)) {
      console.log("yes");
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyAge = () => {
    const regex = /^[1-9](?:\d{0,2}(?:,\d{3})+|\d*)$/;
    const age = document.getElementById("age").value;
    let msg = document.getElementById("msg-age");

    if (regex.test(age)) {
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyGender = () => {
    const gender = document.getElementById("gender").value;
    let msg = document.getElementById("msg-gender");

    if (gender !== "none") {
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyHeight = () => {
    const regex = /^[1-9](?:\d{0,2}(?:,\d{3})+|\d*)$/;
    const height = document.getElementById("height").value;
    let msg = document.getElementById("msg-height");

    if (regex.test(height)) {
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyWeight = () => {
    const regex = /^[1-9](?:\d{0,2}(?:,\d{3})+|\d*)$/;
    const weight = document.getElementById("weight").value;
    let msg = document.getElementById("msg-weight");

    if (regex.test(weight)) {
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyPhoneNumber = () => {
    const regex = /[0-9]{10}/;
    const phoneNumber = document.getElementById("phone").value;
    let msg = document.getElementById("msg-phone");

    if (regex.test(phoneNumber)) {
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyCaptcha = () => {
    let msg = document.getElementById("msg-recaptcha");
    if (this.state.captchaResponse !== "") {
      msg.style.display = "none";
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  verifyEmail = () => {
    let msg = document.getElementById("msg-email");
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let email = document.getElementById("email").value;

    if (regex.test(email)) {
      msg.style.display = "none";
      this.setState({ email: email });
      return true;
    } else {
      msg.style.display = "block";
      return false;
    }
  };

  openModal = () => {
    let isModalOpen = true;
    this.setState({ isModalOpen: isModalOpen });
  };

  successful = () => {
    this.showCloseButton();
    document.getElementById("modal-heading").style.display = "block";
    document.getElementById("modal-para-one").style.display = "block";
    document.getElementById("modal-loading").style.display = "none";
    document.getElementById("modal-para-two").style.display = "none";
  };

  sendEmail = async () => {
    try {
      console.log("Function Called!!");
      let findByEmailUrl =
        "https://gym-website-dummy-backend.herokuapp.com/findByEmail?";
      findByEmailUrl +=
        "API_KEY=" +
        process.env.REACT_APP_BACKEND_API_KEY +
        "&email=" +
        this.state.email;

      let findRes = await fetch(findByEmailUrl);
      let findData = await findRes.json();
      console.log(findData._id);
      console.log(findData.email);
      console.log(process.env.REACT_APP_MAILER_API_KEY);

      let mailerData = {
        id: String(findData._id),
        email: String(findData.email),
        API_KEY: String(process.env.REACT_APP_MAILER_API_KEY),
      };

      console.log(JSON.stringify(mailerData));

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailerData),
      };
      console.log(options);

      let mailerRes = await fetch(
        "https://mailer-javascript.herokuapp.com/withQRcode",
        options
      );
      console.log(mailerRes);
    } catch (e) {
      console.log("Error!");
      console.log(e);
    }
  };

  dataAlreadyExist = () => {
    this.showCloseButton();
    let heading = document.getElementById("modal-heading");
    heading.style.display = "block";
    heading.innerHTML = "User already exist";
    let para = document.getElementById("modal-para-one");
    para.style.display = "none";
    document.getElementById("modal-loading").style.display = "none";
    document.getElementById("modal-para-two").style.display = "none";

    let sendEmailButton = document.getElementById("modal-send-qr-again");
    sendEmailButton.style.display = "block";
  };

  unauthorized = () => {
    this.showCloseButton();
    let heading = document.getElementById("modal-heading");
    heading.style.display = "block";
    heading.innerHTML = "Unauthorized";
    heading.style.color = "#ff0000";
    document.getElementById("modal-para-one").style.display = "none";
    document.getElementById("modal-loading").style.display = "none";
    document.getElementById("modal-para-two").style.display = "none";
  };

  internalError = () => {
    this.showCloseButton();
    let heading = document.getElementById("modal-heading");
    heading.style.display = "block";
    heading.innerHTML = "Internal Server Error";
    heading.style.color = "#ff0000";
    let para = document.getElementById("modal-para-one");
    para.style.display = "block";
    para.innerHTML = "Please try again later!";
    document.getElementById("modal-loading").style.display = "none";
    document.getElementById("modal-para-two").style.display = "none";
  };

  showCloseButton = () => {
    document.getElementById("modal-button").style.display = "block";
  };

  close = () => {
    window.location.reload();
  };

  handleSubmit = async (e) => {
    if (this.validate()) {
      this.openModal();
      try {
        const data = {
          API_KEY: process.env.REACT_APP_BACKEND_API_KEY,
          name: document.getElementById("name").value,
          age: document.getElementById("age").value,
          height: document.getElementById("height").value,
          weight: document.getElementById("weight").value,
          phoneNumber: document.getElementById("phone").value,
          gender: document.getElementById("gender").value,
          email: document.getElementById("email").value,
          captchaResponse: this.state.captchaResponse,
        };

        let fetchResponse = await fetch(
          "https://gym-website-dummy-backend.herokuapp.com/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (fetchResponse.status === 200) {
          this.successful();
        } else if (fetchResponse.status === 400) {
          this.dataAlreadyExist();
        } else if (fetchResponse.status === 401) {
          this.unauthorized();
        } else {
          this.internalError();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      e.preventDefault();
      console.error("error");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="form">
          <form>
            <div className="form-input">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Atul Singh"
              />
              <p className="form-error-msg" id="msg-name">
                *Please enter a valid name
              </p>
            </div>
            <div className="form-input">
              <label for="age">Age</label>
              <input type="text" id="age" name="age" placeholder="20" />
              <p className="form-error-msg" id="msg-age">
                *Please enter a valid age
              </p>
            </div>
            <div className="form-input">
              <label for="gender">Gender</label>
              <select id="gender">
                <option value="none" selected disabled>
                  Select One
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <p className="form-error-msg" id="msg-gender">
                *Please select one
              </p>
            </div>
            <div className="form-input">
              <label for="height">Height (in meters)</label>
              <input type="text" id="height" name="height" placeholder="182" />
              <p className="form-error-msg" id="msg-height">
                *Please enter a valid height
              </p>
            </div>
            <div className="form-input">
              <label for="weight">Weight (In Kilograms)</label>
              <input type="text" id="weight" name="weight" placeholder="72" />
              <p className="form-error-msg" id="msg-weight">
                *Please enter a valid weight
              </p>
            </div>
            <div className="form-input">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="999999999"
              />
              <p className="form-error-msg" id="msg-phone">
                *Please enter a valid phone number
              </p>
            </div>
            <div className="form-input">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="at.ul@sir.com"
              />
              <p className="form-error-msg" id="msg-email">
                *Please enter a valid email
              </p>
            </div>
            <div className="form-input">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={this.handleCaptcha}
                size="compact"
              />
              <p className="form-error-msg" id="msg-recaptcha">
                *Please verify this captcha
              </p>
            </div>
            <div className="form-submit">
              <button type="button" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <Modal className="modal" isOpen={this.state.isModalOpen}>
          <div className="modal-container">
            <div className="modal-text">
              <h1 id="modal-heading">Transaction Successful</h1>
              <p id="modal-para-one">Check your email for your QR code.</p>
              <div id="modal-loading"></div>
              <p id="modal-para-two">Please Wait</p>
              <a id="modal-send-qr-again" onClick={this.sendEmail}>
                Send QR Again
              </a>
            </div>

            <button id="modal-button" onClick={this.close}>
              Close
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Form;
