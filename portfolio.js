// Nav Bar Responsive

// const menu = document.querySelector('#close')
// const NavBar = document.querySelector('.responsiveNav')

// menu.onclick = function(){
//   NavBar.classList.toggle('open')
//   const isopen = NavBar.classList.contains('open')

//   menu.classList = isopen ? 'ri-close-line' : 'ri-menu-line'

// }



const slides = document.querySelectorAll('.slide');
const navLinks = document.querySelectorAll('.slider-nav a');
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector('.slider .wrapper').style.transform = `translateX(${offset}%)`;
  navLinks.forEach((link, i) => {
    link.style.opacity = i === index ? '1' : '0.5';
  });
}

navLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Auto-slide with a slower interval
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 8000); // 8 seconds between slides


