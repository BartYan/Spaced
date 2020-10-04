//hamburger and overlay variables
let hamburger = document.querySelector('.nav_hamburger');
let bar = hamburger.getElementsByTagName("span");
let mobileMenu = document.getElementById("mobileMenu");
let overlayLink = document.querySelectorAll('.nav_overlay-content--link');

//Hamburger overlay functions
let active = false;

const overlay = () => {

  if (active === false) {
    mobileMenu.style.display = "block";
    bar[0].style.cssText = "background-color: #fffef9; transform: translateY(12px) rotate(135deg)";
    bar[1].style.transform = "scale(0)";
    bar[2].style.cssText = "background-color: #fffef9; transform: translateY(-12px) rotate(-135deg)";
    active = true;
  } else {
    mobileMenu.style.display = "none";
    bar[0].style.cssText = "background-color: #000; transform: none";
    bar[1].style.transform = "scale(1)";
    bar[2].style.cssText = "background-color: #000; transform: none";
    active = false;
  }
};

overlayLink.forEach(item => {
  item.addEventListener('click', event => {
    mobileMenu.style.display = "none";
    bar[0].style.cssText = "background-color: #000; transform: none";
    bar[1].style.transform = "scale(1)";
    bar[2].style.cssText = "background-color: #000; transform: none";
    active = false;
  })
});

hamburger.addEventListener("click", overlay);



//Logo Spin variables
let hoverArea = document.querySelector('.nav_logo');
let logoTxt = document.querySelector('.nav_logo-txt');
let flag = true;

//Logo Spin animation on hover
const rotate = () => {
  logoTxt.classList.add("rotating");
  flag = false;
}

const rotated = () => {
  if (flag === false)
    logoTxt.classList.remove("rotating");
};

hoverArea.addEventListener('mouseover', rotate);
hoverArea.addEventListener('mouseout', rotated);




/*Try with transform and SETINTERVAL - celar SETINTERRVAL
//Logo Spin variables
let hoverArea = document.querySelector('.nav_logo');
let logoTxt = document.querySelector('.nav_logo-txt');
let flag = true;

//Logo Spin animation on hover
const rotate = () => {
  if (flag === true){
  logoTxt.style.transform = "rotate(-360deg)";
}
};

hoverArea.addEventListener('mouseover', rotate);
*/

/*//Logo Spin variables
let hoverArea = document.querySelector('.nav_logo');
let logoTxt = document.querySelector('.nav_logo-txt');
let flag = false;

//Logo Spin animation on hover
let rotate = () => {
  if (flag === false) {
    logoTxt.classList.add("rotating");
    flag = true;
  }
};

let rotated = () => flag = false;


hoverArea.addEventListener('mouseover', rotate);
hoverArea.addEventListener('mouseout', rotated);*/