let ul = document.querySelector("#productList");
let currentFilter = "all";
let products = [
  {
    id: 1,
    name: "iPhone 11",
    price: 700,
    added: false,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Samsung S21",
    price: 400,
    added: false,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 300,
    added: false,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
  {
    id: 4,
    name: "iPhone 12",
    price: 900,
    added: false,
    img: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138",
  },
  {
    id: 5,
    name: "iPhone 13",
    price: 1100,
    added: false,
    img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
  },
  {
    id: 6,
    name: "Samsung S22",
    price: 850,
    added: false,
    img: "https://images.unsplash.com/photo-1644506436069-58d6b5f1b9c4",
  },
  {
    id: 7,
    name: "Samsung S23",
    price: 1200,
    added: false,
    img: "https://images.unsplash.com/photo-1678911820864-e5c567c655d1",
  },
  {
    id: 8,
    name: "Xiaomi Redmi Note 12",
    price: 250,
    added: false,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    id: 9,
    name: "Xiaomi Poco X5",
    price: 350,
    added: false,
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0",
  },
  {
    id: 10,
    name: "Oppo Find X5",
    price: 600,
    added: false,
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
  },
  {
    id: 11,
    name: "Vivo V27",
    price: 450,
    added: false,
    img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37",
  },
  {
    id: 12,
    name: "Realme GT Neo 3",
    price: 500,
    added: false,
    img: "https://images.unsplash.com/photo-1583573636246-18cb2246697f",
  },
  {
    id: 13,
    name: "Google Pixel 7",
    price: 800,
    added: false,
    img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
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
      <img class="anh" src="${item.img}" alt="" />
      <p class="tenSP">Tên:${item.name}</p>
      <p class="giaSP">Giá:${item.price}</p>
    </div>`;
  });
  ul.innerHTML = result.join("");
}

render();

function setFilter(item) {
  currentFilter = item;
  render();
}
