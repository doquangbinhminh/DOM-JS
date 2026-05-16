const products = [
  {
    name: "Áo thun nam form rộng",
    thumbnail_url: "https://picsum.photos/300/300?random=1",
    price: 199000,
    sold_quantity: 124,
  },
  {
    name: "Tai nghe Bluetooth",
    thumbnail_url: "https://picsum.photos/300/300?random=2",
    price: 349000,
    sold_quantity: 87,
  },
  {
    name: "Chuột gaming RGB",
    thumbnail_url: "https://picsum.photos/300/300?random=3",
    price: 159000,
    sold_quantity: 231,
  },
  {
    name: "Bàn phím cơ",
    thumbnail_url: "https://picsum.photos/300/300?random=4",
    price: 499000,
    sold_quantity: 45,
  },
  {
    name: "Giày sneaker trắng",
    thumbnail_url: "https://picsum.photos/300/300?random=5",
    price: 259000,
    sold_quantity: 312,
  },
  {
    name: "Balo laptop",
    thumbnail_url: "https://picsum.photos/300/300?random=6",
    price: 129000,
    sold_quantity: 98,
  },
  {
    name: "Đồng hồ thể thao",
    thumbnail_url: "https://picsum.photos/300/300?random=7",
    price: 799000,
    sold_quantity: 21,
  },
  {
    name: "Áo hoodie local brand",
    thumbnail_url: "https://picsum.photos/300/300?random=8",
    price: 219000,
    sold_quantity: 167,
  },
  {
    name: "Loa Bluetooth mini",
    thumbnail_url: "https://picsum.photos/300/300?random=9",
    price: 999000,
    sold_quantity: 12,
  },
  {
    name: "Kính mắt thời trang",
    thumbnail_url: "https://picsum.photos/300/300?random=10",
    price: 179000,
    sold_quantity: 284,
  },
  {
    name: "Áo sơ mi nam Hàn Quốc",
    thumbnail_url: "https://picsum.photos/300/300?random=11",
    price: 289000,
    sold_quantity: 143,
  },
  {
    name: "Túi đeo chéo nữ",
    thumbnail_url: "https://picsum.photos/300/300?random=12",
    price: 159000,
    sold_quantity: 267,
  },
  {
    name: "Dép quai ngang",
    thumbnail_url: "https://picsum.photos/300/300?random=13",
    price: 99000,
    sold_quantity: 501,
  },
  {
    name: "Sạc dự phòng 10000mAh",
    thumbnail_url: "https://picsum.photos/300/300?random=14",
    price: 329000,
    sold_quantity: 89,
  },
  {
    name: "Ốp lưng iPhone",
    thumbnail_url: "https://picsum.photos/300/300?random=15",
    price: 49000,
    sold_quantity: 782,
  },
  {
    name: "Nón lưỡi trai",
    thumbnail_url: "https://picsum.photos/300/300?random=16",
    price: 79000,
    sold_quantity: 214,
  },
  {
    name: "Áo khoác bomber",
    thumbnail_url: "https://picsum.photos/300/300?random=17",
    price: 459000,
    sold_quantity: 63,
  },
  {
    name: "Giày chạy bộ",
    thumbnail_url: "https://picsum.photos/300/300?random=18",
    price: 599000,
    sold_quantity: 154,
  },
  {
    name: "Máy cạo râu mini",
    thumbnail_url: "https://picsum.photos/300/300?random=19",
    price: 189000,
    sold_quantity: 98,
  },
  {
    name: "Quần jean nam",
    thumbnail_url: "https://picsum.photos/300/300?random=20",
    price: 279000,
    sold_quantity: 321,
  },
];

let ul_product = document.querySelector(".product");

item_product = products.map(function (item) {
  return `<li>
              <img class="product_img" src="${item.thumbnail_url}" alt="">
              
               <div class="info_product">
               <p class="title_product">${item.name}</p>
              <div class="price">
               <p class="price_prodcut">${item.price}₫</p>
              <p class="quantity_product">${item.sold_quantity} Đã bán</p>
              </div>
               </div>
              
             
            </li>`;
});

ul_product.innerHTML = item_product.join("");
