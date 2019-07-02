import React, { Component } from "react";
import "./style.css";
import header from "./header.svg";
import hidePass from "./hidePass.svg";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passwrod: ""
    };
  }
  render() {
    return (
      <div className="App-login">
        <header>
          <img src={header} alt="WinfoozLogo" />
        </header>

        <section className="login-box">
          <div className="box-header">
            <p>WELCOME TO WINFOOZ</p>
          </div>

          <div>
            <form action="">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email address"
                  type="email"
                  name="email"
                  noValidate
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                />
                <img src={hidePass} alt="ShowPassword" />
              </div>
            </form>
          </div>
          <div className="btn">
            <a href="#">IGNITION</a>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
