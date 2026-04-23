let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

//appendChild
// btn.addEventListener("click", function () {
//   let addLi = document.createElement("li");
//   addLi.textContent = "Item 3";
//   ul.appendChild(addLi);
// });

//prepend
// btn.addEventListener("click", function () {
//   let addLi = document.createElement("li");
//   addLi.textContent = "Item 3";
//   ul.prepend(addLi);
// });

//insertBefore
btn.addEventListener("click", function () {
  let addLi = document.createElement("li");
  addLi.textContent = "Item 3";
  ul.insertBefore(addLi, ul[1]);
});
