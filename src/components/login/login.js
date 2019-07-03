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

  handleSubmit = event => {
    event.preventDefault();
  };

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
            <form>
              <div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required=""
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>

                  <div className="passwordContainer">
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      required=""
                      noValidate
                      onChange={this.handleChange}
                    />
                    {/* <i className="fas fa-eye-slash" /> */}
                    <span className="icon">
                      <img src={hidePass} alt="ShowPassword" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="btn">
                <button type="submit" className="btn">
                  IGNITION
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
