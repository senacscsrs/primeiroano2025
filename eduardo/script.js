
const themeToggleBtn = document.getElementById('theme-toggle');
const menuToggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');


function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}


function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}


function toggleMenu() {
  navMenu.classList.toggle('open');

  const expanded = navMenu.classList.contains('open');
  menuToggleBtn.setAttribute('aria-expanded', expanded);
}


function closeMenuOnLinkClick() {
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    menuToggleBtn.setAttribute('aria-expanded', false);
  }
}


themeToggleBtn.addEventListener('click', toggleTheme);
menuToggleBtn.addEventListener('click', toggleMenu);


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenuOnLinkClick);
});


loadTheme();
