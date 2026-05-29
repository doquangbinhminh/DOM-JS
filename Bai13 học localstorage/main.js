let numberCart = document.querySelector(".number_cart");
let ulProduct = document.querySelector(".list_in_product");

let products = [
  {
    id: 1,
    name: "iPhone 11",
    quantity: 10,
    price: 700,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Samsung S21",
    quantity: 15,
    price: 400,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    quantity: 20,
    price: 300,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
  {
    id: 4,
    name: "iPhone 12",
    quantity: 5,
    price: 900,
    img: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138",
  },
  {
    id: 5,
    name: "iPhone 13",
    quantity: 8,
    price: 1100,
    img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
  },
  {
    id: 6,
    name: "Samsung S22",
    quantity: 12,
    price: 850,
    img: "https://images.unsplash.com/photo-1644506436069-58d6b5f1b9c4",
  },
  {
    id: 7,
    name: "Samsung S23",
    quantity: 7,
    price: 1200,
    img: "https://images.unsplash.com/photo-1678911820864-e5c567c655d1",
  },
  {
    id: 8,
    name: "Xiaomi Redmi Note 12",
    quantity: 18,
    price: 250,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    id: 9,
    name: "Xiaomi Poco X5",
    quantity: 25,
    price: 350,
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0",
  },
  {
    id: 10,
    name: "Oppo Find X5",
    quantity: 9,
    price: 600,
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
  },
  {
    id: 11,
    name: "Vivo V27",
    quantity: 14,
    price: 450,
    img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37",
  },
  {
    id: 12,
    name: "Realme GT Neo 3",
    quantity: 16,
    price: 500,
    img: "https://images.unsplash.com/photo-1583573636246-18cb2246697f",
  },
  {
    id: 13,
    name: "Google Pixel 7",
    quantity: 11,
    price: 800,
    img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
  },
];

// render product
let product = products.map(function (item) {
  return `
    <div class="in_product">

      <img
        class="img_in_product"
        src="${item.img}"
        alt=""
      />

      <div class="price_in_product">
        <p class="price">${item.price}.000đ</p>

        <p class="persen">-8%</p>

        <p class="sold_product">
          ${item.quantity} đã bán
        </p>

        <div class="heart_icon">❤</div>
      </div>

      <p class="title_in_product">
        ${item.name}
      </p>

      <div class="voucher_in_product">
        <p class="title_voucher">Giảm 20kđ</p>

        <p class="Cod">Cod</p>
      </div>

      <div class="time_shopee">
        Nhận từ 4 Giờ
      </div>

      <div class="review_product">
        <p class="star">
          5.0
          <i class="fa-solid fa-star star_icon"></i>
        </p>

        <p class="quantity">Product (30)</p>

        <p class="followers">
          Shop Followers (318)
        </p>
      </div>

      <div class="bottom_product">
        <i class="fa-regular fa-message icon_message"></i>

        <i class="fa-solid fa-cart-plus add_cart"></i>

        <p class="btn_buy">
          Mua cùng Voucher 240.000đ
        </p>
      </div>

    </div>
  `;
});

ulProduct.innerHTML = product.join("");

// cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// tính tổng cart
let total = 0;

cart.forEach(function (item) {
  total += item.quantity;
});

numberCart.innerHTML = total;
// lấy tất cả nút add cart
let addCart = document.querySelectorAll(".add_cart");

addCart.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let product = products[index];
    // tìm sản phẩm trong cart
    let findProduct = cart.find(function (cartItem) {
      return cartItem.id === product.id;
    });

    // chưa có sản phẩm
    if (!findProduct) {
      cart.push({
        id: product.id,
        quantity: 1,
      });
    } else {
      // check max quantity
      if (findProduct.quantity < product.quantity) {
        findProduct.quantity++;
      } else {
        alert("Đã đạt số lượng tối đa!");
        return;
      }
    }

    // tính tổng cart
    let total = 0;

    cart.forEach(function (item) {
      total += item.quantity;
    });

    numberCart.innerHTML = total;

    // lưu localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  });
});
