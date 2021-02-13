const date = document.getElementById('date');
const year = new Date().getUTCFullYear();
const menu = document.getElementById('menu');
const navbar = document.getElementById('nav-bar');

const mobile = window.matchMedia('(max-width: 648px)');
const tablet = window.matchMedia('(max-width: 1200px) and (min-width: 648px)');
const screen = window.matchMedia('(min-width: 1200px)');

menu.addEventListener('click', function (e) {
  navbar.classList.toggle('hide');
  if (navbar.classList.contains('hide')) {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
  console.log(navbar.classList);
  e.preventDefault();
});

function resize() {
  if (mobile.matches || screen.matches) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
  if (screen.matches) {
    navbar.style.display = 'block';
  }
}

window.onresize = resize;

date.textContent = year;
