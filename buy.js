"use stripte";

let number = 0;

document.querySelector(".money2").textContent = 0;

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".money2").textContent = number;
  number++;
});

document.querySelector(".btn2").addEventListener("click", function () {
  if (number > 100) {
    number -= 100;
    alert("premium account purchase was successfully complated✅");
  } else {
    alert("your coin`s not enough❌");
  }
});

document.querySelector(".btn3").addEventListener("click", function () {
  if (number > 50) {
    number -= 50;
    alert("golden account purchase was successfully complated✅");
  } else {
    alert("your coin`s not enough❌");
  }
});
