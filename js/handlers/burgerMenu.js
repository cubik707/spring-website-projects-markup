// Function to reset 'active' and 'arrow-up' classes
function resetDropdowns() {
  const dropdowns = document.querySelectorAll('.navbar-dropdown.active');
  const titles = document.querySelectorAll('.navbar-link.arrow-up');

  // Remove 'active' and 'arrow-up' classes from all elements
  dropdowns.forEach((dropdown) => dropdown.classList.remove('active'));
  titles.forEach((title) => title.classList.remove('arrow-up'));

  // Reset overflow-y
  const menuWrapper = document.querySelector('.navbar-menu-wrapper');
  if (menuWrapper) {
    menuWrapper.style.overflowY = '';
  }
}

// Function to initialize burger menu logic
function handleBurgerMenuClick() {
  const burger = document.querySelector('.hamburger');
  const menuWrapper = document.querySelector('.navbar-menu-wrapper');

  burger.addEventListener('click', () => {
    const isOpen = menuWrapper.classList.toggle('open');
    burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (!isOpen) {
      // If the menu is closed, reset active dropdowns
      resetDropdowns();
    }
  });
}

export default handleBurgerMenuClick;
