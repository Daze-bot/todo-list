import Edit from './imgs/edit.svg';
import Add from './imgs/add.svg';
import Trash from './imgs/trash.svg';
import Check from './imgs/check.svg';
import {showProjectEditForm} from './project';
import {showNewTaskForm, markTaskComplete, deleteTask, showTaskEditForm, sortTasks} from './task';
import {getWeekDates} from './date';

function showProjectContent(projectName) {
  clearContent();

  let content = document.querySelector('.content');

  let contentHead = document.createElement('div');
  contentHead.classList.add('contentHead');

  let projectTitle = document.createElement('h1');
  projectTitle.classList.add('currentProjectName');
  projectTitle.textContent = `${projectName}`;

  let editBtn = document.createElement('img');
  editBtn.classList.add('editBtn');
  editBtn.setAttribute('src', `${Edit}`);
  editBtn.setAttribute('alt', "Edit");
  editBtn.addEventListener('click', () => showProjectEditForm(projectName));

  let taskContainer = document.createElement('div');
  taskContainer.classList.add('taskCardContainer');

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);
  contentHead.appendChild(editBtn);
  content.appendChild(createAddTaskButton());
  content.appendChild(taskContainer);
  taskContainer.appendChild(showTaskLegend());

  highlightSelectedProject();

  sortTasks("id");
}

function showDefaultContent(name) {
  clearContent();

  let content = document.querySelector('.content');

  let contentHead = document.createElement('div');
  contentHead.classList.add('contentHead');

  let projectTitle = document.createElement('h1');
  projectTitle.textContent = `${name}`;

  let taskContainer = document.createElement('div');
  taskContainer.classList.add('taskCardContainer');

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);
  content.appendChild(taskContainer);
  taskContainer.appendChild(showTaskLegend());

  highlightSelectedProject();

  sortTasks("id");
}

function clearContent() {
  let content = document.querySelector('.content');
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }
}

function clearTasks() {
  let taskContainer = document.querySelector('.taskCardContainer');
  while (taskContainer.childNodes.length > 1) {
    taskContainer.removeChild(taskContainer.lastChild);
  }
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

function showTaskLegend() {
  let legend = document.createElement('div');
  legend.classList.add('taskLegend');

  let name = document.createElement('p');
  name.classList.add('legendName');
  name.textContent = "Name";
  name.addEventListener('click', () => sortTasks("name"));

  let date = document.createElement('p');
  date.classList.add('legendDate');
  date.textContent = "Due Date";
  date.addEventListener('click', () => sortTasks("date"));

  legend.appendChild(name);
  legend.appendChild(date);

  return legend;
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

  if (task.priority === "low") {
    taskCard.classList.add('lowPrio');
  } else if (task.priority === "high") {
    taskCard.classList.add('highPrio');
  } else if (task.priority === "normal") {
    taskCard.classList.add('normPrio');
  }

  let checkComplete = document.createElement('button');
  checkComplete.classList.add('markComplete');
  checkComplete.addEventListener('click', markTaskComplete);

  let checkMark = document.createElement('img');
  checkMark.classList.add('checkMark');
  checkMark.setAttribute('src', `${Check}`);
  checkMark.setAttribute('alt', "Check");

  if (task.complete === true) {
    taskCard.classList.add('taskCompleteStatus');
  } else if (task.complete === false) {
    checkMark.classList.add('hidden');
  }

  checkComplete.appendChild(checkMark);

  let name = document.createElement('p');
  name.classList.add('taskTitle');
  name.textContent = task.title;

  let details = document.createElement('div');
  details.classList.add('taskDescriptionView', 'hidden');
  details.textContent = task.description;

  let detailsBtn = document.createElement('button');
  detailsBtn.classList.add('taskDetails');
  detailsBtn.textContent = "Details";
  detailsBtn.addEventListener('click', () => {
    if (details.classList.contains('hidden')) {
      taskCard.classList.add('openDetails');
      details.classList.remove('hidden');
    } else if (!details.classList.contains('hidden')) {
      taskCard.classList.remove('openDetails');
      details.classList.add('hidden');
    }
  })

  let dueDate = document.createElement('p');
  dueDate.classList.add('taskDueDateDisplay');
  let rawDate = task.dueDate;
  let year = rawDate.substring(0,4);
  let month = rawDate.substring(5,7);
  let day = rawDate.substring(8,10);
  let formattedDate = month + '/' + day + '/' + year;
  dueDate.textContent = formattedDate;

  let taskButtons = document.createElement('div');
  taskButtons.classList.add('taskBtns');

  let editBtn = document.createElement('img');
  editBtn.classList.add('taskEdit');
  editBtn.setAttribute('src', `${Edit}`);
  editBtn.setAttribute('alt', "Edit Task");
  editBtn.addEventListener('click', () => {
    showTaskEditForm(task);
  })

  let closeImg = document.createElement('img');
  closeImg.classList.add('taskClose');
  closeImg.setAttribute('src', `${Trash}`);
  closeImg.setAttribute('alt', 'Delete Task');
  closeImg.addEventListener('click', () => {
    deleteTask(task);
    let contentName = document.querySelector('.contentHead').textContent;
    if (contentName !== task.project) {
      showDefaultContent(contentName);
    } else {
      showProjectContent(task.project);
    }
  });

  taskButtons.appendChild(editBtn);
  taskButtons.appendChild(closeImg);

  taskCard.appendChild(checkComplete);
  taskCard.appendChild(name);
  taskCard.appendChild(details);
  taskCard.appendChild(detailsBtn);
  taskCard.appendChild(dueDate);
  taskCard.appendChild(taskButtons);

  let taskContainer = document.querySelector('.taskCardContainer');
  taskContainer.appendChild(taskCard);
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
    let thisWeek = getWeekDates();
    newArray = array.filter(x => thisWeek.includes(x.dueDate));
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
  clearContent,
  loadTasks,
  clearTasks,
}