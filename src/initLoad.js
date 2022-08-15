import {addThemeButtons} from './theme';
import Logo from './imgs/logo.svg';
import Add from './imgs/add.svg';
import Home from './imgs/home.svg';
import Today from './imgs/today.svg';
import Week from './imgs/week.svg';

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
  let homeImg = document.createElement('img');
  homeImg.setAttribute('src', `${Home}`);
  homeImg.setAttribute('alt', "Home");
  homeLi.appendChild(homeImg);

  let todayLi = document.createElement('li');
  todayLi.textContent = "Today";
  let todayImg = document.createElement('img');
  todayImg.setAttribute('src', `${Today}`);
  todayImg.setAttribute('alt', "Today");
  todayLi.appendChild(todayImg);

  let weekLi = document.createElement('li');
  weekLi.textContent = "This Week";
  let weekImg = document.createElement('img');
  weekImg.setAttribute('src', `${Week}`);
  weekImg.setAttribute('alt', "Week");
  weekLi.appendChild(weekImg);

  defaultTabs.appendChild(homeLi);
  defaultTabs.appendChild(todayLi);
  defaultTabs.appendChild(weekLi);
  
  let projects = document.createElement('div');
  projects.setAttribute('id', 'projects');

  let project = document.createTextNode('Projects');
  let add = document.createElement('img');
  add.setAttribute('src', `${Add}`);
  add.setAttribute('alt', "Add Project");
  add.classList.add('newProject');

  projects.appendChild(project);
  projects.appendChild(add);

  let projectsTabs = document.createElement('ul');
  projectsTabs.classList.add('projectsList');

  sidebar.appendChild(defaultTabs);
  sidebar.appendChild(projects);
  sidebar.appendChild(projectsTabs);

  return sidebar;
}

function createFooter() {
  let footer = document.createElement('footer');

  let a = document.createElement('a');
  a.textContent = "Created by Code4Daze";
  a.setAttribute('href', 'https://github.com/Daze-bot');
  a.setAttribute('target', '_blank');

  footer.appendChild(a);

  return footer;
}

export {
  createHeader,
  createSidebar,
  createFooter,
}