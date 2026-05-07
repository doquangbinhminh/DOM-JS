let result = document.querySelector(".result");
const users = [
  { id: 1, name: "An", active: false },
  { id: 2, name: "Bình", active: false },
  { id: 3, name: "Cường", active: false },
];

let gt = users.map(function (item) {
  return `<button onclick="showID(${item.id})">${item.name}</button>`;
});

result.innerHTML = gt.join("");

function showID(id) {
  users.forEach(function (item) {
    if (item.id === id) {
      console.log(item.id);
      console.log(item.name);
    }
  });
}
