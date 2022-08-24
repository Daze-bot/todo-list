import {addThemeButtons} from './theme';
import Logo from './imgs/logo.svg';
import Add from './imgs/add.svg';
import Home from './imgs/home.svg';
import Today from './imgs/today.svg';
import Week from './imgs/week.svg';
import Close from './imgs/close.svg';
import {showNewProjectForm} from './project';

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
  homeLi.classList.add('defaultLi');
  let homeImg = document.createElement('img');
  homeImg.setAttribute('src', `${Home}`);
  homeImg.setAttribute('alt', "Home");
  homeLi.appendChild(homeImg);

  let todayLi = document.createElement('li');
  todayLi.textContent = "Today";
  todayLi.classList.add('defaultLi');
  let todayImg = document.createElement('img');
  todayImg.setAttribute('src', `${Today}`);
  todayImg.setAttribute('alt', "Today");
  todayLi.appendChild(todayImg);

  let weekLi = document.createElement('li');
  weekLi.textContent = "This Week";
  weekLi.classList.add('defaultLi');
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
  add.addEventListener('click', showNewProjectForm);

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
  closeImg.classList.add('closeBtn', 'newProjectClose');
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
  resetBtn.classList.add('resetNewProjectForm', 'hidden');
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

function createProjectEditForm() {
  let projectEditDiv = document.createElement('div');
  projectEditDiv.classList.add('projectEditContainer', 'hidden');

  let editProjectForm = document.createElement('form');
  editProjectForm.classList.add('editProjectForm');
  editProjectForm.setAttribute('action', "");
  editProjectForm.setAttribute('autocomplete', 'off');

  let closeImg = document.createElement('img');
  closeImg.classList.add('closeBtn', 'editProjectClose');
  closeImg.setAttribute('src', `${Close}`);
  closeImg.setAttribute('alt', 'Close');

  let formHeader = document.createElement('p');
  formHeader.textContent = "Edit Project";

  let inputDiv = document.createElement('div');
  inputDiv.classList.add('input', 'entry');

  let formLabel = document.createElement('label');
  formLabel.setAttribute('for', 'projectNameEdit');
  formLabel.textContent = "Change Name:";

  let formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('name', 'projectNameEdit');
  formInput.setAttribute('id', 'projectNameEdit');
  formInput.setAttribute('required', "");

  let buttonDiv = document.createElement('div');
  buttonDiv.classList.add('formButtons');

  let submitBtn = document.createElement('button');
  submitBtn.classList.add('submitProjectChange');
  submitBtn.textContent = "Save Changes";
  submitBtn.setAttribute('type', 'button');

  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteProject');
  deleteBtn.textContent = "Delete Project";
  deleteBtn.setAttribute('type', 'button');

  let resetBtn = document.createElement('button');
  resetBtn.classList.add('resetEditProjectForm', 'hidden');
  resetBtn.setAttribute('type', 'reset');

  projectEditDiv.appendChild(editProjectForm);

  editProjectForm.appendChild(closeImg);
  editProjectForm.appendChild(formHeader);
  editProjectForm.appendChild(inputDiv);
  editProjectForm.appendChild(buttonDiv);
  editProjectForm.appendChild(resetBtn);

  inputDiv.appendChild(formLabel);
  inputDiv.appendChild(formInput);

  buttonDiv.appendChild(submitBtn);
  buttonDiv.appendChild(deleteBtn);

  return projectEditDiv;
}

function createNewTaskForm() {
  let newTaskDiv = document.createElement('div');
  newTaskDiv.classList.add('newTaskContainer');

  let newTaskForm = document.createElement('form');
  newTaskForm.classList.add('newTaskForm');
  newTaskForm.setAttribute('action', "");
  newTaskForm.setAttribute('autocomplete', 'off');

  let closeImg = document.createElement('img');
  closeImg.classList.add('closeBtn', 'newTaskClose');
  closeImg.setAttribute('src', `${Close}`);
  closeImg.setAttribute('alt', 'Close');

  let formHeader = document.createElement('p');
  formHeader.classList.add('newTaskHeader');
  formHeader.textContent = "New Task";

  newTaskDiv.appendChild(newTaskForm);
  newTaskForm.appendChild(closeImg);
  newTaskForm.appendChild(formHeader);

  //task title

  let inputDivTitle = document.createElement('div');
  inputDivTitle.classList.add('textInput', 'entry');

  let formLabelTitle = document.createElement('label');
  formLabelTitle.setAttribute('for', 'newTaskName');
  formLabelTitle.textContent = "Task Name:";

  let formInputTitle = document.createElement('input');
  formInputTitle.setAttribute('type', 'text');
  formInputTitle.setAttribute('name', 'newTaskName');
  formInputTitle.setAttribute('id', 'newTaskName');
  formInputTitle.setAttribute('required', "");

  inputDivTitle.appendChild(formLabelTitle);
  inputDivTitle.appendChild(formInputTitle);

  newTaskForm.appendChild(inputDivTitle);

  //task description

  let inputDivDescription = document.createElement('div');
  inputDivDescription.classList.add('textAreaInput', 'entry');

  let formLabelDescription = document.createElement('label');
  formLabelDescription.setAttribute('for', 'newTaskDescription');
  formLabelDescription.textContent = "Task Description:";

  let formInputDescription = document.createElement('textarea')
  formInputDescription.setAttribute('rows', '5');
  formInputDescription.setAttribute('cols', '30');
  formInputDescription.setAttribute('name', 'newTaskDescription');
  formInputDescription.setAttribute('id', 'newTaskDescription');

  inputDivDescription.appendChild(formLabelDescription);
  inputDivDescription.appendChild(formInputDescription);

  newTaskForm.appendChild(inputDivDescription);

  //task due date

  let inputDivDate = document.createElement('div');
  inputDivDate.classList.add('dateInput', 'entry');

  let formLabelDate = document.createElement('label');
  formLabelDate.setAttribute('for', 'newTaskDate');
  formLabelDate.textContent = "Due Date:";

  let formInputDate = document.createElement('input');
  formInputDate.setAttribute('type', 'date');
  formInputDate.setAttribute('name', 'newTaskDate');
  formInputDate.setAttribute('id', 'newTaskDate');

  inputDivDate.appendChild(formLabelDate);
  inputDivDate.appendChild(formInputDate);

  newTaskForm.appendChild(inputDivDate);

  //task priority

  let inputDivPriority = document.createElement('div');
  inputDivPriority.classList.add('selectInput', 'entry');

  let formLabelPriority = document.createElement('p');
  formLabelPriority.textContent = "Set Priority:";

  let formInputPriority = document.createElement('select');
  formInputPriority.setAttribute('name', 'newTaskPriority');
  formInputPriority.setAttribute('id', 'newTaskPriority');

  let lowPrio = document.createElement('option');
  lowPrio.setAttribute('value', 'low');
  lowPrio.textContent = "Low";

  let normalPrio = document.createElement('option');
  normalPrio.setAttribute('value', 'normal');
  normalPrio.setAttribute('selected', '');
  normalPrio.textContent = "Normal";

  let highPrio = document.createElement('option');
  highPrio.setAttribute('value', 'high');
  highPrio.textContent = "High";

  formInputPriority.appendChild(lowPrio);
  formInputPriority.appendChild(normalPrio);
  formInputPriority.appendChild(highPrio);

  inputDivPriority.appendChild(formLabelPriority);
  inputDivPriority.appendChild(formInputPriority);

  newTaskForm.appendChild(inputDivPriority);

  //buttons

  let submitBtn = document.createElement('button');
  submitBtn.classList.add('submitNewTask');
  submitBtn.textContent = "Create Task";
  submitBtn.setAttribute('type', 'button');

  let resetBtn = document.createElement('button');
  resetBtn.classList.add('resetNewTaskForm', 'hidden');
  resetBtn.setAttribute('type', 'reset');

  newTaskForm.appendChild(submitBtn);
  newTaskForm.appendChild(resetBtn);

  return newTaskDiv;
}

export {
  createHeader,
  createSidebar,
  createContent,
  createFooter,
  createNewProjectForm,
  createProjectEditForm,
  createNewTaskForm,
}