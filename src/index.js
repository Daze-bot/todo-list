import './css/style.css';
import {createHeader, createSidebar, createFooter, createContent} from './initLoad';
import {loadProjects, projects} from './project';
import {showDefaultContent} from './showContent.js';
import ProfilePicDefault from './imgs/profile.svg';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

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

async function signInUser() {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(getAuth(), provider)
}

function signOutUser() {
  signOut(getAuth());
}

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || ProfilePicDefault;
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

function isUserSignedIn() {
  return !!getAuth().currentUser;
}

function authStateObserver(user) {
  if (user) {
    let profilePicUrl = getProfilePicUrl();
    profilePicture.style.backgroundImage =
      'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';

    signOutButton.removeAttribute('hidden');
    signInButton.setAttribute('hidden', 'true');
  } else {
    profilePicture.style.backgroundImage = 'url(' + ProfilePicDefault + ')';
    signInButton.removeAttribute('hidden');
    signOutButton.setAttribute('hidden', 'true');
  }
}

function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}

// DOM Elements
let signInButton = document.querySelector('.signInBtn');
let signOutButton = document.querySelector('.signOutBtn');
let profilePicture = document.querySelector('.profilePicture');

signInButton.addEventListener('click', signInUser);
signOutButton.addEventListener('click', signOutUser);

const firebaseConfig = {
  apiKey: "AIzaSyARk6kVEzlb_m4XefEG-rAB5Mk_fDZnSnw",
  authDomain: "code4daze-todo-list.firebaseapp.com",
  projectId: "code4daze-todo-list",
  storageBucket: "code4daze-todo-list.appspot.com",
  messagingSenderId: "113607595126",
  appId: "1:113607595126:web:d4f58d8ba93c5d4a3b3b57"
}

initializeApp(firebaseConfig);
initFirebaseAuth();