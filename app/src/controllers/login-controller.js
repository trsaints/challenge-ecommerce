export const loginController = {
  validate(input) {
    const inputType = input.dataset.type;

    if (this.validators[inputType]) {
      this.validators[inputType](input);
    }

    if (input.validity.valid) {
      input.parentElement.parentElement.querySelector(
        "[data-login='warning']"
      ).innerText = "";
      input.parentElement.classList.remove("invalid");
      input.parentElement.classList.add("valid");
    } else {
      input.parentElement.parentElement.querySelector(
        "[data-login='warning']"
      ).innerText = this.showErrorMsg(input, inputType);
      input.parentElement.classList.add("invalid");
      input.parentElement.classList.remove("valid");
    }
  },

  showErrorMsg(input, type) {
    let message = "";

    this.errorTypes.forEach((error) => {
      if (input.validity[error]) {
        message = this.errorMessages[type][error];
      }
    });

    return message;
  },

  validateEmail(input) {
    const email = input.value;
    const validEmail =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errMessage = "";

    if (!validEmail.test(email)) {
      errMessage = "Email inválido!";
    }

    input.setCustomValidity(errMessage);
  },

  validatePassword(input) {
    const password = input.value;
    let errMessage = "";

    if (password === "" || password === " ") {
      errMessage = "A senha precisa ser preenchida!";
    }

    input.setCustomValidity(errMessage);
  },

  validators: {
    email: (input) => loginController.validateEmail(input),
    password: (input) => loginController.validatePassword(input),
  },

  errorMessages: {
    email: {
      valueMissing: "O campo email não pode estar vazio.",
      typeMistmatch: "O email digitado não é valido.",
      patternMismatch: "O email digitado não é valido.",
      customError: "O email digitado não é valido.",
    },
    password: {
      valueMissing: "O campo senha não pode estar vazio.",
      customError: "O campo senha não pode estar vazio.",
    },
  },

  errorTypes: [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ],
};
