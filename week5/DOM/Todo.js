import Button from "./Button.js";
import Div from "./Div.js";


class Todo {
    constructor(todoText) {
        this.row = new Div('', 'row').node;

        this.checkedImg = new Image(30, 30);
        this.checkedImg.src = '/Hyungkyung-Lee/week5/assets/checked.png';
        this.delImg = new Image(30, 30);
        this.delImg.src = '/Hyungkyung-Lee/week5/assets/delete_todo.png';

        this.innerText = new Div(todoText, 'text-box');
        this.completeBtn = new Button('', 'complete-btn');
        this.completeBtn.node.appendChild(this.checkedImg);
        this.delBtn = new Button('', 'del-btn');
        this.delBtn.node.appendChild(this.delImg);
    }

    //만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    //각 요소의 getter 메서드를
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.innerText.node;
    }
}

export default Todo;