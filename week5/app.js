import TodoController from "./controller/TodoController.js";
import CompleteController from "./controller/CompleteController.js";


const addBtn = document.getElementById('input-button');
const input = document.querySelector('input');
const allComBtn = document.getElementById('all-com-button');
const todoList = document.getElementById('to-do-list');


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
