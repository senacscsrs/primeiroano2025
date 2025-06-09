// script.js

// Seleciona elementos importantes
const themeToggleBtn = document.getElementById('theme-toggle');
const menuToggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Função para alternar tema claro/escuro
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '🌙'; // Lua para tema claro
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️'; // Sol para tema escuro
    localStorage.setItem('theme', 'dark');
  }
}

// Função para carregar tema salvo no localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Função para abrir/fechar menu responsivo
function toggleMenu() {
  navMenu.classList.toggle('open');
  // Alterna aria-expanded para acessibilidade
  const expanded = navMenu.classList.contains('open');
  menuToggleBtn.setAttribute('aria-expanded', expanded);
}

// Fecha menu ao clicar em algum link (útil para mobile)
function closeMenuOnLinkClick() {
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    menuToggleBtn.setAttribute('aria-expanded', false);
  }
}

// Eventos
themeToggleBtn.addEventListener('click', toggleTheme);
menuToggleBtn.addEventListener('click', toggleMenu);

// Fecha menu ao clicar em qualquer link da navegação
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeMenuOnLinkClick);
});

// Inicializa tema ao carregar a página
loadTheme();
