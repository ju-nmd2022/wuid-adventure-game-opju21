const woods = document.querySelector(".woods");
const main = document.querySelector(".main");
const water = document.querySelector(".water");
const box = document.querySelector(".box");
const item = document.getElementsByClassName("item");
const textbox = document.querySelector(".textbox");
const man = document.getElementById("man");
const key = document.getElementById("key");
const ladder = document.getElementById("ladder");
const shedd = document.getElementById("shedd");

woods.addEventListener("click", function (event) {
  box.style.backgroundImage = "url('example.jpg')";
  localStorage.backgroundImage = "url('example.jpg')";
  ladder.style.backgroundImage = "none";
  man.style.backgroundImage = "none";
  shedd.style.backgroundImage = "none";

  key.style.backgroundImage = "url('waterexample.jpg')";
});
main.addEventListener("click", function (event) {
  box.style.backgroundImage = "url('mainexample.jpg')";
  localStorage.backgroundImage = "url('mainexample.jpg')";
  ladder.style.backgroundImage = "none";
  man.style.backgroundImage = "url('example.jpg')";
  shedd.style.backgroundImage = "url('example.jpg')";
  key.style.backgroundImage = "none";
});
water.addEventListener("click", function (event) {
  box.style.backgroundImage = "url('waterexample.jpg')";
  localStorage.backgroundImage = "url('waterexample.jpg')";
  ladder.style.backgroundImage = "url('mainexample.jpg')";
  man.style.backgroundImage = "none";
  shedd.style.backgroundImage = "none";
  key.style.backgroundImage = "none";
});

console.log();
