(() => {

  const doc = document.documentElement;
  const w = window;
  let f = false;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const header = document.querySelector('.nav');
  const logo = document.querySelector('.nav_logo');
  const logoSyg = document.querySelector('.nav_logo-syg');
  const logoTxt = document.querySelector('.nav_logo-txt');
  const menuItem = document.querySelectorAll('.nav_list-item');


  const checkScroll = () => {

    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    //Do if toggleHeader is done.
    if (window.scrollY === 0 && f == true) {
      header.classList.remove('hide');
      //logo styles
      logo.classList.remove('scroll-logo');
      logoSyg.classList.remove('scroll-logoSyg');
      logoTxt.classList.remove('scroll-logoTxt');
      //menu links styles
      menuItem.forEach(el => {
        el.classList.remove("scroll-menuItem")
      });
      f = false;
    } 

    prevScroll = curScroll;
  };

  const toggleHeader = (direction, curScroll) => {
    if (direction === 2 && curScroll > 52) {

      //replace 52 with the height of your header in px

      //To find below classes in css go to _header.scss & _mediaqueries.scss (width 1200px).
      header.classList.add('hide');
      //logo styles
      logo.classList.add('scroll-logo');
      logoSyg.classList.add('scroll-logoSyg');
      logoTxt.classList.add('scroll-logoTxt');
      //menu links styles
      menuItem.forEach(el => {
        el.classList.add("scroll-menuItem")
      });
      f = true;
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      f = true;
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();