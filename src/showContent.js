import Edit from './imgs/edit.svg';
import Add from './imgs/add.svg';
import Close from './imgs/close.svg';
import {projects} from './project';
import {tasks} from './task';
import {showProjectEditForm} from './project';
import {showNewTaskForm} from './task';

function showProjectContent(projectName) {
  let content = document.querySelector('.content');
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  let contentHead = document.createElement('div');
  contentHead.classList.add('contentHead');

  let projectTitle = document.createElement('h1');
  projectTitle.classList.add('currentProjectName');
  projectTitle.textContent = `${projectName}`;

  let editBtn = document.createElement('img');
  editBtn.classList.add('editBtn');
  editBtn.setAttribute('src', `${Edit}`);
  editBtn.setAttribute('alt', "Home");
  editBtn.addEventListener('click', () => showProjectEditForm(projectName));

  let taskContainer = document.createElement('div');
  taskContainer.classList.add('taskCardContainer');

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);
  contentHead.appendChild(editBtn);
  content.appendChild(createAddTaskButton());
  content.appendChild(taskContainer);

  highlightSelectedProject();

  loadTasks(projectName, tasks);
}

function showDefaultContent(name) {
  let content = document.querySelector('.content');
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  let contentHead = document.createElement('div');
  contentHead.classList.add('contentHead');

  let projectTitle = document.createElement('h1');
  projectTitle.textContent = `${name}`;

  let taskContainer = document.createElement('div');
  taskContainer.classList.add('taskCardContainer');

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);
  content.appendChild(taskContainer);

  highlightSelectedProject();

  loadTasks(name, tasks);
}

function highlightSelectedProject() {
  let projectLi = document.querySelectorAll('li');
  let projectName = document.querySelector('.contentHead').textContent;

  projectLi.forEach(li => {
    li.classList.remove('selected');
    if (li.textContent === projectName) {
      li.classList.add('selected');
    }
  });
}

function createAddTaskButton() {
  let addBtn = document.createElement('button');
  addBtn.classList.add('addTaskBtn');
  addBtn.textContent = "Add Task";

  let addImg = document.createElement('img');
  addImg.setAttribute('src', `${Add}`);
  addImg.setAttribute('alt', "Add Task");

  addBtn.appendChild(addImg);

  addBtn.addEventListener('click', showNewTaskForm);

  return addBtn;
}

function displayTask(task) {
  let taskCard = document.createElement('div');
  taskCard.classList.add('taskCard');
  taskCard.dataset.id = task.id;

  let name = document.createElement('p');
  name.textContent = task.title;

  let dueDate = document.createElement('p');
  let rawDate = task.dueDate;
  let year = rawDate.substring(0,4);
  let month = rawDate.substring(5,7);
  let day = rawDate.substring(8,10);
  let formattedDate = month + '/' + day + '/' + year;

  dueDate.textContent = formattedDate;

  let closeImg = document.createElement('img');
  closeImg.classList.add('closeBtn', 'editProjectClose');
  closeImg.setAttribute('src', `${Close}`);
  closeImg.setAttribute('alt', 'Close');

  taskCard.appendChild(name);
  taskCard.appendChild(dueDate);
  taskCard.appendChild(closeImg);

  let taskContainer = document.querySelector('.taskCardContainer');
  taskContainer.appendChild(taskCard);

  /* taskCard.addEventListener('click', showTaskDescription); */
}

function loadTasks(projectName, array) {
  let newArray;

  if (projectName === "Home") {
    newArray = array;
  } else if (projectName === "Today") {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    
    newArray = array.filter(x => x.dueDate === today);
  } else if (projectName === "This Week") {
    //
  } else {
    newArray = array.filter(x => x.project === projectName);
  }

  for (let item of newArray) {
    displayTask(item);
  }
}

export {
  showProjectContent,
  showDefaultContent,
  displayTask,
}