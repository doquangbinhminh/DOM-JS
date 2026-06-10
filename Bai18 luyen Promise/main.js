// Bai1 tạo 1 promise trả về "Hello Promise" sau 2 giây

// let promise = new Promise(function (resolve) {
//   resolve();
// });

// promise
//   .then(function () {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve("Hello Promise");
//       }, 2000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// Bai2 Viết hàm checkNumber(n)
// nếu n>10 resolve "Big number"
// ngược lại ->reject "Small number"

// function checkNumber(n) {
//   return new Promise(function (resolve, reject) {
//     if (n > 10) {
//       resolve("Big number");
//     } else {
//       reject("Small number");
//     }
//   });
// }
// checkNumber(5)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Bài 3 tạo Promise
// bước 1 trả về số 5 sau 1s
// bước 2 nhân đôi
// bước 3 cộng 10

// let promise = new Promise(function (resolve) {
//   resolve();
// });

// promise
//   .then(function () {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve(5);
//       }, 1000);
//     });
//   })

//   .then(function (data) {
//     console.log(data);
//     return data * 2;
//   })

//   .then(function (data) {
//     console.log(data);
//     return data + 10;
//   })

//   .then(function (data) {
//     console.log(data);
//   });

// Bài 4 .catch() xử lý lỗi
// viết Promise chia số
// divide(a,b)
// nếu b=0 ->reject "Cannot divide by zero"

// function devide(a, b) {
//   return new Promise(function (resolve, reject) {
//     if (b === 0) {
//       reject("Cannot divide by zero ");
//     }
//   });
// }

// devide(2, 0).catch(function (err) {
//   console.log(err);
// });

// Bai 5 promise.all
// Tạo 3 promise:
// A:1s -> "A done"
// B:2s -> "B done"
// C:3s -> "C done"

let promise1 = new Promise(function (resolve1) {
  setTimeout(function () {
    resolve1("A done");
  }, 1000);
});

let promise2 = new Promise(function (resolve2) {
  setTimeout(function () {
    resolve2("B done");
  }, 2000);
});

let promise3 = new Promise(function (resolve3) {
  setTimeout(function () {
    resolve3("C done");
  }, 3000);
});

// Promise.all([promise1, promise2, promise3]).then(function (result) {
//   let [a, b, c] = result;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// });

Promise.race([promise1, promise2, promise3]).then(function (data) {
  console.log(data);
});
