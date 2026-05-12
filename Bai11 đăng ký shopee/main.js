let btn = document.querySelector(".btn-next-register");
let userError = document.querySelector(".error-username");
let input = document.querySelector(".number-phone-register");

btn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    userError.innerHTML = "Vui lòng nhập thông tin";
    return;
  }

  userError.innerHTML = "";
});
