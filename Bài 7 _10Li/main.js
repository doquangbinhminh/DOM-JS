let ul = document.querySelector("#list");
ul.addEventListener("click", function (e) {
  let li = e.target.closest("li");
  if (li) {
    li.remove();
  }
});
