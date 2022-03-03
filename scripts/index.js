const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let historyBoard = [];
let previousNextBoard = [];
let previousNextBoardTemporary = [];

let turn = 0;
let turnCount = 0;
let winCounterX = 0;
let winCounterO = 0;
let drawCounter = 0;
let endGame = false;
let blurCounter = 1;

const winCounterXDisplay = document.getElementById("win-counter-x");
const winCounterODisplay = document.getElementById("win-counter-o");
const drawCounterDisplay = document.querySelector(".in-game-player-draw");

function displayWinCounter(){
    if(winCounterX <= 1){
        winCounterXDisplay.innerHTML = `Win: ${winCounterX}`;
    } else {
        winCounterXDisplay.innerHTML = `Wins: ${winCounterX}`;
    }
    if(winCounterO <= 1){
        winCounterODisplay.innerHTML = `Win: ${winCounterO}`;
    } else {
        winCounterODisplay.innerHTML = `Wins: ${winCounterO}`;
    }
    if(drawCounter <= 1){
        drawCounterDisplay.innerHTML = `Draw: ${drawCounter}`;
    } else {
        drawCounterDisplay.innerHTML = `Draws: ${drawCounter}`;
    }
}


function flickerSelect(){
    document.querySelector(".first-move-select").classList.toggle("flicker");
}

function startPage(){
    document.querySelector(".start-player-x").classList.add("show");
    document.querySelector(".start-player-o").classList.add("show");
    document.querySelector(".game-title").classList.add("show");
    document.querySelector(".first-move-select").classList.add("show");

    setTimeout(() => {
        setInterval(() => {
            if(!playerSelectO.classList.contains("selected") && !playerSelectX.classList.contains("selected")){
                document.querySelector(".first-move-select").classList.add("show");
                flickerSelect();
                document.querySelector(".game-start").classList.remove("show");
            } else {
                document.querySelector(".first-move-select").classList.remove("show");
                document.querySelector(".game-start").classList.add("show");
            }
         }, 500);
    }, 1000);

}
startPage();

const inGameInfo = document.querySelector(".in-game-info");
const currentlyMovingPlayer = document.querySelector(".current-player-moving");
const inGamePlayerX = document.querySelector(".in-game-player-x");
const inGamePlayerO = document.querySelector(".in-game-player-o");

function checkCurrentlyMovingPlayer(){
    if(turn == 0){
        currentlyMovingPlayer.innerHTML = "Player O moves first";
    } else if(turn == 1){
        currentlyMovingPlayer.innerHTML = "Player X moves first";
    }
}

inGamePlayerX.addEventListener("click", () =>{
    if(turn == 0 && turnCount === 0){
        turn = 1;
        checkCurrentlyMovingPlayer();
    }
});

inGamePlayerO.addEventListener("click", () =>{
    if(turn == 1 && turnCount === 0){
        turn = 0;
        checkCurrentlyMovingPlayer();
    }
});


const playerSelectX = document.querySelector(".player-select-x");
const playerSelectO = document.querySelector(".player-select-o");

playerSelectX.addEventListener("click", () =>{
    if(playerSelectO.classList.contains("selected")){
        playerSelectO.classList.remove("selected");
    }
    playerSelectX.classList.toggle("selected");
    document.querySelector(".game-start").classList.add("show");
    turn = 1;
});

playerSelectO.addEventListener("click", () =>{
    if(playerSelectX.classList.contains("selected")){
        playerSelectX.classList.remove("selected");
    }
    playerSelectO.classList.toggle("selected");
    document.querySelector(".game-start").classList.add("show");
    turn = 0;
});

function removePageModal(){
    displayWinCounter();
    setTimeout(() => {
        document.getElementById("startup-modal").classList.add("hide");
    }, 1000);
    document.querySelector(".start-player-x").classList.remove("show");
    document.querySelector(".start-player-o").classList.remove("show");
    document.querySelector(".game-title").classList.remove("show");
    document.querySelector(".first-move-select").classList.remove("show");
    document.querySelector(".game-start").style.display = "none";
}


const startGameTrigger = document.querySelector(".game-start");
startGameTrigger.addEventListener("click", () =>{
    if(playerSelectO.classList.contains("selected") || playerSelectX.classList.contains("selected")){
        document.getElementById("start-audio").play();
        removePageModal();
        checkCurrentlyMovingPlayer();
    }
});

const gridTopLeft = document.querySelector(".xo-grid.top.left");
const gridTopMiddle = document.querySelector(".xo-grid.top.middle");
const gridTopRight = document.querySelector(".xo-grid.top.right");

const gridMiddleLeft = document.querySelector(".xo-grid.middle.left");
const gridCenter = document.querySelector(".xo-grid.center");
const gridMiddleRight = document.querySelector(".xo-grid.middle.right");

const gridBottomLeft = document.querySelector(".xo-grid.bottom.left");
const gridBottomMiddle = document.querySelector(".xo-grid.bottom.middle");
const gridBottomRight = document.querySelector(".xo-grid.bottom.right");

const inputXTopLeft = document.querySelector(".x-image.top-left");
const inputOTopLeft = document.querySelector(".o-image.top-left");
const inputXTopMiddle = document.querySelector(".x-image.top-middle");
const inputOTopMiddle = document.querySelector(".o-image.top-middle");
const inputXTopRight = document.querySelector(".x-image.top-right");
const inputOTopRight = document.querySelector(".o-image.top-right");

const inputXMiddleLeft = document.querySelector(".x-image.middle-left");
const inputOMiddleLeft = document.querySelector(".o-image.middle-left");
const inputXCenter = document.querySelector(".x-image.center");
const inputOCenter = document.querySelector(".o-image.center");
const inputXMiddleRight = document.querySelector(".x-image.middle-right");
const inputOMiddleRight = document.querySelector(".o-image.middle-right");

const inputXBottomLeft = document.querySelector(".x-image.bottom-left");
const inputOBottomLeft = document.querySelector(".o-image.bottom-left");
const inputXBottomMiddle = document.querySelector(".x-image.bottom-middle");
const inputOBottomMiddle = document.querySelector(".o-image.bottom-middle");
const inputXBottomRight = document.querySelector(".x-image.bottom-right");
const inputOBottomRight = document.querySelector(".o-image.bottom-right");

function removeShow(){
    document.querySelector(".ox-draw").classList.remove("show");
    document.querySelector(".o-win").classList.remove("show");
    document.querySelector(".x-win").classList.remove("show");

    inputXTopLeft.classList.remove("show");
    inputXTopMiddle.classList.remove("show");
    inputXTopRight.classList.remove("show");
    inputXMiddleLeft.classList.remove("show");
    inputXCenter.classList.remove("show");
    inputXMiddleRight.classList.remove("show");
    inputXBottomLeft.classList.remove("show");
    inputXBottomMiddle.classList.remove("show");
    inputXBottomRight.classList.remove("show");

    inputOTopLeft.classList.remove("show");
    inputOTopMiddle.classList.remove("show");
    inputOTopRight.classList.remove("show");
    inputOMiddleLeft.classList.remove("show");
    inputOCenter.classList.remove("show");
    inputOMiddleRight.classList.remove("show");
    inputOBottomLeft.classList.remove("show");
    inputOBottomMiddle.classList.remove("show");
    inputOBottomRight.classList.remove("show");
    document.getElementById("history-display").classList.add("hidden");
    document.querySelector(".history-display-hover").classList.remove("elongate");
    document.getElementById("history-display").innerHTML = "";

    previousMoveTrigger.classList.remove("show");
    nextMoveTrigger.classList.remove("show");
}

function reset(){
    removeShow();
    endGame = false;
    checkCurrentlyMovingPlayer();
    turnCount = 0;
    inGamePlayerX.classList.add("hoverable");
    inGamePlayerO.classList.add("hoverable");

    board[0][0] = "";
    board[0][1] = "";
    board[0][2] = "";
    board[1][0] = "";
    board[1][1] = "";
    board[1][2] = "";
    board[2][0] = "";
    board[2][1] = "";
    board[2][2] = "";

    historyBoard = [];
    previousNextBoard = [];
    blurCounter = 1;
};

document.getElementById("trigger").addEventListener("click", reset);


function showInputInGrid(array,input){
    if(array === "O"){
        input.classList.add("show");
    } else if(array === "X"){
        input.classList.add("show")
    }
}

function inputInBoard(array, input1, input2){
    if(turn == 0 && !input1.classList.contains("show") && !input2.classList.contains("show")){
        showInputInGrid(array, input1);
        turn = 1
    } else if(turn == 1 && !input1.classList.contains("show") && !input2.classList.contains("show")){
        showInputInGrid(array, input2);
        turn = 0
    }
}

function removeHoverable() {
    if (inGamePlayerX.classList.contains("hoverable") && inGamePlayerO.classList.contains("hoverable")){
        inGamePlayerX.classList.remove("hoverable");
        inGamePlayerO.classList.remove("hoverable");
    }
}

function previousNextBoardRender(input){
    if(endGame == false){
        previousNextBoard.push(input);
    }
}

function writingHistory(player, y, x = null){
    if(x){
        historyBoard.push(`Turn ${turnCount} 🠮 Player ${player} marked the ${y} ${x}.`);
    } else {
        historyBoard.push(`Turn ${turnCount} 🠮 Player ${player} marked the ${y}.`);
    }
    const divy = document.createElement("div");
    divy.innerHTML = historyBoard[historyBoard.length - 1];
    document.getElementById("history-display").append(divy);
}

gridTopLeft.addEventListener("click", () => {
    removeHoverable();
    if (board[0][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[0][0] = "O";
        turnCount += 1;
        inputInBoard(board[0][0], inputOTopLeft, inputXTopLeft);
        writingHistory("O", "TOP", "LEFT");
        previousNextBoardRender(inputOTopLeft);
    } else if(board[0][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[0][0] = "X";
        turnCount += 1;
        inputInBoard(board[0][0], inputOTopLeft, inputXTopLeft);
        writingHistory("X", "TOP", "LEFT");
        previousNextBoardRender(inputXTopLeft);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridTopMiddle.addEventListener("click", () =>{
    removeHoverable();
    if (board[0][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[0][1] = "O";
        turnCount += 1;
        inputInBoard(board[0][1], inputOTopMiddle, inputXTopMiddle);
        writingHistory("O", "TOP", "MIDDLE");
        previousNextBoardRender(inputOTopMiddle);
    } else if(board[0][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[0][1] = "X";
        turnCount += 1;
        inputInBoard(board[0][1], inputOTopMiddle, inputXTopMiddle);
        writingHistory("X", "TOP", "MIDDLE");
        previousNextBoardRender(inputXTopMiddle);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridTopRight.addEventListener("click", () =>{
    removeHoverable();
    if (board[0][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[0][2] = "O";
        turnCount += 1;
        inputInBoard(board[0][2], inputOTopRight, inputXTopRight);
        writingHistory("O", "TOP", "RIGHT");
        previousNextBoardRender(inputOTopRight);
    } else if(board[0][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[0][2] = "X";
        turnCount += 1;
        inputInBoard(board[0][2], inputOTopRight, inputXTopRight);
        writingHistory("X", "TOP", "RIGHT");
        previousNextBoardRender(inputXTopRight);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridMiddleLeft.addEventListener("click", () =>{
    removeHoverable();
    if (board[1][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[1][0] = "O";
        turnCount += 1;
        inputInBoard(board[1][0], inputOMiddleLeft, inputXMiddleLeft);
        writingHistory("O", "MIDDLE", "LEFT");
        previousNextBoardRender(inputOMiddleLeft);
    } else if(board[1][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[1][0] = "X";
        turnCount += 1;
        inputInBoard(board[1][0], inputOMiddleLeft, inputXMiddleLeft);
        writingHistory("X", "MIDDLE", "LEFT");
        previousNextBoardRender(inputXMiddleLeft);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridCenter.addEventListener("click", () =>{
    removeHoverable();
    if (board[1][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[1][1] = "O";
        turnCount += 1;
        inputInBoard(board[1][1], inputOCenter, inputXCenter);
        writingHistory("O", "CENTER");
        previousNextBoardRender(inputOCenter);
    } else if(board[1][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[1][1] = "X";
        turnCount += 1;
        inputInBoard(board[1][1], inputOCenter, inputXCenter);
        writingHistory("X", "CENTER");
        previousNextBoardRender(inputXCenter);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridMiddleRight.addEventListener("click", () =>{
    removeHoverable();
    if (board[1][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[1][2] = "O";
        turnCount += 1;
        inputInBoard(board[1][2], inputOMiddleRight, inputXMiddleRight);
        writingHistory("O", "MIDDLE", "RIGHT");
        previousNextBoardRender(inputOMiddleRight);
    } else if(board[1][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[1][2] = "X";
        turnCount += 1;
        inputInBoard(board[1][2], inputOMiddleRight, inputXMiddleRight);
        writingHistory("X", "MIDDLE", "RIGHT");
        previousNextBoardRender(inputXMiddleRight);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridBottomLeft.addEventListener("click", () =>{
    removeHoverable();
    if (board[2][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[2][0] = "O";
        turnCount += 1;
        inputInBoard(board[2][0], inputOBottomLeft, inputXBottomLeft);
        writingHistory("O", "BOTTOM", "LEFT");
        previousNextBoardRender(inputOBottomLeft);
    } else if(board[2][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[2][0] = "X";
        turnCount += 1;
        inputInBoard(board[2][0], inputOBottomLeft, inputXBottomLeft);
        writingHistory("X", "BOTTOM", "LEFT");
        previousNextBoardRender(inputXBottomLeft);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridBottomMiddle.addEventListener("click", () =>{
    removeHoverable();
    if (board[2][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[2][1] = "O";
        turnCount += 1;
        inputInBoard(board[2][1], inputOBottomMiddle, inputXBottomMiddle);
        writingHistory("O", "BOTTOM", "MIDDLE");
        previousNextBoardRender(inputOBottomMiddle);
    } else if(board[2][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[2][1] = "X";
        turnCount += 1;
        inputInBoard(board[2][1], inputOBottomMiddle, inputXBottomMiddle);
        writingHistory("X", "BOTTOM", "MIDDLE");
        previousNextBoardRender(inputXBottomMiddle);
    }
    checkXWin();
    checkOWin();
    checkDraw(); 
});

gridBottomRight.addEventListener("click", () =>{
    removeHoverable();
    if (board[2][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0 && endGame == false) {
        document.getElementById("o-audio").play();
        board[2][2] = "O";
        turnCount += 1;
        inputInBoard(board[2][2], inputOBottomRight, inputXBottomRight);
        writingHistory("O", "BOTTOM", "RIGHT");
        previousNextBoardRender(inputOBottomRight);
    } else if(board[2][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1 && endGame == false){
        document.getElementById("x-audio").play();
        board[2][2] = "X";
        turnCount += 1;
        inputInBoard(board[2][2], inputOBottomRight, inputXBottomRight);
        writingHistory("X", "BOTTOM", "RIGHT");
        previousNextBoardRender(inputXBottomRight);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

const previousMoveTrigger = document.querySelector(".previous-move-trigger");
const nextMoveTrigger = document.querySelector(".next-move-trigger");

function showPreviousNextTriggers(){
    if(endGame == true){
        previousMoveTrigger.classList.add("show");
    }
}

function checkOWin(){
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][0] == "O" && board[1][0] == "O" && board [2][0] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][1] == "O" && board[1][1] == "O" && board [2][1] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][2] == "O" && board[1][2] == "O" && board [2][2] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O" && !endGame){
        document.querySelector(".o-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    }

}

function checkXWin(){
    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][0] == "X" && board[1][0] == "X" && board [2][0] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][1] == "X" && board[1][1] == "X" && board [2][1] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][2] == "X" && board[1][2] == "X" && board [2][2] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    } else if(board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X" && !endGame){
        document.querySelector(".x-win").classList.add("show");
        endGame = true;
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    }
}

function checkDraw(){
    if(turnCount == 9 && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && !endGame){
        document.querySelector(".ox-draw").classList.add("show");
        endGame = true;
        document.getElementById("draw-audio").play();
        drawCounter += 1;
        displayWinCounter();
        showPreviousNextTriggers();
    }

}

const moveHistoryTrigger = document.querySelector(".history-display-hover");

moveHistoryTrigger.addEventListener("click", ()=>{
    moveHistoryTrigger.classList.toggle("elongate");
    document.getElementById("history-display").classList.toggle("hidden");
});

const collection = document.getElementById("history-display").children;

function blurMove(num, color){
    collection[collection.length - num].style.color = color;
}

previousMoveTrigger.addEventListener("click", ()=>{
    previousNextBoard[previousNextBoard.length - 1].classList.remove("show");
    previousNextBoardTemporary.push(previousNextBoard.pop());
    if(previousNextBoard.length == 1){
        previousMoveTrigger.classList.remove("show");
    }
    if(previousNextBoardTemporary.length !== 0){
        nextMoveTrigger.classList.add("show");
    }
    blurMove(blurCounter, "gray");
    blurCounter += 1;
});

nextMoveTrigger.addEventListener("click", ()=>{
    previousNextBoardTemporary[previousNextBoardTemporary.length - 1].classList.add("show");
    previousNextBoard.push(previousNextBoardTemporary.pop());
    if(previousNextBoardTemporary.length == 0){
        nextMoveTrigger.classList.remove("show");
    }
    if(previousNextBoard.length !== 1){
        previousMoveTrigger.classList.add("show");
    }
    blurCounter -= 1;
    blurMove(blurCounter, "white");
});