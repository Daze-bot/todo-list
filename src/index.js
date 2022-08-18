import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent, createNewProjectForm} from './initLoad';
import {showNewProjectForm, loadProjects, projects} from './project';
import {showContent} from './showContent.js';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createContent());
document.body.appendChild(createFooter());
document.body.appendChild(createNewProjectForm());

window.addEventListener('load', loadProjects(projects));
showContent("Home");

let addProjectBtn = document.querySelector('.newProject');
addProjectBtn.addEventListener('click', showNewProjectForm);

let defaultLi = document.querySelectorAll('.defaultLi');
defaultLi.forEach(li => {
  li.addEventListener('click', () => showContent(li.textContent));
});