import Folder from './imgs/folder.svg';

let projects = [];
let projectID = 0;

class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

function showNewProjectForm() {
  let projectContainer = document.querySelector('.newProjectContainer');
  let projectNameInput = document.querySelector('#projectNameInput');
  projectContainer.classList.remove('hidden');
  projectNameInput.focus();
  submitProjectForm();
}

function submitProjectForm() {
  let projectSubmitBtn = document.querySelector('.submitNewProject');
  projectSubmitBtn.addEventListener('click', createProject);

  let formCloseBtn = document.querySelector('.formClose');
  formCloseBtn.addEventListener('click', closeProjectForm);

  let projectNameInput = document.querySelector('#projectNameInput');
  projectNameInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      createProject();
    }
  })

  let projectForm = document.querySelector('.newProjectForm');
  let projectContainer = document.querySelector('.newProjectContainer');
  projectContainer.addEventListener('click', function(e) {
    if (projectForm.contains(e.target)) {
      return;
    } else {
      closeProjectForm();
    }
  });
}

function createProject() {
  let projectName = document.querySelector('#projectNameInput').value;

  if (projectName !== "") {
    projectID += 1;
    let newProject = new Project(projectName, projectID);
    addProject(newProject);
  } else {
    closeProjectForm();
  }
}

function addProject(project) {
  projects.push(project);
  displayProject(project.name, project.id);
  console.log(projects);
}

function displayProject(name, id) {
  let projectsList = document.querySelector('.projectsList');

  let newProject = document.createElement('li');
  newProject.dataset.id = `${id}`;
  newProject.textContent = `${name}`;
  let img = document.createElement('img');
  img.setAttribute('src', `${Folder}`);
  img.setAttribute('alt', `${name}`);
  newProject.appendChild(img);

  projectsList.appendChild(newProject);

  closeProjectForm();
}

function closeProjectForm() {
  let projectContainer = document.querySelector('.newProjectContainer');
  let resetBtn = document.querySelector('.resetForm');
  projectContainer.classList.add('hidden');
  resetBtn.click();
}

export {
  projects,
  showNewProjectForm,
};