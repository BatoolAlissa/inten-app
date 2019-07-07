import React from "react";
import "./Style.css";

const EmailInput = props => {
  let emailInputStyle = "email";

  if (props.touched && !props.valid) {
    emailInputStyle = "email error";
  }
  return (
    <div className={emailInputStyle}>
      <input type="email" required {...props} />
    </div>
  );
};

export default EmailInput;
