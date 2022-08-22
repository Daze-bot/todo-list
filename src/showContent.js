import Edit from './imgs/edit.svg';
import {projects} from './project';
import {showProjectEditForm} from './project';

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

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);
  contentHead.appendChild(editBtn);

  highlightSelectedProject();
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

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);

  highlightSelectedProject();
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

export {
  showProjectContent,
  showDefaultContent,
}