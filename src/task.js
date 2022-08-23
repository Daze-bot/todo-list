import {createNewTaskForm} from './initLoad';

class Task {
  constructor (title, description, dueDate, priority, project, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.id = id;
  }
}

function showNewTaskForm() {
  document.body.appendChild(createNewTaskForm());
}

export {
  showNewTaskForm,
}