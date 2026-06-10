let ulProduct = document.querySelector(".list_product");

const products = [
  {
    id: 1,
    name: "Áo thun",
    price: 150000,
  },
  {
    id: 2,
    name: "Quần jean",
    price: 350000,
  },
];

let newProduct = products.map(function (item) {
  return `<p class="title_product">${item.name}</p>
      <p class="price_product">${item.price}</p>`;
});

ulProduct.innerHTML = newProduct.join("");

localStorage.setItem("products", JSON.stringify(products));

let productsFromStorage = JSON.parse(localStorage.getItem("products"));
console.log(productsFromStorage);
