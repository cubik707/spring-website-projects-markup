import projects from './projects.js';
import renderNavbarMenu from './renderNavbarMenu.js';
import navbarMenuItems from './navbarMenuItems.js';
import renderProjects from './renderProjects.js';
import handleBurgerMenuClick from './burgerMenu.js';

document.addEventListener('DOMContentLoaded', function () {
  renderProjects(projects);
  renderNavbarMenu(navbarMenuItems);
  handleBurgerMenuClick();
});