import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent, createNewProjectForm} from './initLoad';
import {showNewProjectForm, loadProjects, projects} from './newProject';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createContent());
document.body.appendChild(createFooter());
document.body.appendChild(createNewProjectForm());

window.addEventListener('load', loadProjects(projects));

let addProjectBtn = document.querySelector('.newProject');
addProjectBtn.addEventListener('click', showNewProjectForm);