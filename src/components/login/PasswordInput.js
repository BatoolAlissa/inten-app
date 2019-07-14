import React from "react";
import hidePass from "./hidePass.svg";
import "./Style.css";

const PasswordInput = props => {
  let passwordInputStyle = "password passwordContainer";
  let passwordError = "";

  if (props.touched && !props.valid && props.value === "") {
    passwordInputStyle = "password passwordContainer PasswordError";
    passwordError = "Password is required";
  } else if (props.touched && !props.valid && props.value !== "") {
    passwordInputStyle = "password passwordContainer PasswordError";
    passwordError = "Invalid password";
  }

  return (
    <div className="space">
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="passwordContainer">
          <div className={passwordInputStyle}>
            <input
              type={props.hidden ? "password" : "text"}
              className={passwordInputStyle}
              {...props}
            />
            <span className="icon">
              <img
                src={hidePass}
                alt="ShowPassword"
                required
                onClick={props.toggleshow}
              />
            </span>
          </div>
          <p className="errorMsg">{passwordError} </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
