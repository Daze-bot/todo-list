function darkTheme() {
  document.documentElement.style.setProperty('--bg-color', 'blue');
}

function lightTheme() {
  document.documentElement.style.setProperty('--bg-color', 'yellow');
}

function addThemeButtons() {
  let btn0 = document.createElement('button');
  btn0.textContent = "Dark";
  let btn1 = document.createElement('button');
  btn1.textContent = "Light";

  document.body.appendChild(btn0);
  document.body.appendChild(btn1);

  btn0.addEventListener('click', darkTheme);
  btn1.addEventListener('click', lightTheme);

  return document;
}

export {
  darkTheme,
  lightTheme,
  addThemeButtons,
};