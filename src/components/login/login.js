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
      formControls: {
        email: {
          value: ""
        },
        password: {
          value: ""
        }
      },
      hidden: true
    };
  }

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  };

  render() {
    console.log(this.state.formControls.email);
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
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
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
                        required
                        value={this.state.formControls.password.value}
                        onChange={this.changeHandler}
                      />
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
