// Game board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

// input boxes
const boxes = Array.prototype.slice.call(document.getElementsByClassName('tap-box'));

// X
const x = document.createElement('div');
const xline1 = document.createElement('div');
const xline2 = document.createElement('div');
xline1.classList.add('x-line-1');
xline2.classList.add('x-line-2');
x.classList.add('x');
x.appendChild(xline1);
x.appendChild(xline2);

// O
const o = document.createElement('div');
o.classList.add('o');

// Start shape
let turn = 'x';

// Start element
let turnElem = x.cloneNode(true);

// X score element
let xScore = document.getElementById('x-score');

// o score element
let oScore = document.getElementById('o-score');

// main thing
let page = document.getElementById('game-page');

// html board
let gameTable = document.getElementById('landing-table');

// the board lines
let vertical1 = document.createElement('div');
vertical1.classList.add('board-vertical-line');
vertical1.classList.add('line');
vertical1.id = 'vertical-1';

let vertical2 = document.createElement('div');
vertical2.classList.add('board-vertical-line');
vertical2.classList.add('line');
vertical2.id = 'vertical-2';

let horizontal1 = document.createElement('div');
horizontal1.classList.add('board-horizontal-line');
horizontal1.classList.add('line');
horizontal1.id = 'horizontal-1';

let horizontal2 = document.createElement('div');
horizontal2.classList.add('board-horizontal-line');
horizontal2.classList.add('line');
horizontal2.id = 'horizontal-2';

// the board html
let boardHTML = document.getElementById('landing-table');

/*
<div class="board-vertical-line line" id="vertical-1"></div>
<div class="board-vertical-line line" id="vertical-2"></div>
<div class="board-horizontal-line line" id="horizontal-1"></div>
<div class="board-horizontal-line line" id="horizontal-2"></div>

*/



// On click function
async function clicked(num) {
    const col = num % 3;
    const row = Math.floor(num/3);

    if (board[row][col] === '') {
        boxes[num].appendChild(turnElem);
        board[row][col] = turn;
        if (isWinner(turn)) {
            await new Promise(r => setTimeout(r, 2000));
            increaseScore(turn);
            await deleteAllInput();
            await boardAppear();
        } else {
            await new Promise(r => setTimeout(r, 400));
            rotateBoard(turn);
            if (turn === 'x') {
                turn = 'o';
                turnElem = o.cloneNode(true);
            } else {
                turn = 'x';
                turnElem = x.cloneNode(true);
            }
        }
    }
}

// delete all x's and o's
async function deleteAllInput() {
    gameTable.style.animation = "boardDisappear 0.5s ease-in-out";
    gameTable.style.animationFillMode = "forwards";
    await new Promise(r => setTimeout(r, 600));
    let lines = document.getElementsByClassName('line');
    lines = Array.prototype.slice.call(lines);
    for (let i = 0; i < lines.length; i++) {
        lines[i].remove();
    }
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].hasChildNodes()) {
            boxes[i].removeChild(boxes[i].lastChild); 
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = '';            
        }     
    }
}

// checks if there is a winner, returns true if there is, else false
function isWinner(turn) {
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] === turn) {
        console.log("1");
        return true;
    } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] === turn) {
        console.log("2");
        return true;
    } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] === turn) {
        console.log("3");
        return true;
    } else if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] === turn) {
        console.log("4");
        return true;
    } else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] === turn) {
        console.log("5");
        return true;
    } else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] === turn) {
        console.log("6");
        return true;
    } else if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] === turn) {
        console.log("7");
        return true;
    } else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] === turn) {
        console.log("8");
        return true;
    } else {
        return false;
    }
}

// increase score
function increaseScore (turn) {
    if (turn === 'x') {
        xScore.innerHTML = parseInt(xScore.innerHTML) + 1;
    } else {
        oScore.innerHTML = parseInt(oScore.innerHTML) + 1;
    }
}

// turn board
function rotateBoard(turn) {
    if (turn === 'x') {
        page.style.animation = "rotateToO 1s ease-in-out";
        page.style.animationFillMode = "forwards";
    } else {
        page.style.animation = "rotateToX 1s ease-in-out";
        page.style.animationFillMode = "forwards";
    }
}

// board Appear
async function boardAppear() {
    // animation: verticalAnim 1s ease-out;
    gameTable.style.animation = "boardAppear 0.5s ease-in-out";
    boardHTML.appendChild(vertical1.cloneNode(true));
    boardHTML.appendChild(vertical2.cloneNode(true));
    boardHTML.appendChild(horizontal1.cloneNode(true));
    boardHTML.appendChild(horizontal2.cloneNode(true));
    gameTable.style.animationFillMode = "forwards";
    document.getElementById('vertical-1').style.animation = "verticalAnim 1s ease-out;";
    document.getElementById('vertical-2').style.animation = "verticalAnim 1s ease-out;";
    document.getElementById('horizontal-1').style.animation = "horizontalAnim 1s ease-out;";
    document.getElementById('horizontal-2').style.animation = "horizontalAnim 1s ease-out;";
    await new Promise(r => setTimeout(r, 1000));
}