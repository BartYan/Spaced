let hamburger = document.querySelector('.nav-hamburger');
let bar = hamburger.getElementsByTagName("span");

const overlay = () => {

    bar[0].style.transform = "translateY(12px) rotate(135deg)";
    bar[1].style.transform = "scale(0)";
    bar[2].style.transform = "translateY(-12px) rotate(-135deg)";
}

/* Open
function openNav() {
    document.getElementById("myNav").style.display = "block";
  } */
  
  /* Close 
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }*/

  hamburger.addEventListener("click", overlay);

