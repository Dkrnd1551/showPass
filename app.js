const togglePass = document.querySelector("#togglePassword");
const pass = document.querySelector("#password");

togglePass.addEventListener("click", () => {
  const type = pass.getAttribute("type") === "password" ? "text" : "password";
  pass.setAttribute("type", type);
  togglePass.classList.toggle("fa-eye-slash");
});

const button = document.getElementsByClassName("button");

button[0].addEventListener("click", function onClick() {
  alert("Login berhasil");
});

function onSubmit() {
  let data = document.getElementsByClassName("input-data");
  let btn = document.getElementsByClassName("button");
  let isValid = true;
  for (var i = 0; i < data.length; i++) {
    let changedInput = data[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn[0].disabled = !isValid;
  if (button[0].disabled == true) {
    button[0].style.backgroundColor = "#FFBC97";
  } else {
    button[0].style.backgroundColor = "#ff7800";
  }
}
