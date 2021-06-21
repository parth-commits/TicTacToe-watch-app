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



// On click function
function clicked(num) {
    const col = num % 3;
    const row = Math.floor(num/3);

    if (board[row][col] === '') {
        boxes[num].appendChild(turnElem);
        board[row][col] = turn;
        if (isWinner(turn)) {
            increaseScore(turn);
            deleteAllInput();
            turn = 'x';
            turnElem = x.cloneNode(true);
        } else {
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
// delete later: board[row][column]
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