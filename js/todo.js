const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input"); 
const todolist = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function onTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    saveToDos();
}

todoForm.addEventListener("submit",onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos!==null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}