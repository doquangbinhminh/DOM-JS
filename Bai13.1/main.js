const defaultData = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    candy: 1,
  },
  {
    id: 2,
    name: "Phạm Văn B",
    candy: 2,
  },
  {
    id: 3,
    name: "Bùi Thị C",
    candy: 1,
  },
  {
    id: 4,
    name: "Đỗ Quang D",
    candy: 1,
  },
];

let arr = JSON.parse(localStorage.getItem("candies")) || defaultData;

let listCandy = document.querySelector(".list_candy");

function saveData() {
  localStorage.setItem("candies", JSON.stringify(arr));
}

function renderData() {
  let html = arr
    .map(function (item) {
      return `
        <div>
          <p>${item.name}</p>
          <input
            class="input_candy"
            type="text"
            value="${item.candy}"
            readonly
          />
          <button class="cong">+</button>
          <button class="tru">-</button>
        </div>
      `;
    })
    .join("");

  listCandy.innerHTML = html;

  let cong = document.querySelectorAll(".cong");
  let tru = document.querySelectorAll(".tru");
  let inputCandy = document.querySelectorAll(".input_candy");

  cong.forEach(function (button, index) {
    button.addEventListener("click", function () {
      arr[index].candy++;

      inputCandy[index].value = arr[index].candy;

      saveData();
    });
  });

  tru.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (arr[index].candy > 1) {
        arr[index].candy--;

        inputCandy[index].value = arr[index].candy;

        saveData();
      }
    });
  });
}

renderData();
