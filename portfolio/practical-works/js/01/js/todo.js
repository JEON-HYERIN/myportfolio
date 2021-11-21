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