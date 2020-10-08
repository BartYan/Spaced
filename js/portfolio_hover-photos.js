let link = document.querySelectorAll('.portfolio_list-link--item');
let photosBox = document.querySelectorAll('.portfolio_photos');


var i = 0;

for (i = 0; i < link.length; i++) {

  link[i].addEventListener('mouseover',  e => {
    photosBox[0].style.visibility = "visible";
    photosBox[0].style.opacity = "1";
    photosBox[0].style.zIndex = "-100";
  });

  link[i].addEventListener('mouseout', e => {
    photosBox[0].style.visibility = "hidden";
    photosBox[0].style.opacity = "0";
    photosBox[0].style.zIndex = "-100";
  });

}

/*
const show = () => {
    photosBox[0].style.visibility = "visible";
    photosBox[0].style.opacity = "1";
    photosBox[0].style.zIndex = "-100";
}
const hide = () => {
  photosBox[0].style.visibility = "hidden";
  photosBox[0].style.opacity = "0";
  photosBox[0].style.zIndex = "-100";
}

link[0].addEventListener('mouseover', show)
link[0].addEventListener('mouseout', hide);



/*
  link.forEach(item => {
    item.addEventListener('mouseOver', event => {
        photosBox[0].style.opacity = "1";
    })
  });
  */