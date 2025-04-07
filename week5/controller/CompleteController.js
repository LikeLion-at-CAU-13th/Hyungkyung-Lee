import Complete from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController {
    constructor(todoText) {
        this.newComplete = new Complete(todoText);

        this.delBtnNode = this.newComplete.getDelBtn();
        this.recBtnNode = this.newComplete.getRecoverBtn();
        this.innerNode = this.newComplete.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delComplete();
        })
        this.recBtnNode.addEventListener('click', () => {
            this.recoverTodo();
        })
    }

    addToComplete(){
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.newComplete.addRow());
    }

    delComplete(){
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.newComplete.getRow());
    }

    recoverTodo(){
        const todoController = new TodoController(this.innerNode.textContent);
        todoController.addTodo();
        this.delComplete();
    }
}

export default CompleteController;