import React, { Component } from "react";
import "./style.css";
import header from "./header.svg";
import hidePass from "./hidePass.svg";

// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// const PasswordRegex = RegExp(/^[a-zA-Z0-9]*$/);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      hidden: true
    };
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
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
            <form className="demoForm">
              <div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="passwordContainer">
                      <input
                        placeholder="Password"
                        type={this.state.hidden ? "password" : "text"}
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        required
                      />
                      {/* <i className="fas fa-eye-slash" /> */}
                      <span className="icon">
                        <img
                          src={hidePass}
                          alt="ShowPassword"
                          onClick={this.toggleShow}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn">
                <button
                  type="submit"
                  className="btn"
                  // disable={}
                >
                  {" "}
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
