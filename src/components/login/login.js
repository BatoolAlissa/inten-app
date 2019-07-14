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

  toggleshow = () => {
    console.log(
      "!this.state.formControls.password.hidden ",
      !this.state.formControls.password.hidden
    );
    let formControls = this.state.formControls;
    formControls.password.hidden = !formControls.password.hidden;
    this.setState({ formControls });
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
    // console.log(this.state.formControls);
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
                <EmailInput
                  name="email"
                  placeholder={this.state.formControls.email.placeholder}
                  touched={this.state.formControls.email.touched}
                  valid={this.state.formControls.email.valid}
                  value={this.state.formControls.email.value}
                  onChange={this.changeHandler}
                />
                <div>
                  <PasswordInput
                    name="password"
                    placeholder={this.state.formControls.password.placeholder}
                    touched={this.state.formControls.password.touched}
                    valid={this.state.formControls.password.valid}
                    value={this.state.formControls.password.value}
                    onChange={this.changeHandler}
                    hidden={this.state.formControls.password.hidden}
                    toggleshow={this.toggleshow}
                  />
                </div>
              </div>
              <div>
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
