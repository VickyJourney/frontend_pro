const form = document.getElementById("form");

const validators = {
  name: (value) => (/s.+/.test(value) ? null : "Please provide a correct name"),
  email: (value) => (/.+@.+/.test(value) ? null : "Invalid email"),
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
