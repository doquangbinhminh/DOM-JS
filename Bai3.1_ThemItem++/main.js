let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let li = document.querySelectorAll("li");
let dem = li.length + 1;

btn.addEventListener("click", function () {
  let addLi = document.createElement("li");
  addLi.innerHTML = `Item ${dem}`;
  ul.appendChild(addLi);
  dem++;
});
