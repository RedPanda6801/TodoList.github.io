const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.list');

let arrayTodo = [];
const TODO_KEY = 'todo_key';

const saveNewTodo = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(arrayTodo));
}

const delTodo = (e) => {
    const btn = e.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodos = arrayTodo.filter(toDo=>{
        return toDo.id != parseInt(li.id);
    });
    arrayTodo = cleanTodos;
    saveNewTodo();
}

const displayTodos = (text) => {
    if(arrayTodo.length > 10) return;
    const toDo = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.style.blockSize = "20px";
    delBtn.style.backgroundColor = "transparent";
    delBtn.innerText = "✂️";
    delBtn.addEventListener("click",delTodo);
    const newId = arrayTodo.length+1;
    span.innerText=text;
    toDo.id = newId;
    toDo.appendChild(span);
    toDo.appendChild(delBtn);
    todoList.appendChild(toDo);
    const todoObj = {
        text,
        id: newId
    };
    arrayTodo.push(todoObj);
    saveNewTodo();
}

const handleSubmit = (e) => {
    e.preventDefault();
    const todo = todoInput.value;
    if(todo === '') return;
    displayTodos(todo);
    todoInput.value = '';
}

const loadTodos = () => {
    const loadArray = localStorage.getItem(TODO_KEY);
    if(loadArray !== null){
        const parseTodos = JSON.parse(loadArray);
        parseTodos.forEach(toDo => {
            displayTodos(toDo.text);
        });
    }
}

const init = () => {
    loadTodos();
    todoForm.addEventListener('submit',handleSubmit);
}

init();