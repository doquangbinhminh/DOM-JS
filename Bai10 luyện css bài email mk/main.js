let inputEmail = document.querySelector(".input_login_email");
let inputPassword = document.querySelector(".input_login_password");
let btnLogin = document.querySelector(".btn_login");

btnLogin.addEventListener("click", function () {
  console.log(inputEmail.value);

  console.log(inputPassword.value);
});
