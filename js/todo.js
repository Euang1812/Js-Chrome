const $todoForm = document.querySelector('#todo-form');
//const $toDoInput = $todoForm.querySelector('input');
const $toDoInput = document.querySelector('#todo-form input');
const $toDoList = document.querySelector('#toDoList');

let toDos = [];

function saveToDos(){
    localStorage.setItem('todos',JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const span = document.createElement('span');
  const button = document.createElement('button');
  const li = document.createElement('li');
  li.id = newToDo.id;
  span.textContent = newToDo.text;
  button.textContent = 'x';
  button.addEventListener('click',deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  $toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = $toDoInput.value;
  $toDoInput.value = '';
  const newToDoObj ={
    text : newTodo,
    id : Date.now(),
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

$todoForm.addEventListener('submit', handleToDoSubmit);

//savedToDos = [1,2,3,4,5];
// function sayHello(a){
//   console.log('this is the turn off ',a);
// }

const savedToDos = localStorage.getItem('todos');
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // console.log(parsedToDos);

  // parsedToDos.forEach(sayHello); 별도로 지정하지 않을시 모든 값을 갖는다.
  parsedToDos.forEach(paintToDo);
}