import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent, createNewProjectForm, createProjectEditForm} from './initLoad';
import {loadProjects, projects} from './project';
import {showDefaultContent} from './showContent.js';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createContent());
document.body.appendChild(createFooter());
document.body.appendChild(createNewProjectForm());
document.body.appendChild(createProjectEditForm());

window.addEventListener('load', loadProjects(projects));
showDefaultContent("Home");

let defaultLi = document.querySelectorAll('.defaultLi');
defaultLi.forEach(li => {
  li.addEventListener('click', () => showDefaultContent(li.textContent));
});