import Edit from './imgs/edit.svg';

function showContent(projectName) {
  let content = document.querySelector('.content');
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  let contentHead = document.createElement('div');
  contentHead.classList.add('contentHead');

  let projectTitle = document.createElement('h1');
  projectTitle.textContent = `${projectName}`;

  content.appendChild(contentHead);
  contentHead.appendChild(projectTitle);
}

export {
  showContent,
}

