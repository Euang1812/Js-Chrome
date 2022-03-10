const $loginForm = document.querySelector("#loginForm");
const $loginInput = document.querySelector("#loginForm input");
const $greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  event.preventDefault();
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = $loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName,"hi~");
}

function handelLinkClick(event) {
  alert('click!');
  event.preventDefault();

}

function paintGreeting(username,hi) {
  $greeting.textContent = `${hi} ${username}`;
  $greeting.classList.remove(HIDDEN_CLASSNAME);
}

$loginForm.addEventListener("submit", onLoginSubmit);

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
  $loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(saveUserName,"oh~");
}