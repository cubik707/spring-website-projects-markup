import projects from './data/projects.js';
import renderNavbarMenu from './components/renderNavbarMenu.js';
import navbarMenuItems from './data/navbarMenuItems.js';
import renderProjects from './components/renderProjects.js';
import handleBurgerMenuClick from './handlers/burgerMenu.js';
import clearSearch from './handlers/clearSearch.js';
import setupSearch from './handlers/filterProjects.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  renderNavbarMenu(navbarMenuItems);
  handleBurgerMenuClick();

  const searchInput = document.getElementById('search-input-projects');
  document
    .getElementById('clear-search')
    .addEventListener('click', () => clearSearch(searchInput));
  setupSearch(searchInput);
});
