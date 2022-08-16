import './css/style.css';
import {createHeader, createSidebar, createFooter} from './initLoad';
import {createProject} from './newProject';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createFooter());

let addBtn = document.querySelector('.newProject');

addBtn.addEventListener('click', createProject);