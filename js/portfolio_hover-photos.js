let link = document.querySelectorAll('.portfolio_list-link--item');
let photos = document.querySelectorAll('.portfolio_photos');

link.forEach((el, index) => {
  photos[index].style.display = "none"
  el.addEventListener('mouseover', function () {
    photos[index].style.display = "block";
  })
  el.addEventListener('mouseout', function () {
    photos[index].style.display = "none";
  })
});

// example 2
// for (let i = 0; i < link.length; i++) {
//   link[i].addEventListener("mouseover", function() {
//     photos[i].style.display = "block";
//   });
//   link[i].addEventListener('mouseout',function() {
//     photos[i].style.display = "none";
//   });
// }

// example 3
// for (i = 0; i < link.length; i++) {
//   if (i == 0) {
//     link[0].addEventListener('mouseover', e => {
//       photosBox[0].style.display = "block";
//     });
//     link[0].addEventListener('mouseout', e => {
//       photosBox[0].style.display = "none";
//     });
//   } else if (i == 1) {
//     link[1].addEventListener('mouseover', e => {
//       photosBox[1].style.display = "block";
//     });
//     link[1].addEventListener('mouseout', e => {
//       photosBox[1].style.display = "none";
//     });
//   }
// }





