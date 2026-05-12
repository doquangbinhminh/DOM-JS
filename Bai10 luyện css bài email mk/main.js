let inputEmail = document.querySelector(".input_login_email");
let inputPassword = document.querySelector(".input_login_password");
let btnLogin = document.querySelector(".btn_login");
let emailError = document.querySelector(".error-email");
let passWordError = document.querySelector(".error-password");

btnLogin.addEventListener("click", function () {
  console.log(inputEmail.value);

  console.log(inputPassword.value);

  if (inputEmail.value.trim() === "") {
    emailError.innerHTML = "Vui lòng nhập email";

    return;
  }

  // emailErrorError.innerHTML = "";

  if (inputPassword.value.trim() === "") {
    passWordErrorError.innerHTML = "Vui lòng nhập mật khẩu";

    return;
  }

  // passWordError.innerHTML = "";
});
