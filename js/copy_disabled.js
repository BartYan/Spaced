
let images = document.querySelectorAll('img');

images.forEach((el) => {
    el.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        alert('Podoba Ci się? Napisz do nas na hello@spaced.pl :)');
        return false;
    }, false);
  });