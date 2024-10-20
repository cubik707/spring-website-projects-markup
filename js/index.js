import projects from './projects.js';
import renderNavbarMenu from './renderNavbarMenu.js';
import navbarMenuItems from './navbarMenuItems.js';
import renderProjects from './renderProjects.js';

renderProjects(projects);
renderNavbarMenu(navbarMenuItems)
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.hamburger');
  const menuWrapper = document.querySelector('.navbar-menu-wrapper');

  burger.addEventListener('click', function () {
    menuWrapper.classList.toggle('open');
    burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', menuWrapper.classList.contains('open') ? 'true' : 'false');
  });
});