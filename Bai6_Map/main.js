const todos = [
  { text: "Learn JS", done: false },
  { text: "Learn Dom", done: true },
];

let ul = document.querySelector("ul");

function ToHTML(oldTodo) {
  let newTodos = oldTodo.map(function (item) {
    return `<li style="border:2px solid ${item.done ? "green" : "red"}">
              ${item.text}
            </li>`;
  });
  return newTodos.join(" ");
}

ul.innerHTML = ToHTML(todos);
ul.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (!li) return;

  if (li.style.border.includes("red")) {
    li.style.border = "2px solid green";
  } else {
    li.style.border = "2px solid red";
  }
});
