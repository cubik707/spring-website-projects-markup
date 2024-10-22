import projects from '../data/projects.js';
import renderProjects from '../components/renderProjects.js';

function filterProjects(query) {
  // Filter projects by title or description
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query),
  );

  const projectsList = document.querySelector('.projects-list');
  projectsList.innerHTML = ''; // Clear the current list

  // If there are matches, render them
  if (filteredProjects.length > 0) {
    renderProjects(filteredProjects);
  } else {
    // If there are no matches, display a message
    projectsList.innerHTML = '<p>No results</p>';
  }
}

// Setup search functionality for the input element
export default function setupSearch(inputElement) {
  let timeout;
  inputElement.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const query = inputElement.value.toLowerCase();
      filterProjects(query);
    }, 300);
  });
}
