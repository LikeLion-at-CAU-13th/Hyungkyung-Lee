import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(todoText) {
        this.row = new Div('', 'row').node;

        this.recoverImg = new Image(30, 30);
        this.recoverImg.src = '/Hyungkyung-Lee/week5/assets/archive.png';
        this.delDoneImg = new Image(30, 30);
        this.delDoneImg.src = '/Hyungkyung-Lee/week5/assets/delete_complete.png';

        this.innerText = new Div(todoText, 'text-box');
        this.recoverBtn = new Button('', 'complete-btn');
        this.recoverBtn.node.appendChild(this.recoverImg);
        this.delBtn = new Button('', 'del-btn');
        this.delBtn.node.appendChild(this.delDoneImg);
    }

    //만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.recoverBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    //각 요소의 getter 메서드를
    getRow(){
        return this.row;
    }
    getRecoverBtn(){
        return this.recoverBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.innerText.node;
    }
}

export default Complete;