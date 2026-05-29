let ulListTodo = document.querySelector("#listTodo");
let btnAdd = document.querySelector("#btnAdd");
let inputTodo = document.querySelector("#inputTodo");

let todos = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: 1,
    text: "Học JavaScript",
  },
  {
    id: 2,
    text: "Đi ngủ",
  },
];

function renderTodo() {
  let renderUl = todos.map(function (item) {
    return `
      <div class="deleteList">
        <p>${item.text}</p>

        <button 
          class="delete"
          onclick="deleteTodo(${item.id})"
        >
          Delete
        </button>
      </div>
    `;
  });

  ulListTodo.innerHTML = renderUl.join("");
}

renderTodo();

btnAdd.addEventListener("click", function () {
  let value = inputTodo.value.trim();

  if (value === "") {
    alert("Vui lòng nhập giá trị");
    return;
  }

  todos.push({
    id: Date.now(),
    text: value,
  });

  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodo();

  inputTodo.value = "";
});

function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id !== id;
  });

  localStorage.setItem("todos", JSON.stringify(todos));

  renderTodo();
}
