const form = document.getElementById("myForm");
// const username = document.getElementById("userName");
// const userEmail = document.getElementById("userEmail");
// const userPassword1 = document.getElementById("userPassword");
// const userPaswword2 = document.getElementById("userRepeatPassword");

const validators = {
  name: (value) =>
    /\s{3,}/.test(value) ? null : "Please emter at least 3 symbols",
  email: (value) =>
    /\s+@\s+\.s+/.test(value) ? null : "Please enter valid email",
  password1: (value) =>
    /\s{8,}/.test(value) ? null : "Password must contain at least 8 symbols",
  password2: (value) =>
    value.matches(password1.value) ? null : "Passwords do not match",
};

const fields = [
  {
    name: "name",
    validator: validators.name,
  },
  {
    name: "email",
    validator: validators.email,
  },
  {
    name: "password1",
    validator: validators.password1,
  },
  {
    name: "password2",
    validator: validators.password2,
  },
];

const validateFormData = (data) => {
  const errors = {};
  fields.forEach((field) => {
    const { name, validator } = field;
    const error = validator(data[name]);

    if (error) {
      errors[name] = error;
    }
  });

  return Object.keys(errors).length > 0 ? errors : null;
};

const displayErrors = (errors) => {
  Object.entries(errors).map(([key, value]) => {
    document.getElementById(`${key}-error`).textContent = value;
  });
};

const cleanErrors = (fieldNames) => {
  fieldNames.forEach((name) => {
    document.getElementById(`${name}-error`).textContent = "";
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  cleanErrors(fields.map((f) => f.name));

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const errors = validateFormData(data);

  if (errors) {
    displayErrors(errors);
  }
});
