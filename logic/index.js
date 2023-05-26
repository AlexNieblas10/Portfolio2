const darkMode = document.querySelector('html')
const menuButton = document.getElementById('menu-mobile')
const menu = document.getElementById('menu')
const moon = document.getElementById('moon')
const homes = document.getElementsByClassName('inicio')
const menuChildrens = menu.children

function toggleDarkMode() {
  darkMode.classList.toggle('dark')
}

function toggleMenu() {
  for (const children of menuChildrens) {
    children.classList.toggle('-translate-x-96')
  }
}

function removeMenu() {
  for (const children of menuChildrens) {
    children.classList.add('-translate-x-96')
  }
}
for (const home of homes) {
  home.addEventListener('click', removeMenu)
}

moon.addEventListener('click', toggleDarkMode)
menuButton.addEventListener('click', toggleMenu)



