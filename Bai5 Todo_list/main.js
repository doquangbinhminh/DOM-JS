let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let ul = document.querySelector("#list");

btn.addEventListener("click", function () {
  newLi = document.createElement("li");
  newLi.innerHTML = `${input.value}`;
  ul.appendChild(newLi);
});
