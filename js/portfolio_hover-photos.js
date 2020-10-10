let link = document.querySelectorAll('.portfolio_list-link--item');
let photosBox = document.querySelectorAll('.portfolio_photos');

let i = 0;

//It works, but it's not universal
for (i = 0; i < link.length; i++) {
  if (i == 0) {
    link[0].addEventListener('mouseover', e => {
      photosBox[0].style.display = "block";
    });
    link[0].addEventListener('mouseout', e => {
      photosBox[0].style.display = "none";
    });
  } else if (i == 1) {
    link[1].addEventListener('mouseover', e => {
      photosBox[1].style.display = "block";
    });
    link[1].addEventListener('mouseout', e => {
      photosBox[1].style.display = "none";
    });
  } else if (i == 2) {
    link[2].addEventListener('mouseover', e => {
      photosBox[2].style.display = "block";
    });
    link[2].addEventListener('mouseout', e => {
      photosBox[2].style.display = "none";
    });
  } else if (i == 3) {
    link[3].addEventListener('mouseover', e => {
      photosBox[3].style.display = "block";
    });
    link[3].addEventListener('mouseout', e => {
      photosBox[3].style.display = "none";
    });
  } else if (i == 4) {
    link[4].addEventListener('mouseover', e => {
      photosBox[4].style.display = "block";
    });
    link[4].addEventListener('mouseout', e => {
      photosBox[4].style.display = "none";
    });
  } else if (i == 5) {
    link[5].addEventListener('mouseover', e => {
      photosBox[5].style.display = "block";
    });
    link[5].addEventListener('mouseout', e => {
      photosBox[5].style.display = "none";
    });
  } else if (i == 6) {
    link[6].addEventListener('mouseover', e => {
      photosBox[6].style.display = "block";
    });
    link[6].addEventListener('mouseout', e => {
      photosBox[6].style.display = "none";
    });
  } else if (i == 7) {
    link[7].addEventListener('mouseover', e => {
      photosBox[7].style.display = "block";
    });
    link[7].addEventListener('mouseout', e => {
      photosBox[7].style.display = "none";
    });
  } else if (i == 8) {
    link[8].addEventListener('mouseover', e => {
      photosBox[8].style.display = "block";
    });
    link[8].addEventListener('mouseout', e => {
      photosBox[8].style.display = "none";
    });
  } else if (i == 9) {
    link[9].addEventListener('mouseover', e => {
      photosBox[9].style.display = "block";
    });
    link[9].addEventListener('mouseout', e => {
      photosBox[9].style.display = "none";
    });
  } 
}

/*
for (i = 0; i < link.length; i++) {

  link[i].addEventListener('mouseover', e => {
    
      photosBox[0].style.display = "block";
 
    
  });

  link[i].addEventListener('mouseout', e => {

      photosBox[0].style.display = "none";

  });
}
*/






