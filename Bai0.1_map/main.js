// Bài 1 nhân đôi mảng;

// let arr = [1, 2, 3, 4, 5];

// function Double(oldArr) {
//   let newDouble = arr.map(function (oldArr) {
//     return oldArr * 2;
//   });
//   return newDouble;
// }

// console.log(Double(arr));

// Bài 2 cho mảng ban đầu là 2 1 4 9 15 17 6
// tạo hàm để biến hàm ban đầu thành
// [ chẵn, lẻ, chẵn, lẻ, lẻ, lẻ, chẵn]

//---------------------------------------------
// function chanLe(oldArr) {
//   let newArr = oldArr.map(function (item) {
//     if (item % 2 == 0) {
//       return "chẵn";
//     } else {
//       return "lẻ";
//     }
//   });
//   return newArr;
// }

// let arr = [2, 1, 4, 9, 15, 17, 6];
// console.log(chanLe(arr));

// Bài 3  cho arr ban đầu là [cộng, hoà, xã, hội .... , việt, nam] dùng
// tạo hàm để biến arr mới :
// CỘNG, HOÀ,...

// sau đó gộp thành chuỗi "CỘNG HOÀ XÃ HỘI ..." rồi trả về

// gộp chuỗi sử dụng .join

function inHoa(oldArr) {
  let newArr = oldArr.map(function (item) {
    return item.toUpperCase();
  });
  return newArr.join(" ");
}

let arr = ["cộng", "hoà", "xã", "hội", "chủ", "nghĩa", "việt", "nam"];
console.log(inHoa(arr));
