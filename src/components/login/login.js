import React, { Component } from "react";
import header from "./header.svg";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import validate from "./Validate";
import "./Style.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formIsValid: false,

      formControls: {
        email: {
          value: "",
          placeholder: "Email address",
          valid: false,
          touched: false,
          validationRules: {
            isEmail: true
          }
        },
        password: {
          value: "",
          placeholder: "Password",
          valid: false,
          touched: false,
          validationRules: {
            minLength: 8,
            isPassword: true
          },
          hidden: true
        }
      }
    };
  }

  toggleShow = () => {
    this.setState({ hidden: !this.state.formControls.password.hidden });
    console.log(this.state.formControls.password.hidden, "parent");
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  };

  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
  };

  render() {
    console.dir(this.state.formControls);

    // console.log(this.state.formControls.email.valid);
    // console.log(this.state.formControls.password.valid);
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
                  <EmailInput
                    name="email"
                    placeholder={this.state.formControls.email.placeholder}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid}
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                  />
                </div>
                <div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="passwordContainer">
                      <PasswordInput
                        name="password"
                        placeholder={
                          this.state.formControls.password.placeholder
                        }
                        touched={this.state.formControls.password.touched}
                        valid={this.state.formControls.password.valid}
                        value={this.state.formControls.password.value}
                        onChange={this.changeHandler}
                        hidden={this.state.formControls.password.hidden}
                        toggleShow={this.toggleShow}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn">
                <button
                  type="submit"
                  className="btn"
                  onClick={this.formSubmitHandler}
                  // disabled property as long as the formControls is not valid.
                  disabled={!this.state.formIsValid}
                >
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
