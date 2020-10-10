/* Scrolls down = hide the navbar & logo is smaller when scrolling. 
Scrolls up = show the navbar & logo is bigger*/

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.scrollY == 0) {
    document.querySelector('.nav').style.top = "0";
  } else {
    document.querySelector('.nav').style.top = "-100px";
    //logo styles
    document.querySelector('.nav_logo').style.cssText = "width: 50px; padding: 10px 10px 0 0;";
    document.querySelector('.nav_logo-syg').style.cssText = "width: 50px;";
    document.querySelector('.nav_logo-txt').style.cssText = "width: 50px;";
    //menu links styles
    document.querySelectorAll('.nav_list-item').forEach(element => {
      element.style.cssText = "padding: 12px 5px 20px 50px;";
    });
    document.querySelectorAll('.nav_list-item--link').forEach(element => {
      element.style.cssText = "font-size: 10px;";
    });
  } 
  
  if (window.pageYOffset == 0 & window.innerWidth >= 1200) {
    document.querySelector('.nav').style.top = "0";
    //logo styles
    document.querySelector('.nav_logo').style.cssText = "width: 105px; padding: 30px 30px 0 0;";
    document.querySelector('.nav_logo-syg').style.cssText = "width: 105;";
    document.querySelector('.nav_logo-txt').style.cssText = "width: 105;";
    //menu links styles
    document.querySelectorAll('.nav_list-item').forEach(element => {
      element.style.cssText = "padding: 25px 5px 0 50px;";
    });
    document.querySelectorAll('.nav_list-item--link').forEach(element => {
      element.style.cssText = "font-size: 12px;";
    });
   }
  prevScrollpos = currentScrollPos;
}