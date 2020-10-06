/* Scrolls down = hide the navbar & logo is smaller when scrolling. 
Scrolls up = show the navbar & logo is bigger*/

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.nav').style.top = "0";
  } else {
    document.querySelector('.nav').style.top = "-100px";
    document.querySelector('.nav_logo').style.cssText = "width: 50px; padding: 5px 10px 0 0;";
    document.querySelector('.nav_logo-syg').style.cssText = "width: 50px;";
    document.querySelector('.nav_logo-txt').style.cssText = "width: 50px;";
  } if (window.scrollY==0) {
    document.querySelector('.nav_logo').style.cssText = "width: 105px; padding: 30px 30px 0 0;";
    document.querySelector('.nav_logo-syg').style.cssText = "width: 105;";
    document.querySelector('.nav_logo-txt').style.cssText = "width: 105;";
   }
  prevScrollpos = currentScrollPos;
}