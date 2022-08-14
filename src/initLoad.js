import {addThemeButtons} from './theme';
import Logo from './imgs/logo.svg';
import Add from './imgs/add.svg';

function createHeader() {
  let header = document.createElement('header');

  let headerContent = document.createElement('div');
  headerContent.classList.add('headerContent');

  let logo = document.createElement('div');
  logo.classList.add('logo')

  let logoImg = document.createElement('img');
  logoImg.setAttribute('src', `${Logo}`);
  logoImg.setAttribute('alt', "Logo");

  let logoText = document.createElement('h1');
  logoText.textContent = "Todo List";

  logo.appendChild(logoImg);
  logo.appendChild(logoText);

  headerContent.appendChild(logo);
  headerContent.appendChild(addThemeButtons());

  header.appendChild(headerContent);

  return header;

}

function createSidebar() {
  let sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  let defaultTabs = document.createElement('ul');
  defaultTabs.classList.add('default');

  let homeLi = document.createElement('li');
  homeLi.textContent = "Home";
  let todayLi = document.createElement('li');
  todayLi.textContent = "Today";
  let weekLi = document.createElement('li');
  weekLi.textContent = "This Week";

  defaultTabs.appendChild(homeLi);
  defaultTabs.appendChild(todayLi);
  defaultTabs.appendChild(weekLi);

  let projectsTabs = document.createElement('ul');
  projectsTabs.classList.add('projectsList');
  
  let projects = document.createElement('li');
  projects.classList.add('projects');

  let project = document.createTextNode('Projects');
  let add = document.createElement('img');
  add.setAttribute('src', `${Add}`);
  add.setAttribute('alt', "Add Project");

  projects.appendChild(project);
  projects.appendChild(add);

  projectsTabs.appendChild(projects);

  sidebar.appendChild(defaultTabs);
  sidebar.appendChild(projectsTabs);

  return sidebar;
}

function createFooter() {

}

export {
  createHeader,
  createSidebar,
  createFooter,
}