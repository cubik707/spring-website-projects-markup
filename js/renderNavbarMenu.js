function renderNavbarMenu(navbarMenuItems) {
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarMenuItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('navbar-list-item');

    const title = document.createElement('span');
    title.classList.add('navbar-link');
    title.textContent = item.title;
    listItem.append(title);

    const dropdown = document.createElement('ul');
    dropdown.classList.add('navbar-dropdown');

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

    listItem.append(dropdown);
    navbarMenu.append(listItem);
  });
}

export default renderNavbarMenu;
