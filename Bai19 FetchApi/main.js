let listUser = document.querySelector(".list_user");

let btnUsers = document.querySelector(".users_btn");
let btnComments = document.querySelector(".comments_btn");
let btnPosts = document.querySelector(".posts_btn");

let postApiUser = "https://jsonplaceholder.typicode.com/users";
let postApiComment = "https://jsonplaceholder.typicode.com/comments";
let postApiPosts = "http://jsonplaceholder.typicode.com/posts";

btnUsers.addEventListener("click", function () {
  fetch(postApiUser)
    .then(function (response) {
      return response.json();
    })

    .then(function (post) {
      let renderPost = post.map(function (item) {
        return ` 
        <div class="product">
        <p>${item.name}</p>
    <p>Email:${item.email}</p>
    <p>Address: ${item.address.street},
      ${item.address.suite},
      ${item.address.city},
      ${item.address.zipcode}
    </p>
    <p>Phone: ${item.phone}</p>
   
        </div>`;
      });

      listUser.innerHTML = renderPost.join("");
    });
});

btnComments.addEventListener("click", function () {
  fetch(postApiComment)
    .then(function (response) {
      return response.json();
    })

    .then(function (post) {
      let renderPost = post.map(function (item) {
        return ` 
        <div class="product">
        <p>${item.name}</p>
    <p>Email:${item.email}</p>
    <p>Body: ${item.body}</p>
        </div>
    
    `;
      });

      listUser.innerHTML = renderPost.join("");
    });
});

btnPosts.addEventListener("click", function () {
  fetch(postApiPosts)
    .then(function (response) {
      return response.json();
    })

    .then(function (post) {
      let renderPost = post.map(function (item) {
        return ` <div class="product">

        <p>Title:${item.title}</p>
    <p>Body: ${item.body}</p>
        </div>`;
      });

      listUser.innerHTML = renderPost.join("");
    });
});
