import { projects } from './projects.js';

const projectsList = document.querySelector('.projects-list');

// Function for generating HTML
function renderProjects(projects) {
    projects.forEach((project) => {
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
        projectsList.appendChild(article);
    });
}

// Calling a function to render projects
renderProjects(projects);