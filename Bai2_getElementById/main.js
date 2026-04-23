let title = document.querySelector("#title");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  title.innerHTML = "goodbye";
  title.style.color = "red";
});
