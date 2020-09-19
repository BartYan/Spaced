let hamburger = document.querySelector('.nav_hamburger');
let bar = hamburger.getElementsByTagName("span");
let mobileMenu = document.getElementById("mobileMenu");

let active = false;

const overlay = () => {

  if (active === false) {
    mobileMenu.style.display = "block";
    bar[0].style.transform = "translateY(12px) rotate(135deg)";
    bar[1].style.transform = "scale(0)";
    bar[2].style.transform = "translateY(-12px) rotate(-135deg)";
    active = true;
  } else {
    mobileMenu.style.display = "none";
    bar[0].style.transform = "none";
    bar[1].style.transform = "scale(1)";
    bar[2].style.transform = "none";
    active = false;
  }
}

hamburger.addEventListener("click", overlay);