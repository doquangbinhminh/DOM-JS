let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

li.forEach((element) => {
  element.addEventListener("click", function () {
    element.remove();
  });
});
