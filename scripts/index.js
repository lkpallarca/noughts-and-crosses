const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let turn = 0;
let turnCount = 0;
let historyBoard = [];
let winCounterX = 0;
let winCounterO = 0;
let drawCounter = 0;

const winCounterXDisplay = document.getElementById("win-counter-x");
const winCounterODisplay = document.getElementById("win-counter-o");
const drawCounterDisplay = document.querySelector(".in-game-player-draw");

function displayWinCounter(){
    winCounterXDisplay.innerHTML = `Wins: ${winCounterX}`;
    winCounterODisplay.innerHTML = `Wins: ${winCounterO}`;
    drawCounterDisplay.innerHTML = `Draws: ${drawCounter}`;
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

function reset(){
    document.querySelector(".history-display-hover").classList.remove("elongate");
    document.getElementById("history-display").innerHTML = "";
    document.getElementById("history-display").classList.add("hidden");
    checkCurrentlyMovingPlayer();
    turnCount = 0;
    inGamePlayerX.classList.add("hoverable");
    inGamePlayerO.classList.add("hoverable");
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

function writingHistory(player, y, x = null){
    if(x){
        historyBoard.unshift(`Player ${player} marked the ${y} ${x}.`);
    } else {
        historyBoard.unshift(`Player ${player} marked the ${y}.`);
    }
    const divy = document.createElement("div");
    divy.innerHTML = historyBoard[0];
    document.getElementById("history-display").append(divy);
}

gridTopLeft.addEventListener("click", () => {
    removeHoverable();
    if (board[0][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[0][0] = "O";
        writingHistory("O", "TOP", "LEFT");
        turnCount += 1;
        inputInBoard(board[0][0], inputOTopLeft, inputXTopLeft);
    } else if(board[0][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[0][0] = "X";
        writingHistory("X", "TOP", "LEFT");
        turnCount += 1;
        inputInBoard(board[0][0], inputOTopLeft, inputXTopLeft);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridTopMiddle.addEventListener("click", () =>{
    removeHoverable();
    if (board[0][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[0][1] = "O";
        writingHistory("O", "TOP", "MIDDLE");
        turnCount += 1;
        inputInBoard(board[0][1], inputOTopMiddle, inputXTopMiddle);
    } else if(board[0][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[0][1] = "X";
        writingHistory("X", "TOP", "MIDDLE");
        turnCount += 1;
        inputInBoard(board[0][1], inputOTopMiddle, inputXTopMiddle);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridTopRight.addEventListener("click", () =>{
    removeHoverable();
    if (board[0][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[0][2] = "O";
        writingHistory("O", "TOP", "RIGHT");
        turnCount += 1;
        inputInBoard(board[0][2], inputOTopRight, inputXTopRight);
    } else if(board[0][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[0][2] = "X";
        writingHistory("X", "TOP", "RIGHT");
        turnCount += 1;
        inputInBoard(board[0][2], inputOTopRight, inputXTopRight);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridMiddleLeft.addEventListener("click", () =>{
    removeHoverable();
    if (board[1][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[1][0] = "O";
        writingHistory("O", "MIDDLE", "LEFT");
        turnCount += 1;
        inputInBoard(board[1][0], inputOMiddleLeft, inputXMiddleLeft);
    } else if(board[1][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[1][0] = "X";
        writingHistory("X", "MIDDLE", "LEFT");
        turnCount += 1;
        inputInBoard(board[1][0], inputOMiddleLeft, inputXMiddleLeft);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridCenter.addEventListener("click", () =>{
    removeHoverable();
    if (board[1][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[1][1] = "O";
        writingHistory("O", "CENTER");
        turnCount += 1;
        inputInBoard(board[1][1], inputOCenter, inputXCenter);
    } else if(board[1][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[1][1] = "X";
        writingHistory("X", "CENTER");
        turnCount += 1;
        inputInBoard(board[1][1], inputOCenter, inputXCenter);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridMiddleRight.addEventListener("click", () =>{
    removeHoverable();
    if (board[1][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[1][2] = "O";
        writingHistory("O", "MIDDLE", "RIGHT");
        turnCount += 1;
        inputInBoard(board[1][2], inputOMiddleRight, inputXMiddleRight);
    } else if(board[1][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[1][2] = "X";
        writingHistory("X", "MIDDLE", "RIGHT");
        turnCount += 1;
        inputInBoard(board[1][2], inputOMiddleRight, inputXMiddleRight);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridBottomLeft.addEventListener("click", () =>{
    removeHoverable();
    if (board[2][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[2][0] = "O";
        writingHistory("O", "BOTTOM", "LEFT");
        turnCount += 1;
        inputInBoard(board[2][0], inputOBottomLeft, inputXBottomLeft);
    } else if(board[2][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[2][0] = "X";
        writingHistory("X", "BOTTOM", "LEFT");
        turnCount += 1;
        inputInBoard(board[2][0], inputOBottomLeft, inputXBottomLeft);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

gridBottomMiddle.addEventListener("click", () =>{
    removeHoverable();
    if (board[2][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[2][1] = "O";
        writingHistory("O", "BOTTOM", "MIDDLE");
        turnCount += 1;
        inputInBoard(board[2][1], inputOBottomMiddle, inputXBottomMiddle);
    } else if(board[2][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[2][1] = "X";
        writingHistory("X", "BOTTOM", "MIDDLE");
        turnCount += 1;
        inputInBoard(board[2][1], inputOBottomMiddle, inputXBottomMiddle);
    }
    checkXWin();
    checkOWin();
    checkDraw(); 
});

gridBottomRight.addEventListener("click", () =>{
    removeHoverable();
    if (board[2][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[2][2] = "O";
        writingHistory("O", "BOTTOM", "RIGHT");
        turnCount += 1;
        inputInBoard(board[2][2], inputOBottomRight, inputXBottomRight);
    } else if(board[2][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[2][2] = "X";
        writingHistory("X", "BOTTOM", "RIGHT");
        turnCount += 1;
        inputInBoard(board[2][2], inputOBottomRight, inputXBottomRight);
    }
    checkOWin();
    checkXWin();
    checkDraw();
});

function checkOWin(){
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[0][0] == "O" && board[1][0] == "O" && board [2][0] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[0][1] == "O" && board[1][1] == "O" && board [2][1] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[0][2] == "O" && board[1][2] == "O" && board [2][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    } else if(board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"){
        document.querySelector(".o-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterO += 1;
        displayWinCounter();
    }
}

function checkXWin(){
    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[0][0] == "X" && board[1][0] == "X" && board [2][0] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[0][1] == "X" && board[1][1] == "X" && board [2][1] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[0][2] == "X" && board[1][2] == "X" && board [2][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    } else if(board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X"){
        document.querySelector(".x-win").classList.add("show");
        document.getElementById("win-audio").play();
        winCounterX += 1;
        displayWinCounter();
    }
}

function checkDraw(){
    if(turnCount == 9 && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show")){
        document.querySelector(".ox-draw").classList.add("show");
        document.getElementById("draw-audio").play();
        drawCounter += 1;
        displayWinCounter();
    }
}

const moveHistoryTrigger = document.querySelector(".history-display-hover");

moveHistoryTrigger.addEventListener("click", ()=>{
    moveHistoryTrigger.classList.toggle("elongate");
    document.getElementById("history-display").classList.toggle("hidden");
})