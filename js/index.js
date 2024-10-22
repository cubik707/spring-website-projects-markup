import projects from './data/projects.js';
import renderNavbarMenu from './components/renderNavbarMenu.js';
import navbarMenuItems from './data/navbarMenuItems.js';
import renderProjects from './components/renderProjects.js';
import handleBurgerMenuClick from './handlers/burgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  renderNavbarMenu(navbarMenuItems);
  handleBurgerMenuClick();
});
