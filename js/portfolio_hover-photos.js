let link = document.querySelectorAll('.portfolio_list-link--item');
let photosBox = document.querySelectorAll('.portfolio_photos');

const show = () => {
    photosBox[0].style.opacity = "1";
}
const hide = () => {
    photosBox[0].style.opacity = "0";

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