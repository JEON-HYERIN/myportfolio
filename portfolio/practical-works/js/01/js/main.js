// background
const bgUrl = ['1.jpg', '2.jpg', '3.jpg','4.jpg'];
const chosenBgUrl = bgUrl[Math.floor(Math.random() * bgUrl.length)];

document.body.style.backgroundImage = `url('./img/${chosenBgUrl}')`;

// clock
const emEl = document.querySelector('.clock em');

getClock();
setInterval(getClock, 1000);

function getClock () {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,'0');
  const minute = String(date.getMinutes()).padStart(2,'0');
  // const seconds = String(date.getSeconds()).padStart(2,'0');
  emEl.textContent = `${hour}:${minute}`;
}

// greeting
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

// quote
const quotes = [
  {
    quote:"Love does not consist in gazing at each other, but in looking together in the same direction.",
    author:"-Antoine de Saint-Exupery-",
  },
  {
    quote:"It is only with the heart that one can see rightly what is essential is invisible to the eye.",
    author:"-Antoine de Saint-Exupery-",
  },
  {
    quote:"One man with courage makes a majority.",
    author:"-Andrew Jackson-",
  },
  {
    quote:"Like all great travellers, I have seen more than I remember, and remember more than I have seen.",
    author:"-Benjamin Disraeli-",
  },
  {
    quote:"Anything you're good at contributes to happiness.",
    author:"-Bertrand Russell-",
  },
  {
    quote:"Only the person who has faith in himself is able to be faithful to others.",
    author:"-Erich Fromm-",
  },
  {
    quote:"There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author:"-Edith Wharton-",
  },
  {
    quote:"Although the world is full of suffering, it is full also of the overcoming of it.",
    author:"-Helen Keller-",
  },
  {
    quote:"Every generation laughs at the old fashions but religiously follows the new.",
    author:"-Henry David Thoreau-",
  },
  {
    quote:"Art produces ugly things which frequently become beautiful with time.",
    author:"-Jean Cocteau-",
  }
];

const quote = document.querySelector('.quotes .quote');
const author = document.querySelector('.quotes .author');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = randomQuote.quote;
author.textContent = randomQuote.author;

// todo
const todoForm = document.querySelector('#todo__form');
const todoText = todoForm.querySelector('input[type="text"]');
const todoMenu = document.querySelector('.todo__menu');
const TODOLIST_KEY = 'todoList';
let todos = [];
const TODOS_KEY = 'todos';

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newTodo = todoText.value;
  todoText.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  };
  todos.push(newTodoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  paintTodo(newTodoObj);
});

function paintTodo (newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.textContent = newTodo.text;
  const button = document.createElement('button');
  button.textContent ='✖';
  li.appendChild(span);
  li.appendChild(button);
  todoMenu.appendChild(li);
  button.addEventListener('click', deleteTodo);
}

function deleteTodo (event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
const savedTodos = localStorage.getItem(TODOS_KEY);


if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((item) => {
    paintTodo(item);
  });
}

// weather
const API_KEY = '926a0260c1acfd38c0baa8b3c67d6077';

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(function(data) {
    const temp = document.querySelector('.weather .temp');
    const condition = document.querySelector('.weather .condition');
    const city = document.querySelector('.weather .city');
    temp.textContent = `${Math.floor(data.main.temp)}º`;
    condition.textContent = data.weather[0].main;
    city.textContent = data.name;
  });
};

function error() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(success, error);