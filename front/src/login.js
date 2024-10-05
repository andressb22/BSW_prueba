import { activeModal } from "./Modal.js";

const inputs = document.querySelectorAll(".inputLogin");
const formLogin = document.querySelector("#formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#Password");
const buttonLogin = document.querySelector("#buttonLogin");
const hiddenPassword = document.querySelector("#hiddenPassword");
const activePassword = document.querySelector("#activePassword");
const slider = document.querySelector("#slider");
let elementActive = 0;

const deco = document.querySelector(`#deco0`);
deco.style.background = "#fff";

const regCorreo =
  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
const urlApi = "http://localhost:3000/";

const isValidatedInput = (input) => {
  const typeInput = input.name;
  let isValidated = true;
  let error = "";

  console.log("llega aqui", typeInput);
  if (input.value == "") {
    error = "Complete this field";
    isValidated = false;
  } else if (typeInput == "email") {
    if (!regCorreo.test(input.value)) {
      error = "Invalid email address";
      isValidated = false;
    }
  } else if (typeInput == "password") {
    if (!regPassword.test(input.value)) {
      error = "Invalid password";
      isValidated = false;
    }
  }

  if (!isValidated) {
    //obtener la etiqueta del error para asignarlo
    input.style.border = "2px solid #D32F2F";
    const spanError = input.nextElementSibling;
    spanError.innerText = error;
  }

  return isValidated;
};

const isValidatedInputs = (inputs) => {
  let isValidated = true;

  inputs.forEach((input) => {
    if (!isValidatedInput(input)) isValidated = false;
  });

  return isValidated;
};

const logUser = async () => {
  const data = await fetch(`${urlApi}LogIn`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const res = await data.json();

  return res;
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (isValidatedInputs(inputs)) {
    //validaciones correctas
    buttonLogin.innerHTML = '<div class="loader"></div>';
    logUser()
      .then((result) => {
        if (!result.status) {
          activeModal(2, result.msg);
          return;
        }

        sessionStorage.setItem("credentials", JSON.stringify(result.userData));
        activeModal(1, result.msg, "/map.html");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        buttonLogin.innerHTML = "Log in";
      });
  }

  return;
};

const handleInputFocus = (event) => {
  const spanError = event.target.nextElementSibling;
  spanError.innerText = "";
  event.target.style.border = "2px solid #6e54b5";
};

const handleInputBlur = (event) => {
  event.target.style.border = "none";
};

inputs.forEach((input) => {
  input.addEventListener("focus", handleInputFocus);
  input.addEventListener("blur", handleInputBlur);
});

const activePass = () => {
  activePassword.classList.add("activeIco");
  activePassword.classList.remove("disabelIco");
  hiddenPassword.classList.add("disabelIco");
  hiddenPassword.classList.remove("activeIco");
  password.setAttribute("type", "password");
};

const hiddenPass = () => {
  activePassword.classList.add("disabelIco");
  activePassword.classList.remove("activeIco");
  hiddenPassword.classList.add("activeIco");
  hiddenPassword.classList.remove("disabelIco");
  password.setAttribute("type", "Text");
};

setInterval(() => {
  if (slider.children.length > 0) {
    const firstElement = slider.children[0];
    const sizeSlide = firstElement.offsetWidth;
    slider.style.transition = `500ms ease-out all`;
    slider.style.transform = `translateX(-${sizeSlide}px)`;

    const transition = () => {
      slider.style.transition = `none`;
      slider.style.transform = `translateX(0px)`;
      slider.appendChild(firstElement);
    };

    let index;
    if (elementActive >= slider.children.length -1) {
      index = 0;
    } else {
      index = elementActive + 1;
    }

    const lastDeco = document.querySelector(`#deco${elementActive}`);
    lastDeco.style.background = "#ffffff80";
    const deco = document.querySelector(`#deco${index}`);
    deco.style.background = "#fff";
    elementActive = index;


    slider.addEventListener("transitionend", transition);
  }
}, 5000);

formLogin.addEventListener("submit", handleSubmit);
hiddenPassword.addEventListener("click", activePass);
activePassword.addEventListener("click", hiddenPass);
