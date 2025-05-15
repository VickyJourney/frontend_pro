const form = document.querySelector("form");

const nameInput = document.querySelector(".userName");
const massegeInput = document.querySelector(".userMessage");
const phoneInput = document.querySelector(".userPhone");
const emailInput = document.querySelector(".userEmail");
const par = document.querySelectorAll("p");

const checkValue = (value, regExp, par, errorMessage) => {
  if (regExp.test(value)) {
    par.textContent = "";
    return;
  }
  par.textContent = errorMessage;
};

const validateValue = () => {
  checkValue(
    nameInput.value,
    /\w+/,
    par[0],
    "This field is required. Please enter your name."
  );
  checkValue(
    massegeInput.value,
    /\w{5,}/,
    par[1],
    "This field is required. Please enter at least 5 symbols."
  );
  checkValue(
    phoneInput.value,
    /\+380\d{9}/,
    par[2],
    "This field is required. Please enter valid phone number starting with country code +380."
  );
  checkValue(
    emailInput.value,
    /\S+\@\S+\.\S+/,
    par[3],
    "This field is required. Please enter valid e-mail adress."
  );
};

form.addEventListener(
  "focus",
  function (event) {
    const target = event.target;

    if (target.matches(".userName, .userMessage, .userPhone, .userEmail")) {
      const index = [...form.elements].indexOf(target);
      if (index >= 0 && index < par.length) {
        par[index].textContent = "";
      }
    }
  },
  true
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObj = Object.fromEntries(formData);

  console.log(formObj, validateValue());
});
