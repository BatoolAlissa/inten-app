const validate = (value, rules) => {
  let isValid = true;

  /*minLength Val*/
  const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
  };

  /* Email validation*/
  const emailValidator = value => {
    let RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RegExp.test(String(value).toLowerCase());
  };

  /* Password validation*/
  const passwordValidator = value => {
    var RegExp = /^[a-zA-Z0-9]*$/;
    return RegExp.test(value);
  };

  for (let rule in rules) {
    switch (rule) {
      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;

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
