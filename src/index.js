import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent} from './initLoad';
import {loadProjects, projects} from './project';
import {showDefaultContent} from './showContent.js';
import { initializeApp } from 'firebase/app';

document.body.appendChild(createHeader());
document.body.appendChild(createSidebar());
document.body.appendChild(createContent());
document.body.appendChild(createFooter());

window.addEventListener('load', loadProjects(projects));
showDefaultContent("Home");

let defaultLi = document.querySelectorAll('.defaultLi');
defaultLi.forEach(li => {
  li.addEventListener('click', () => showDefaultContent(li.textContent));
});

const firebaseConfig = {
  apiKey: "AIzaSyARk6kVEzlb_m4XefEG-rAB5Mk_fDZnSnw",
  authDomain: "code4daze-todo-list.firebaseapp.com",
  projectId: "code4daze-todo-list",
  storageBucket: "code4daze-todo-list.appspot.com",
  messagingSenderId: "113607595126",
  appId: "1:113607595126:web:d4f58d8ba93c5d4a3b3b57"
}

const app = initializeApp(firebaseConfig);