// Cách dùng map, foreach,filter,reduce,some

const numbers = [1, 2, 3, 4, 5, 6];

//map nhân đôi giá trị trong mảng
let double = numbers.map(function (item) {
  return item * 2;
});
console.log(double);

// filter lấy ra số chẵn trong mảng
let result = numbers.filter(function (item) {
  return item % 2 == 0;
});

console.log(result);

// reduce:tính tổng các số
let sum = numbers.reduce(function (acc, item) {
  return (acc += item);
});

console.log(sum);

// some kiểm tra số nào lớn hơn 5 ko trả true false
let check = numbers.some(function (item) {
  return item > 5;
});
console.log(check);
