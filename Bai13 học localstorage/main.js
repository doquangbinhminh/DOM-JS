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
// ===== Render Product =====
function renderProducts(data) {
  let html = data.map(function (item) {
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

  ulProduct.innerHTML = html.join("");
}

// Render lần đầu
renderProducts(products);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  let total = 0;

  cart.forEach(function (item) {
    total += item.quantity;
  });

  numberCart.innerHTML = total;
}

updateCartCount();

// render dropdown cart
let openInCart = document.querySelector(".open_in_cart_shopee");
let cartContent = document.querySelector(".cart_content");
// render sản phẩm
function renderCart() {
  let html = cart.map(function (item) {
    return `
      <div class="cart_item">

  <input type="checkbox">

  <img
    class="img_in_cart_shoppe"
    src="${item.img}"
    alt=""
  />

  <div class="product_info">
    <p class="title_product_info">${item.name}</p>
  </div>

  <div class="price_product_info">
    ${item.price}.000đ
  </div>

  <div class="quantity_product">
    <input
      type="number"
      min="1"
      value="${item.quantity}"
      onchange="changeNumber(${item.id}, this.value)"
    />
  </div>

  <div class="total_product">
    ${(item.price * item.quantity).toLocaleString()},000đ
  </div>

  <div
    class="delete_item"
    onclick="deleteCart(${item.id})"
  >
    Xóa
  </div>

</div>
    `;
  });

  cartContent.innerHTML = html.join("");
}

renderCart();

// add cart
let addCart = document.querySelectorAll(".add_cart");

addCart.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let product = products[index];

    let findProduct = cart.find(function (cartItem) {
      return cartItem.id === product.id;
    });

    if (!findProduct) {
      cart.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        quantity: 1,
      });
    } else {
      if (findProduct.quantity < product.quantity) {
        findProduct.quantity++;
      } else {
        alert("Đã đạt số lượng tối đa!");
        return;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    renderCart();
  });
});

function changeNumber(id, value) {
  let cartItem = cart.find(function (item) {
    return item.id === id;
  });

  let product = products.find(function (item) {
    return item.id === id;
  });

  value = Number(value);

  if (value > product.quantity) {
    alert(`Tối đa chỉ được ${product.quantity} sản phẩm`);

    cartItem.quantity = product.quantity;

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
    updateCartCount();

    return;
  }

  cartItem.quantity = value;

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}
// mở đóng dropdown
let iconCartShopee = document.querySelector(".icon_cart_shopee");

iconCartShopee.addEventListener("click", function () {
  if (getComputedStyle(openInCart).display === "none") {
    openInCart.style.display = "block";
  } else {
    openInCart.style.display = "none";
  }
});

let changeIconUser = document.querySelector(".change_icon_user");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  changeIconUser.innerHTML = `
    <a href="/Bai10 luyện css bài email mk/">Đăng nhập</a>
    <a href="/Bai11 đăng ký shopee/index.html">Đăng ký</a>
  `;
} else {
  changeIconUser.innerHTML = `

  <div class="user-menu">
   <img
      class="img_icon_user"
      src="${currentUser.avatar}"
      alt="${currentUser.fullName}"
    />
    
     <div class="dropdown">
            <a><i class="fa-regular fa-user"></i> View Profile</a>
            <a><i class="fa-solid fa-chart-column"></i> Analytics & Data</a>
            <a><i class="fa-regular fa-circle-question"></i> Help Center</a>
            <a><i class="fa-solid fa-gear"></i> Account Settings</a>
            <a><i class="fa-regular fa-star"></i> Upgrade Plan</a>
            <a><i class="fa-regular fa-moon"></i> Dark Mode</a>
            <a class="log_out"><i class="fa-solid fa-right-from-bracket"></i> Log Out</a>
     </div>
  </div>
   
           
  `;
}

let avatar = document.querySelector(".img_icon_user");
let dropdown = document.querySelector(".dropdown");

if (avatar && dropdown) {
  avatar.addEventListener("click", function () {
    if (getComputedStyle(dropdown).display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  });
}

// Đăng xuất

let logOut = document.querySelector(".log_out");

if (logOut) {
  logOut.addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    location.reload();
  });
}

// Tìm kiếm shoppe

let searchShopee = document.querySelector(".input_search_shopee input");
let btnSearchShopee = document.querySelector(".btn_search_shopee");

btnSearchShopee.addEventListener("click", function () {
  let keyword = searchShopee.value.trim().toLowerCase();

  if (keyword === "") {
    renderProducts(products);
    return;
  }

  let findSearch = products.filter(function (item) {
    return item.name.toLowerCase().includes(keyword);
  });

  renderProducts(findSearch);
});

// Xóa cart bằng dấu X
let closeCart = document.querySelector(".close_cart");
closeCart.addEventListener("click", function () {
  openInCart.style.display = "none";
});
