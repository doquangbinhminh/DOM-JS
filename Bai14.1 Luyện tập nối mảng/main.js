//Bài 1======================= Nối 2 mảng============================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let arr = arr1.concat(arr2);
// console.log(arr);

// Bài 2=====================Nối 2 mảng ko trùng=========================

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// newArr = arr2.filter(function (item) {
//   return !arr1.includes(item);
// });

// arr = arr1.concat(newArr);
// console.log(arr);

// Bài 3 =================================Gộp danh sách user============================

// const users1 = [
//   {
//     id: 1,
//     name: "An",
//   },
// ];

// const users2 = [
//   {
//     id: 2,
//     name: "Bình",
//   },
// ];

// newUser = users1.concat(users2);
// console.log(newUser);

//Bài 4  =============================Gộp Object======================================

// const obj1 = { name: "An" };
// const obj2 = { age: 1 };
// const obj = Object.assign({}, obj1, obj2);
// console.log(obj);

// Bài 5 ghi đè dữ liệu
// const oldUser = {
//   name: "An",
//   age: 18,
// };

// const newUser = {
//   age: 20,
// };

// const result = {
//   ...oldUser,
//   ...newUser,
// };
// console.log(result);

// Bài 6 ==============================Gộp Object lồng nhau=====================
// const obj1 = {
//   user: {
//     name: "An",
//   },
// };

// const obj2 = {
//   user: {
//     age: 20,
//   },
// };

// const result = {
//   user: {
//     ...obj1.user,
//     ...obj2.user,
//   },
// };

// console.log(result);

// Bài 7 =======================Thêm Obj vào arr=============

// const users = [{ id: 1, name: "An" }];

// users.push({ id: 2, name: "Bình" });

// console.log(users);

// Bài 8 Update Obj trong arr
// const users = [
//   { id: 1, name: "An" },
//   { id: 2, name: "Bình" },
// ];

// newUser = users.map(function (item) {
//   if (item.id == 2) {
//     return { ...item, name: "Bình đẹp trai" };
//   }

//   return item;
// });

// console.log(newUser);

// Bài 9 Xóa Obj khỏi Arr xóa id 1
// const users = [
//   { id: 1, name: "An" },
//   { id: 2, name: "Bình" },
// ];

// let newUser = users.filter(function (item) {
//   return item.id !== 1;
// });

// console.log(newUser);

// Bài 10 Obj->JSON
// const oldUser = {
//   name: "An",
//   age: 18,
// };
// const resutl = JSON.stringify(oldUser);
// console.log(resutl);

// Bài 11 JSON ->Obj
// const json = '{"name":"An","age":20}';

// let result = JSON.parse(json);

// console.log(result);

// Bài 12 JSON arr
// const json = `[
//     {
//         "id":1,
//         "name":"iPhone"
//     },
//     {
//         "id":2,
//         "name":"Samsung"
//     }
// ]`;

// let result = JSON.parse(json);
// console.log(result);

// Bài 13 — Tìm user theo id
// const users = [
//   { id: 1, name: "An" },
//   { id: 2, name: "Bình" },
// ];
// let result = users.find(function (item) {
//   return item.id === 2;
// });

// console.log(result);

// Bài 14 — Kiểm tra có user không
// const users = [
//   { id: 1, name: "An" },
//   { id: 2, name: "Bình" },
// ];

// let check = users.some(function (item) {
//   return item.name === "An";
// });

// console.log(check);
