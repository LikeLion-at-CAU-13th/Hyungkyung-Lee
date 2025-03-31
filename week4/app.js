// 1. js 파일에서 접근해야 하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const resultText = document.getElementById("display-result");
const myScore = document.getElementsByClassName("score my-score");
const comScore = document.getElementsByClassName("score computer-score");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const resetBtn = document.getElementById("reset-button");
const nightBtn = document.getElementById("day-night");
const body = document.querySelector('body');
const changeBorder = document.getElementById("contents-wrapper");
const changeLine = document.getElementsByClassName("title");


// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetScore);
nightBtn.addEventListener("click", dayNight);

// 3. displayMyChoice 함수 작성
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 돌리는 컴퓨터 초이스
function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이는 함수

function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 5-1. 결과를 판별하는 함수

function displayResult(myChoice, comChoice) {

    if (myChoice === comChoice) {
        result = "draw";
    } else if (myChoice === 'rock') {
        if (comChoice === 'scissors') {
            result = "win";
        } else {
            result = "lose";
        }
    } else if (myChoice === 'scissors') {
        if (comChoice === 'rock') {
            result = "lose";
        } else {
            result = "win";
        }
    } else {
        if (comChoice === 'rock') {
            result = "win";
        } else {
            result = "lose";
        }
    }

    if (result === "win") {
        resultText.innerText = "win";
        myScore[0].innerText = Number(myScore[0].innerText) + 1;
    } else if (result === "draw") {
        resultText.innerText = "draw";
    } else {
        resultText.innerText = "lose";
        comScore[0].innerText = Number(comScore[0].innerText) + 1;
    }
}

// 6. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);

    displayResult(myChoice, comChoice);
}

// 7. reset 함수

function resetScore() {
    myScore[0].innerText = 0;
    comScore[0].innerText = 0;
    resultText.innerText = '';

    myHandText.innerText = '';
    myHandIcon.className = '';
    
    computerText.innerText = '';
    computerIcon.className = '';
}

// 8. day_night 함수

function dayNight() {
    if (nightBtn.value === "night") {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        changeBorder.style.border = '4px solid white';
        changeLine[0].style.borderBottom = '3px solid white';
        changeLine[1].style.borderBottom = '3px solid white';
        nightBtn.value = "day";
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        changeBorder.style.border = '4px solid black';
        changeLine[0].style.borderBottom = '3px solid black';
        changeLine[1].style.borderBottom = '3px solid black';
        nightBtn.value = "night";
    }
}