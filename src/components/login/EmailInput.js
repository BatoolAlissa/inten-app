import React from "react";
import "./Style.css";

const EmailInput = props => {
  let emailInputStyle = "email";
  let displiedError = "";

  // console.log(props.value);

  if (props.touched && !props.valid && props.value === "") {
    emailInputStyle = "email error";
    displiedError = "Email is required";
  } else if (props.touched && !props.valid && props.value !== "") {
    emailInputStyle = "email error";
    displiedError = "Invalid email";
  }
  return (
    <div className="email">
      <label htmlFor="email">Email</label>
      <div className={emailInputStyle}>
        <input type="email" required {...props} />
        <p className="errorMsg">{displiedError}</p>
      </div>
    </div>
  );
};

export default EmailInput;
