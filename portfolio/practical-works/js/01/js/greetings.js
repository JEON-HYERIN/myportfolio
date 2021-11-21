const loginForm = document.querySelector('#login__form');
const loginText = loginForm.querySelector('input[type="text"]');
const userName = document.querySelector('.username');
const USERNAME_KEY = 'userName';
const HIDDEN_CLASSNAME = 'hidden';

function savedUserName () {
  const nameValue = loginText.value;
  localStorage.setItem(USERNAME_KEY, nameValue);
  showUserName(nameValue);
}

function showUserName (username) {
  userName.textContent = `Hello ${username}`;
  userName.classList.remove(HIDDEN_CLASSNAME);
}

const getUserName = localStorage.getItem(USERNAME_KEY);

if (getUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    savedUserName();
  });
} else {
  showUserName(getUserName);
}
