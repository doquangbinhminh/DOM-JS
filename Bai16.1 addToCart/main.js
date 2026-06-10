let ulProduct = document.querySelector(".product_list");

const product = {
  id: 1,
  name: "Áo thun",
  price: 150000,
  quantity: 1,
};

ulProduct.innerHTML = `
  <p class="product_title">${product.name}</p>
  <p class="product_price">${product.price}</p>
  <p class="product_quantity">${product.quantity}</p>
  <button class="btn_add">Thêm</button>
`;

let btnAdd = document.querySelector(".btn_add");

function addToCart(newProduct) {
  let productInStorage = JSON.parse(localStorage.getItem("products"));

  if (productInStorage) {
    productInStorage.quantity++;
    localStorage.setItem("products", JSON.stringify(productInStorage));
  } else {
    localStorage.setItem("products", JSON.stringify(newProduct));
  }

  console.log(JSON.parse(localStorage.getItem("products")));
}

btnAdd.addEventListener("click", function () {
  addToCart(product);
});
