const menu = document.querySelector(".js-fa-bars");

const menuLista = document.querySelector(".js-menu__lista");

function toggleMenu() {
  menuLista.classList.toggle("ativo");
}

menu.addEventListener("click", toggleMenu);

