const lArrow = document.querySelector("#lArrow");
const rArrow = document.getElementById("rArrow");
const box = document.querySelector(".box");

lArrow.addEventListener("click", function (event) {
  box.style.backgroundColor = "#FF0000";
});
rArrow.addEventListener("click", function (event) {
  box.style.backgroundColor = "#00ff00";
});
