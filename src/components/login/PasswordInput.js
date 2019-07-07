import React from "react";
import hidePass from "./hidePass.svg";
import "./Style.css";

const PasswordInput = props => {
  let passwordInputStyle = "password passwordContainer";

  if (props.touched && !props.valid) {
    passwordInputStyle = " password passwordContainer error";
  }

  return (
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
          onClick={props.toggleShow}
        />
      </span>
    </div>
  );
};

export default PasswordInput;
