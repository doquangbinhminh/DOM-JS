let iconUser = document.querySelector(".icon_user");
let user = document.querySelector(".user");

iconUser.addEventListener("click", function () {
  if (getComputedStyle(user).display === "none") {
    user.style.display = "block";
  } else {
    user.style.display = "none";
  }
});
