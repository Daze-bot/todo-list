import {addThemeButtons} from './theme';
import Logo from './imgs/logo.svg';

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

}

function createFooter() {

}

export {
  createHeader,
  createSidebar,
  createFooter,
}