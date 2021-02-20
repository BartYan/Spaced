let img = document.getElementById("photoOne");
let imgTwo = document.getElementById("photoTwo");
let imgThree = document.getElementById("photoThree");

function one() {
    img.src = "img/photos/a1.jpg";
  }
function swapOne() {
    img.src = "img/photos/a2.jpg";
  }

img.addEventListener("mouseover", swapOne);
img.addEventListener("mouseout", one);

function two() {
    imgTwo.src = "img/photos/b1.jpg";
  }
function swapTwo() {
    imgTwo.src = "img/photos/b2.jpg";
  }

imgTwo.addEventListener("mouseover", swapTwo);
imgTwo.addEventListener("mouseout", two);

function three() {
    imgThree.src = "img/photos/c1.jpg";
  }
function swapThree() {
    imgThree.src = "img/photos/c2.jpg";
  }

imgThree.addEventListener("mouseover", swapThree);
imgThree.addEventListener("mouseout", three);