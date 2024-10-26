function renderNavbarMenu(navbarMenuItems) {
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarMenuItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('navbar-list-item');

    const title = document.createElement('span');
    title.classList.add('navbar-link');
    title.textContent = item.title;

    const dropdown = document.createElement('ul');
    dropdown.classList.add('navbar-dropdown');

    title.addEventListener('click', () => {
      dropdown.classList.toggle('active');
      title.classList.toggle('arrow-up');

      // Update overflow-y for burger menu
      const navbarMenuWrapper = document.querySelector(
        '.navbar-menu-wrapper.open',
      );
      navbarMenuWrapper.style.overflowY = dropdown.classList.contains('active')
        ? 'auto'
        : '';
    });

    item.dropdown.forEach((dropdownItem) => {
      const dropdownListItem = document.createElement('li');
      if (dropdownItem.link) {
        const anchor = document.createElement('a');
        anchor.href = dropdownItem.link;
        anchor.textContent = dropdownItem.text;
        if (dropdownItem.class) {
          anchor.classList.add(dropdownItem.class);
        }
        dropdownListItem.append(anchor);
      } else {
        const div = document.createElement('div');
        div.classList.add(dropdownItem.class);
        div.textContent = dropdownItem.text;
        dropdownListItem.append(div);
      }

      if (dropdownItem.icon) {
        dropdownListItem.innerHTML += dropdownItem.icon;
      }

      dropdown.append(dropdownListItem);
    });

    listItem.append(title, dropdown);
    navbarMenu.append(listItem);
  });
}

export default renderNavbarMenu;
