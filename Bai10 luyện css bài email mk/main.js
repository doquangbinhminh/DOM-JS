let inputEmail = document.querySelector(".input_login_email");
let inputPassword = document.querySelector(".input_login_password");
let btnLogin = document.querySelector(".btn_login");
let emailError = document.querySelector(".error-email");
let passWordError = document.querySelector(".error-password");

const users = [
  {
    email: "admin@gmail.com",
    password: "123456",
  },
  {
    email: "user@gmail.com",
    password: "111111",
  },
];

btnLogin.addEventListener("click", function () {
  emailError.innerHTML = "";
  passWordError.innerHTML = "";

  let emailValue = inputEmail.value.trim();
  let passwordValue = inputPassword.value.trim();

  if (emailValue === "") {
    emailError.innerHTML = "Vui lòng nhập email";
    return;
  }

  if (passwordValue === "") {
    passWordError.innerHTML = "Vui lòng nhập mật khẩu";
    return;
  }

  let user = users.find(function (item) {
    return item.email === emailValue;
  });

  if (!user) {
    emailError.innerHTML = "Sai email";
    return;
  }

  if (user.password !== passwordValue) {
    passWordError.innerHTML = "Sai mật khẩu";
    return;
  }

  window.location.href = "/Bai12 tao header shopee/";
});
