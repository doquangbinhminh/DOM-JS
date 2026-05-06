let ul = document.querySelector("#list");
let button = document.querySelector("#add");
let input = document.querySelector("#timKiem");

ul.addEventListener("change", function (e) {
  if (e.target.type === "checkbox") {
    let li = e.target.closest("li");

    if (e.target.checked) {
      li.style.textDecoration = "line-through";
      li.style.opacity = "0.5";
    } else {
      li.style.textDecoration = "none";
      li.style.opacity = "1";
    }
  }
});

button.addEventListener("click", function (e) {
  let value = input.value.trim();
  if (value === "") return;

  let li = document.createElement("li");

  li.innerHTML = `<input type="checkbox"> ${value}`;

  ul.appendChild(li);

  input.value = "";
});
