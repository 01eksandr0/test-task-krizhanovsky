// open mobail menu
const mobailMenu = {
  menu: document.querySelector('.menu'),
  btn: document.querySelector('.menu-btn'),
  bntClose: document.querySelector('.menu-btn-close'),
  openMenu: () => mobailMenu.menu.classList.toggle('is-open'),
  closeMenu: () => {
    mobailMenu.menu.classList.toggle('is-open');
  },
};
mobailMenu.btn.addEventListener('click', mobailMenu.openMenu);
mobailMenu.bntClose.addEventListener('click', mobailMenu.closeMenu);
//
document.querySelector('.btn-cont').textContent = '<';
