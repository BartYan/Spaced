
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.querySelector('.nav');
  //var logo = document.querySelector('.nav_logo');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();















/*let prevScrollpos = window.pageYOffset;

const menu = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
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
  }/*
  if (currentScrollPos == 0 && window.innerWidth >= 1200) {
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
  prevScrollpos = currentScrollPos;

  
}

window.addEventListener("scroll", menu);


/*
function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
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
    } else {
      document.querySelector('.nav').style.top = "0";
    }
}
window.addEventListener("scroll", bringmenu);
/*
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
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

  if (window.scrollY == 0) { 
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

/* Scrolls down = hide the navbar & logo is smaller when scrolling. 
Scrolls up = show the navbar & logo is bigger*/
/*
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if ((prevScrollpos > currentScrollPos) || window.scrollY == 0) {
    document.querySelector('.nav').style.top = "0";
  } else if (window.pageYOffset == 0 && window.innerWidth >= 1200) {
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
   else {
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
  prevScrollpos = currentScrollPos;
}*/