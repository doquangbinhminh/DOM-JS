let button = document.querySelector("button");
let p = document.createElement("p");
button.addEventListener("click", function () {
  p.innerHTML = "Hello world";
  document.body.append(p);
});
