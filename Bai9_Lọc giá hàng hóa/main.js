let ul = document.querySelector("#productList");
let currentFilter = "all";
let allBtn = document.querySelector(".all");
let lowBtn = document.querySelector(".low");
let highBtn = document.querySelector(".high");
let products = [
  {
    id: 1,
    name: "iPhone 11",
    price: 700,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Samsung S21",
    price: 400,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 300,
    added: false,
    img: "https://via.placeholder.com/100",
  },

  {
    id: 4,
    name: "iPhone 12",
    price: 900,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "iPhone 13",
    price: 1100,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Samsung S22",
    price: 850,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    name: "Samsung S23",
    price: 1200,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    name: "Xiaomi Redmi Note 12",
    price: 250,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    name: "Xiaomi Poco X5",
    price: 350,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    name: "Oppo Find X5",
    price: 600,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    name: "Vivo V27",
    price: 450,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    name: "Realme GT Neo 3",
    price: 500,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    name: "Google Pixel 7",
    price: 800,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    name: "OnePlus 11",
    price: 750,
    added: false,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 15,
    name: "Sony Xperia 5",
    price: 950,
    added: false,
    img: "https://via.placeholder.com/100",
  },
];
function render() {
  let filtered = products.filter(function (item) {
    if (currentFilter === "low") {
      return item.price < 500;
    }

    if (currentFilter === "high") {
      return item.price > 500;
    }
    return true;
  });

  let result = filtered.map(function (item) {
    return `<div class="bangSanPham">
      <img src="" alt="${item.img}" />
      <p class="tenSP">Tên:${item.name}</p>
      <p class="giaSP">Giá:${item.price}</p>
    </div>`;
  });
  ul.innerHTML = result.join("");
}

render();

allBtn.addEventListener("click", function () {
  currentFilter = "all";
  render();
});

lowBtn.addEventListener("click", function () {
  currentFilter = "low";
  render();
});

highBtn.addEventListener("click", function () {
  currentFilter = "high";
  render();
});
