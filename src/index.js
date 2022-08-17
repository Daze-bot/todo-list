import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent, createNewProjectForm} from './initLoad';
import {createProject} from './newProject';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createContent());
document.body.appendChild(createFooter());
document.body.appendChild(createNewProjectForm());

let addBtn = document.querySelector('.newProject');
addBtn.addEventListener('click', createProject);