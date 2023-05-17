const nav = document.getElementById('navigation');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
