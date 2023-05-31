import Folder from './imgs/folder.svg';
import {showProjectContent, showDefaultContent} from './showContent.js';
import {createProjectEditForm, createNewProjectForm} from './initLoad';
import {deleteTasksInProject, changeTaskProjects} from './task';

// Use this if not signed in, otherwise use Firestore (if/else)
let projects = JSON.parse(localStorage.getItem("projects") || "[]");
let projectID = +localStorage.getItem("projectID") || 0;

class Project {
  constructor (name, id) {
    this.name = name;
    this.id = id;
  }
}

function showNewProjectForm() {
  document.body.appendChild(createNewProjectForm());
  let projectContainer = document.querySelector('.newProjectContainer');
  let projectNameInput = document.querySelector('#projectNameInput');
  projectContainer.classList.remove('hidden');
  projectNameInput.focus();
  submitProjectForm();
}

function submitProjectForm() {
  let projectSubmitBtn = document.querySelector('.submitNewProject');
  projectSubmitBtn.addEventListener('click', createProject);

  let formCloseBtn = document.querySelector('.newProjectClose');
  formCloseBtn.addEventListener('click', closeNewProjectForm);

  let projectNameInput = document.querySelector('#projectNameInput');
  projectNameInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      createProject();
    }
  });

  let projectForm = document.querySelector('.newProjectForm');
  let projectContainer = document.querySelector('.newProjectContainer');
  projectContainer.addEventListener('click', function(e) {
    if (projectForm.contains(e.target)) {
      return;
    } else {
      closeNewProjectForm();
    }
  });
}

function createProject() {
  let projectName = document.querySelector('#projectNameInput').value;

  if (projects.some(x => x.name === projectName) || projectName === "Home" || projectName === "Today" || projectName === "This Week") {
    alert("That name already exists, please choose another!");
  } else {
    if (projectName !== "") {
      projectID += 1;
      let newProject = new Project(projectName, projectID);
      addProject(newProject);
    } else {
      closeNewProjectForm();
    }
  }
}

function addProject(project) {
  projects.push(project);
  saveProjects();
  saveProjectID();
  displayProject(project.name, project.id);
  closeNewProjectForm();
  showProjectContent(project.name);
}

function displayProject(name, id) {
  let projectsList = document.querySelector('.projectsList');

  let newProject = document.createElement('li');
  newProject.classList.add('projectName');
  newProject.dataset.id = `${id}`;
  newProject.textContent = `${name}`;
  let img = document.createElement('img');
  img.setAttribute('src', `${Folder}`);
  img.setAttribute('alt', `${name}`);
  newProject.appendChild(img);

  projectsList.appendChild(newProject);

  newProject.addEventListener('click', () => showProjectContent(name));
}

function closeNewProjectForm() {
  let projectContainer = document.querySelector('.newProjectContainer');
  let resetBtn = document.querySelector('.resetNewProjectForm');
  projectContainer.classList.add('hidden');
  resetBtn.click();
  document.body.removeChild(projectContainer);
}

function loadProjects(array) {
  for (let item of array) {
    displayProject(item.name, item.id);
  }
}

function clearAndReloadProjects(array) {
  let projectsList = document.querySelector('.projectsList');
  while (projectsList.hasChildNodes()) {
    projectsList.removeChild(projectsList.lastChild);
  }
  loadProjects(array);
}

function showProjectEditForm(name) {
  document.body.appendChild(createProjectEditForm());
  let projectEditContainer = document.querySelector('.projectEditContainer');
  let projectNameEdit = document.querySelector('#projectNameEdit');
  projectNameEdit.setAttribute('value', `${name}`);
  projectEditContainer.classList.remove('hidden');
  projectNameEdit.focus();
  projectNameEdit.select();
  submitEditForm();
}

function submitEditForm() {
  let editSubmitBtn = document.querySelector('.submitProjectChange');
  editSubmitBtn.addEventListener('click', confirmChange);

  let formCloseBtn = document.querySelector('.editProjectClose');
  formCloseBtn.addEventListener('click', closeProjectEditForm);

  let deleteBtn = document.querySelector('.deleteProject');
  deleteBtn.addEventListener('click', deleteProject);

  let projectNameEdit = document.querySelector('#projectNameEdit');
  projectNameEdit.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      editSubmitBtn.click();
    }
  });

  let editForm = document.querySelector('.editProjectForm');
  let projectEditContainer = document.querySelector('.projectEditContainer');
  projectEditContainer.addEventListener('click', function(e) {
    if (editForm.contains(e.target)) {
      return;
    } else {
      closeProjectEditForm();
    }
  });
}

function confirmChange() {
  let currentName = document.querySelector('.currentProjectName').textContent;
  let projectNameEdit = document.querySelector('#projectNameEdit');
  let newProjectName = document.querySelector('#projectNameEdit').value;

  if (currentName === newProjectName || newProjectName === "") {
    closeProjectEditForm();
  } else if (projects.some(x => x.name === newProjectName) || newProjectName ===    "Home" || newProjectName === "Today" || newProjectName === "This Week") {
    alert("That project name already exists, please choose another!");
    projectNameEdit.focus();
    projectNameEdit.select();
  } else {
    let index = projects.findIndex(x => x.name === currentName);
    projects[index].name = newProjectName;
    saveProjects();
    closeProjectEditForm();
    changeTaskProjects(currentName, newProjectName);
    clearAndReloadProjects(projects);
    showProjectContent(newProjectName);
  }
}

function closeProjectEditForm() {
  let projectEditContainer = document.querySelector('.projectEditContainer');
  let resetBtn = document.querySelector('.resetEditProjectForm');
  projectEditContainer.classList.add('hidden');
  resetBtn.click();
  document.body.removeChild(projectEditContainer);
}

function deleteProject() {
  if (confirm("Are you sure you want to delete this project? This will delete all associated tasks as well.")) {
    let currentName = document.querySelector('.currentProjectName').textContent;
    let index = projects.findIndex(x => x.name === currentName);
    projects.splice(index, 1);
    saveProjects();
    closeProjectEditForm();
    deleteTasksInProject(currentName);
    clearAndReloadProjects(projects);
    showDefaultContent("Home");
  } else {
    return;
  }
}


// Use this if not signed in, otherwise use Firestore (if/else)
function saveProjects() {
  window.localStorage.setItem("projects", JSON.stringify(projects));
}

// Use this if not signed in, otherwise use Firestore (if/else)
function saveProjectID() {
  window.localStorage.setItem("projectID", projectID);
}

export {
  projects,
  showNewProjectForm,
  loadProjects,
  showProjectEditForm,
};