let addCart = document.querySelector(".add_cart");
let numberCart = document.querySelector(".number_cart");

let count_number_cart = Number(localStorage.getItem("count_number_cart")) || 0;
numberCart.innerHTML = count_number_cart;
addCart.addEventListener("click", function () {
  count_number_cart++;

  numberCart.innerHTML = count_number_cart;

  localStorage.setItem("count_number_cart", count_number_cart);
});
