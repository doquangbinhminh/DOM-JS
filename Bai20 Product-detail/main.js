let productDetail = document.querySelector(".product-detail");

function renderShopee(data) {
  productDetail.innerHTML = `<div class="left">
        <img
          src="${data.images[0]}"
          alt=""
          class="main-img"
        />

        <div class="thumb-list">
          <img src="https://via.placeholder.com/80" alt="" />
          <img src="https://via.placeholder.com/80" alt="" />
          <img src="https://via.placeholder.com/80" alt="" />
        </div>
      </div>

      <div class="right">
        <h1 class="title">${data.title}</h1>

        <div class="rating">
          <span>4.7 ⭐⭐⭐⭐⭐</span>
          <span>4,1k Đánh Giá</span>
        </div>

        <div class="price-box">
          <span class="price">${data.price}.000đ</span>
        </div>

        <div class="info-row">
          <span>Vận Chuyển</span>
          <span>Không hỗ trợ</span>
        </div>

        <div class="info-row">
          <span>Trả hàng miễn phí 15 ngày</span>
        </div>

        <div class="quantity-box">
          <span>Số lượng</span>

          <button>-</button>
          <input type="number" value="1" />
          <button>+</button>
        </div>

        <div class="action">
          <button class="add-cart">Thêm Vào Giỏ Hàng</button>

          <button class="buy-now">Mua Ngay</button>
        </div>
      </div>`;
}

fetch("https://api.escuelajs.co/api/v1/products/18")
  .then(function (reponse) {
    return reponse.json();
  })
  .then(function (data) {
    console.log(data);
    renderShopee(data);
  });
