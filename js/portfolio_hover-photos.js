let link = document.querySelectorAll('.portfolio_list-link--item');
let photosBox = document.querySelectorAll('.portfolio_photos');


for (i = 0; i < link.length; i++) {

  link[i].addEventListener('mouseover', e => {
    
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
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
      newarray.push(array[i][j]);
  }
}*/

/*

function check(a){
  for(var i = 0; i < link.length; i++){
     if(link[i] === a) return true;
  }return false;}

  /*
for(var i=0; i < link.length; i++) {
  for(var j=0; j < photosBox.length; j++) {
      if(link[i] === photosBox[j]) {
        photosBox[j].style.visibility = "visible";
        photosBox[j].style.opacity = "1";
        photosBox[j].style.zIndex = "-100";
       }
  }
};
/*
for (i = 0; i < link.length; i++) {

  link[i].addEventListener('mouseover', e => {
     
      photosBox[j].style.visibility = "visible";
      photosBox[j].style.opacity = "1";
      photosBox[j].style.zIndex = "-100";
    
  
  });

  link[i].addEventListener('mouseout', e => {
    
      photosBox[j].style.visibility = "hidden";
      photosBox[j].style.opacity = "0";
      photosBox[j].style.zIndex = "-100";
    
  });

}

/*
for (i = 0; i < link.length; i++) {

  link[i].addEventListener('mouseover', e => {
    for (var j = 0; j < link[i].length; j++){
     
      photosBox[j].style.visibility = "visible";
      photosBox[j].style.opacity = "1";
      photosBox[j].style.zIndex = "-100";
    }
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