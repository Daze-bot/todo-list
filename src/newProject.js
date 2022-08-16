import Folder from './imgs/folder.svg';

let projects = [];
let projectID = 0;

class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

function createProject() {
  projectID += 1;
  let newProject = new Project("Test", projectID);
  addProject(newProject);
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
}

export {
  createProject,
  projects,
};