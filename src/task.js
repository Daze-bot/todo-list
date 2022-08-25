import {createNewTaskForm} from './initLoad';
import {displayTask} from './showContent';

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
    closeNewTaskForm();
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
}