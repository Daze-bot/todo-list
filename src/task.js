import {createNewTaskForm} from './initLoad';
import {displayTask, showDefaultContent, showProjectContent, clearTasks, loadTasks} from './showContent';

let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let taskID = +localStorage.getItem("taskID") || 0;

class Task {
  constructor (title, description, dueDate, priority, project, complete, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.complete = complete;
    this.id = id;
  }
}

function showNewTaskForm() {
  document.body.appendChild(createNewTaskForm());
  let taskNameInput = document.querySelector('#newTaskName');
  taskNameInput.focus();
  submitTaskForm();
}

function submitTaskForm() {
  let taskSubmitBtn = document.querySelector('.submitNewTask');
  taskSubmitBtn.addEventListener('click', createTask);

  let taskCloseBtn = document.querySelector('.newTaskClose');
  taskCloseBtn.addEventListener('click', closeNewTaskForm);

  let taskNameInput = document.querySelector('#newTaskName');
  taskNameInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      createTask();
    }
  });

  let taskForm = document.querySelector('.newTaskForm');
  let taskContainer = document.querySelector('.newTaskContainer');
  taskContainer.addEventListener('click', function(e) {
    if (taskForm.contains(e.target)) {
      return;
    } else {
      closeNewTaskForm();
    }
  });
}

function createTask() {
  let taskName = document.querySelector('#newTaskName').value;
  let taskDescription = document.querySelector('#newTaskDescription').value;
  let taskDueDate = document.querySelector('#newTaskDate').value;
  let taskPriority = document.querySelector('#newTaskPriority').value;
  let currentProject = document.querySelector('.currentProjectName').textContent;
  
  if (taskName !== "") {
    taskID += 1;
    let newTask = new Task(taskName, taskDescription, taskDueDate, taskPriority, currentProject, false, taskID);
    addTask(newTask);
  } else {
    alert("Please enter a task name.");
  }
}

function addTask(task) {
  tasks.push(task);
  saveTasks();
  saveTaskID();
  closeNewTaskForm();
  displayTask(task);
}

function closeNewTaskForm() {
  let taskContainer = document.querySelector('.newTaskContainer');
  let resetBtn = document.querySelector('.resetNewTaskForm');
  resetBtn.click();
  document.body.removeChild(taskContainer);
}

function markTaskComplete() {
  let taskDataID = +this.parentElement.dataset.id;
  let index = tasks.findIndex(x => x.id === taskDataID);
  if (tasks[index].complete === false) {
    tasks[index].complete = true;
    this.parentElement.classList.add('taskCompleteStatus');
    this.firstChild.classList.remove('hidden');
  } else if (tasks[index].complete === true) {
    tasks[index].complete = false;
    this.parentElement.classList.remove('taskCompleteStatus');
    this.firstChild.classList.add('hidden');
  }
  saveTasks();
}

function showTaskEditForm(task) {
  document.body.appendChild(createNewTaskForm());
  let taskHead = document.querySelector('.newTaskHeader');
  taskHead.textContent = "Edit Task";

  let buttonName = document.querySelector('.submitNewTask');
  buttonName.textContent = "Edit Task";

  let taskName = document.querySelector('#newTaskName');
  taskName.setAttribute('value', task.title);

  let taskDescription = document.querySelector('#newTaskDescription');
  taskDescription.value = `${task.description}`;

  let taskDate = document.querySelector('#newTaskDate');
  taskDate.setAttribute('value', task.dueDate);

  let taskPrio = document.querySelector('#newTaskPriority');
  taskPrio.value = `${task.priority}`;

  submitTaskEdit(task);
}

function submitTaskEdit(task) {
  let taskSubmitBtn = document.querySelector('.submitNewTask');
  taskSubmitBtn.addEventListener('click', () => editTask(task));

  let taskCloseBtn = document.querySelector('.newTaskClose');
  taskCloseBtn.addEventListener('click', closeNewTaskForm);

  let taskNameInput = document.querySelector('#newTaskName');
  taskNameInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      editTask(task);
    }
  });

  let taskForm = document.querySelector('.newTaskForm');
  let taskContainer = document.querySelector('.newTaskContainer');
  taskContainer.addEventListener('click', function(e) {
    if (taskForm.contains(e.target)) {
      return;
    } else {
      closeNewTaskForm();
    }
  });
}

function editTask(task) {
  let taskName = document.querySelector('#newTaskName').value;
  let taskDescription = document.querySelector('#newTaskDescription').value;
  let taskDueDate = document.querySelector('#newTaskDate').value;
  let taskPriority = document.querySelector('#newTaskPriority').value;

  if (taskName !== "") {
    task.title = taskName;
  }
  task.description = taskDescription;
  task.dueDate = taskDueDate;
  task.priority = taskPriority;

  saveTasks();
  closeNewTaskForm();
  let contentName = document.querySelector('.contentHead').textContent;
    if (contentName !== task.project) {
      showDefaultContent(contentName);
    } else {
      showProjectContent(task.project);
    }
}

function deleteTask(task) {
  if (confirm("Are you sure you want to delete this task?")) {
    let index = tasks.findIndex(x => x.id === task.id);
    tasks.splice(index, 1);
    saveTasks();
  } else {
    return;
  }
}

function deleteTasksInProject(projectName) {
  let filteredArray = tasks.filter(x => x.project !== projectName);
  tasks = filteredArray;
  saveTasks();
}

function changeTaskProjects(oldName, newName) {
  tasks.forEach(x => {
    if (x.project === oldName) {
      x.project = newName;
    }
  })
  saveTasks();
}

function sortTasks(sortChoice) {
  let projectName = document.querySelector('.contentHead').textContent;
  let legendName = document.querySelector('.legendName');
  let legendDate = document.querySelector('.legendDate');

  clearTasks();

  if (sortChoice === "name" && !legendName.classList.contains('aToZ')) {
    let sortedArray = tasks.sort((a, b) => {
      return (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : -1;
    })
    loadTasks(projectName, sortedArray);
    legendName.classList.add('aToZ');
    legendDate.classList.remove('newToOld');
  } else if (sortChoice === "name") {
    let sortedArray = tasks.sort((a, b) => {
      return (a.title.toUpperCase() > b.title.toUpperCase()) ? -1 : 1;
    })
    loadTasks(projectName, sortedArray);
    legendName.classList.remove('aToZ');
    legendDate.classList.remove('newToOld');
  } else if (sortChoice === "date" && !legendDate.classList.contains('newToOld')) {
    let sortedArray = tasks.sort((a, b) => {
      return (a.dueDate > b.dueDate) ? 1 : -1;
    })
    loadTasks(projectName, sortedArray);
    legendDate.classList.add('newToOld');
    legendName.classList.remove('aToZ');
  } else if (sortChoice === "date") {
    let sortedArray = tasks.sort((a, b) => {
      return (a.dueDate > b.dueDate) ? -1 : 1;
    })
    loadTasks(projectName, sortedArray);
    legendDate.classList.remove('newToOld');
    legendName.classList.remove('aToZ');
  } else if (sortChoice === "id") {
    let sortedArray = tasks.sort((a, b) => {
      return (a.id > b.id) ? 1 : -1;
    })
    loadTasks(projectName, sortedArray);
    legendDate.classList.remove('newToOld');
    legendName.classList.remove('aToZ');
  }
}

function saveTasks() {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveTaskID() {
  window.localStorage.setItem("taskID", taskID);
}

export {
  showNewTaskForm,
  tasks,
  markTaskComplete,
  deleteTasksInProject,
  changeTaskProjects,
  deleteTask,
  showTaskEditForm,
  sortTasks,
}