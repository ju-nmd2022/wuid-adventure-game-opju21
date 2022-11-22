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
const FavNr = document.getElementById("FavNr");
FavNr.style.visibility = "Hidden";

woods.addEventListener("click", function (event) {
  box.style.backgroundImage = "url('example.jpg')";

  key.style.visibility = "visible";

  key.style.backgroundImage = "url('waterexample.jpg')";

  man.style.visibility = "hidden";
  shedd.style.visibility = "hidden";
  ladder.style.visibility = "hidden";
  FavNr.style.visibility = "Hidden";
});
main.addEventListener("click", function (event) {
  box.style.backgroundImage = "url('mainexample.jpg')";

  man.style.visibility = "visible";
  shedd.style.visibility = "visible";

  man.style.backgroundImage = "url('example.jpg')";
  shedd.style.backgroundImage = "url('example.jpg')";

  key.style.visibility = "hidden";
  ladder.style.visibility = "hidden";
  FavNr.style.visibility = "Hidden";
});
water.addEventListener("click", function (event) {
  box.style.backgroundImage = "url('waterexample.jpg')";

  ladder.style.visibility = "visible";

  ladder.style.backgroundImage = "url('mainexample.jpg')";

  shedd.style.visibility = "hidden";
  man.style.visibility = "hidden";
  key.style.visibility = "hidden";
  FavNr.style.visibility = "Hidden";
});

function help() {
  if (document.querySelector(".item").innerHTML == "Lock") {
    document.querySelector(".textbox").innerHTML =
      "Thank you, let me guess your favorit number is " + getRandomInt();
  } else if (document.querySelector(".item").innerHTML == "Ladder") {
    document.querySelector(".textbox").innerHTML = "... that dont help";
  } else {
    document.querySelector(".textbox").innerHTML =
      "Help me get my shovel in the shedd";
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min) + min);
}

function LadderQuest() {
  document.querySelector(".textbox").innerHTML = "You picked upp the ladder!";

  ladder.remove();

  document.querySelector(".item").innerHTML = "Ladder";
}

function GetKey() {
  if (document.querySelector(".item").innerHTML == "Ladder") {
    document.querySelector(".textbox").innerHTML = "You got the key!";
    document.querySelector(".item").innerHTML = "Key";
    key.remove();
  } else {
    document.querySelector(".textbox").innerHTML = "Its too high up";
  }
}

function OpenShedd() {
  if (document.querySelector(".item").innerHTML == "Key") {
    document.querySelector(".textbox").innerHTML =
      "Its open! Tell them that its open!";
    document.querySelector(".item").innerHTML = "Lock";
  } else if (document.querySelector(".item").innerHTML == "Lock") {
    document.querySelector(".textbox").innerHTML =
      "Flipp the shovel and see if you completed the game";
    box.style.backgroundImage = "url('example.jpg')";
    FavNr.style.visibility = "visible";
    shedd.style.visibility = "hidden";
    man.style.visibility = "hidden";
    key.style.visibility = "hidden";
    ladder.style.visibility = "hidden";
  } else {
    document.querySelector(".textbox").innerHTML = "Cant get in without a key";
  }
}

console.log();
