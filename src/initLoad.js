import {addThemeButtons} from './theme';
import Logo from './imgs/logo.svg';
import Add from './imgs/add.svg';
import Home from './imgs/home.svg';
import Today from './imgs/today.svg';
import Week from './imgs/week.svg';
import Close from './imgs/close.svg';

function createHeader() {
  let header = document.createElement('header');

  let headerContent = document.createElement('div');
  headerContent.classList.add('headerContent');

  let logo = document.createElement('div');
  logo.classList.add('logo')

  let logoImg = document.createElement('img');
  logoImg.setAttribute('src', `${Logo}`);
  logoImg.setAttribute('alt', "Logo");

  let logoText = document.createElement('h1');
  logoText.textContent = "To-do List";

  logo.appendChild(logoImg);
  logo.appendChild(logoText);

  headerContent.appendChild(logo);
  headerContent.appendChild(addThemeButtons());

  header.appendChild(headerContent);

  return header;
}

function createSidebar() {
  let sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  let defaultTabs = document.createElement('ul');
  defaultTabs.classList.add('default');

  let homeLi = document.createElement('li');
  homeLi.textContent = "Home";
  let homeImg = document.createElement('img');
  homeImg.setAttribute('src', `${Home}`);
  homeImg.setAttribute('alt', "Home");
  homeLi.appendChild(homeImg);

  let todayLi = document.createElement('li');
  todayLi.textContent = "Today";
  let todayImg = document.createElement('img');
  todayImg.setAttribute('src', `${Today}`);
  todayImg.setAttribute('alt', "Today");
  todayLi.appendChild(todayImg);

  let weekLi = document.createElement('li');
  weekLi.textContent = "This Week";
  let weekImg = document.createElement('img');
  weekImg.setAttribute('src', `${Week}`);
  weekImg.setAttribute('alt', "Week");
  weekLi.appendChild(weekImg);

  defaultTabs.appendChild(homeLi);
  defaultTabs.appendChild(todayLi);
  defaultTabs.appendChild(weekLi);
  
  let projects = document.createElement('div');
  projects.setAttribute('id', 'projects');

  let project = document.createTextNode('Projects');
  let add = document.createElement('img');
  add.setAttribute('src', `${Add}`);
  add.setAttribute('alt', "Add Project");
  add.classList.add('newProject');

  projects.appendChild(project);
  projects.appendChild(add);

  let projectsTabs = document.createElement('ul');
  projectsTabs.classList.add('projectsList');

  sidebar.appendChild(defaultTabs);
  sidebar.appendChild(projects);
  sidebar.appendChild(projectsTabs);

  return sidebar;
}

function createContent() {
  let content = document.createElement('div');
  content.classList.add('content');

  return content;
}

function createFooter() {
  let footer = document.createElement('footer');

  let a = document.createElement('a');
  a.textContent = "Created by Code4Daze";
  a.setAttribute('href', 'https://github.com/Daze-bot');
  a.setAttribute('target', '_blank');

  footer.appendChild(a);

  return footer;
}

function createNewProjectForm() {
  let newProjectDiv = document.createElement('div');
  newProjectDiv.classList.add('newProjectContainer', 'hidden');

  let newProjectForm = document.createElement('form');
  newProjectForm.classList.add('newProjectForm');
  newProjectForm.setAttribute('action', "");
  newProjectForm.setAttribute('autocomplete', 'off');

  let closeImg = document.createElement('img');
  closeImg.classList.add('closeBtn', 'formClose');
  closeImg.setAttribute('src', `${Close}`);
  closeImg.setAttribute('alt', 'Close');

  let formHeader = document.createElement('p');
  formHeader.textContent = "New Project";

  let inputDiv = document.createElement('div');
  inputDiv.classList.add('input', 'entry');

  let formLabel = document.createElement('label');
  formLabel.setAttribute('for', 'projectNameInput');
  formLabel.textContent = "Project Name:";

  let formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('name', 'projectNameInput');
  formInput.setAttribute('id', 'projectNameInput');
  formInput.setAttribute('required', "");

  let submitBtn = document.createElement('button');
  submitBtn.classList.add('submitNewProject');
  submitBtn.textContent = "Add Project";
  submitBtn.setAttribute('type', 'button');

  let resetBtn = document.createElement('button');
  resetBtn.classList.add('resetForm', 'hidden');
  resetBtn.setAttribute('type', 'reset');

  newProjectDiv.appendChild(newProjectForm);

  newProjectForm.appendChild(closeImg);
  newProjectForm.appendChild(formHeader);
  newProjectForm.appendChild(inputDiv);
  newProjectForm.appendChild(submitBtn);
  newProjectForm.appendChild(resetBtn);

  inputDiv.appendChild(formLabel);
  inputDiv.appendChild(formInput);

  return newProjectDiv;
}

export {
  createHeader,
  createSidebar,
  createContent,
  createFooter,
  createNewProjectForm,
}