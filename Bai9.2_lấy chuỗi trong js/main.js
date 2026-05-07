// const users = [
//   { id: 1, name: "An", age: 18, active: true },
//   { id: 2, name: "Bình", age: 22, active: false },
//   { id: 3, name: "Cường", age: 17, active: true },
//   { id: 4, name: "Dũng", age: 25, active: false }
// ];

// map: trả về mảng có tên viết hoa ["AN", "BÌNH", "CƯỜNG", "DŨNG"]
// reduce: tính tổng sô toooir
// some: kiểm tra có ai <18 tuổi khong

const users = [
  { id: 1, name: "An", age: 18, active: true },
  { id: 2, name: "Bình", age: 22, active: false },
  { id: 3, name: "Cường", age: 17, active: true },
  { id: 4, name: "Dũng", age: 25, active: false },
];

// Lấy tên trong object dùng map
let name = users.map(function (user) {
  return user.name.toUpperCase();
});
console.log(name);

// Tính trong số tuổi trong ob

let sumAge = users.reduce(function (acc, item) {
  return (acc += item.age);
}, 0);

console.log(sumAge);

// kiểm tra xem ai lớn hơn 18 tuổi không

let checkAge = users.some(function (item) {
  return item.age > 18;
});
console.log(checkAge);
