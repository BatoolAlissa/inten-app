const validate = (value, rules) => {
  let isValid = true;

  /* Email validation*/
  const emailValidator = value => {
    let RegExp = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    return RegExp.test(String(value).toLowerCase());
  };

  /* Password validation*/
  const passwordValidator = value => {
    var RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    return RegExp.test(value);
  };

  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;

      case "isPassword":
        isValid = isValid && passwordValidator(value);
        break;

      default:
        isValid = true;
    }
  }

  return isValid;
};

export default validate;
