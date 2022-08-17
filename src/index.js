import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent, createNewProjectForm} from './initLoad';
import {showNewProjectForm} from './newProject';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createContent());
document.body.appendChild(createFooter());
document.body.appendChild(createNewProjectForm());

let addBtn = document.querySelector('.newProject');
addBtn.addEventListener('click', showNewProjectForm);