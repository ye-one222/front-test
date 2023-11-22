const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); //id가 login-form인 요소 내부의 input 요소
const greeting = document.querySelector("#greeting");
const tempTodoForm = document.querySelector("#todo-form"); //이렇게 말고 todo.js와 연동할 수 있는 방법은 없나?
const tempTodolist = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onTodoSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; //왜 그냥 value가 아니라 바뀌는거징
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`HELLO ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    tempTodoForm.classList.remove(HIDDEN_CLASSNAME);
    tempTodolist.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onTodoSubmit);
}else{
    paintGreetings(savedUsername);
}