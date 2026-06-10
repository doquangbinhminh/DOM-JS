let inputEmail = document.querySelector(".input_login_email");
let inputPassword = document.querySelector(".input_login_password");
let btnLogin = document.querySelector(".btn_login");
let emailError = document.querySelector(".error-email");
let passWordError = document.querySelector(".error-password");

const user = {
  id: "u_1001",
  username: "nguyenloi",
  email: "loi.nguyen@example.com",
  password: "123123123",
  fullName: "Nguyễn Lợi",
  avatar: "https://i.pravatar.cc/150?img=1",
  phone: "0901234567",
  address: {
    street: "23 Galaxy 4 Tố Hữu",
    ward: "Vạn Phúc",
    district: "Hà Đông",
    city: "Hà Nội",
    country: "Vietnam",
  },
  role: "admin",
  status: "active",
  refreshToken: "abc",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString(),
};

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

  if (user.email !== emailValue) {
    emailError.innerHTML = "Sai email";
    return;
  }

  if (user.password !== passwordValue) {
    passWordError.innerHTML = "Sai mật khẩu";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  window.location.href = "/Bai13 học localstorage/";
});
