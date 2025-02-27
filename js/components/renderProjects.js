function renderProjects(projectsData) {
  const projectsList = document.querySelector('.projects-list');
  projectsData.forEach((project) => {
    const article = document.createElement('article');
    article.innerHTML = `
      <a href="${project.link}">
        <div class="project-item">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-info">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
          </div>
        </div>
      </a>
    `;
    projectsList.append(article);
  });
}

export default renderProjects;
