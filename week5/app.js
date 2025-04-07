import TodoController from "./controller/TodoController.js";
import CompleteController from "./controller/CompleteController.js";


const addBtn = document.getElementById('input-button');
const input = document.querySelector('input');
const allComBtn = document.getElementById('all-com-button');
const allDelBtn = document.getElementById('all-del-button');
const allDelTodoBtn = document.getElementById('all-del-todo-button');
const allArchiveBtn = document.getElementById('all-archive-button');
const todoList = document.getElementById('to-do-list');
const completeList = document.getElementById('complete-list');


addBtn.addEventListener('click', () => {
    const todoController = new TodoController(input.value);
    todoController.addTodo();
})

allComBtn.addEventListener('click', ()=> {
    const todoThings = Array.from(todoList.children).filter(child => !child.classList.contains('title'));
    todoThings.forEach(thing => {
        let allComplete = new CompleteController(thing.textContent);
        allComplete.addToComplete();
        todoList.removeChild(thing);
    });
})

allDelBtn.addEventListener('click', ()=> {
    const completeThings = Array.from(completeList.children).filter(child => !child.classList.contains('title'));
    completeThings.forEach(thing => {
        completeList.removeChild(thing);
    });
})

allDelTodoBtn.addEventListener('click', ()=> {
    const todoThings = Array.from(todoList.children).filter(child => !child.classList.contains('title'));
    todoThings.forEach(thing => {
        todoList.removeChild(thing);
    });
})

allArchiveBtn.addEventListener('click', ()=> {
    const completeThings = Array.from(completeList.children).filter(child => !child.classList.contains('title'));
    completeThings.forEach(thing => {
        let allTodo = new TodoController(thing.textContent);
        allTodo.addTodo();
        completeList.removeChild(thing);
    });
})
