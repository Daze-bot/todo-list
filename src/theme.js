import DarkIcon from './imgs/dark-theme.svg';
import LightIcon from './imgs/light-theme.svg';

function darkTheme() {
  document.documentElement.style.setProperty('--bg-color', '#333333');
  document.documentElement.style.setProperty('--color-change-filter', 'brightness(4.12) saturate(100%) invert(100%) sepia(0%) saturate(7454%) hue-rotate(268deg) brightness(118%) contrast(101%)');
}

function lightTheme() {
  document.documentElement.style.setProperty('--bg-color', 'yellow');
  document.documentElement.style.setProperty('--color-change-filter', 'none');
}

function addThemeButtons() {
  let btnDiv = document.createElement('div');
  btnDiv.classList.add('themeBtns');
  
  let darkBtn = document.createElement('img');
  darkBtn.setAttribute('src', `${DarkIcon}`);
  darkBtn.setAttribute('alt', "Dark Theme");
  darkBtn.classList.add('hidden', 'darkBtn');

  let lightBtn = document.createElement('img');
  lightBtn.setAttribute('src', `${LightIcon}`);
  lightBtn.setAttribute('alt', "Light Theme");
  lightBtn.classList.add('lightBtn');

  btnDiv.appendChild(darkBtn);
  btnDiv.appendChild(lightBtn);

  let currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);

  darkBtn.addEventListener('click', () => setTheme('dark'));
  lightBtn.addEventListener('click', () => setTheme('light'));

  function setTheme(mode) {
    window.localStorage.setItem("theme", `${mode}`);
    if (mode === "dark") {
      darkBtn.classList.add('hidden');
      lightBtn.classList.remove('hidden');
      darkTheme();
    } else if (mode === "light") {
      darkBtn.classList.remove('hidden');
      lightBtn.classList.add('hidden');
      lightTheme()
    }
  }

  return btnDiv;
}

export {addThemeButtons};