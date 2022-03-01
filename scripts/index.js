const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let turn = 0;
let turnCount = 0;

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
    turnCount = 0;

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

gridTopLeft.addEventListener("click", () => {
    if (board[0][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[0][0] = "O";
        turnCount += 1;
        inputInBoard(board[0][0], inputOTopLeft, inputXTopLeft);
    } else if(board[0][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[0][0] = "X";
        turnCount += 1;
        inputInBoard(board[0][0], inputOTopLeft, inputXTopLeft);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridTopMiddle.addEventListener("click", () =>{
    if (board[0][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[0][1] = "O";
        turnCount += 1;
        inputInBoard(board[0][1], inputOTopMiddle, inputXTopMiddle);
    } else if(board[0][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[0][1] = "X";
        turnCount += 1;
        inputInBoard(board[0][1], inputOTopMiddle, inputXTopMiddle);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridTopRight.addEventListener("click", () =>{
    if (board[0][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[0][2] = "O";
        turnCount += 1;
        inputInBoard(board[0][2], inputOTopRight, inputXTopRight);
    } else if(board[0][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[0][2] = "X";
        turnCount += 1;
        inputInBoard(board[0][2], inputOTopRight, inputXTopRight);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridMiddleLeft.addEventListener("click", () =>{
    if (board[1][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[1][0] = "O";
        turnCount += 1;
        inputInBoard(board[1][0], inputOMiddleLeft, inputXMiddleLeft);
    } else if(board[1][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[1][0] = "X";
        turnCount += 1;
        inputInBoard(board[1][0], inputOMiddleLeft, inputXMiddleLeft);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridCenter.addEventListener("click", () =>{
    if (board[1][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[1][1] = "O";
        turnCount += 1;
        inputInBoard(board[1][1], inputOCenter, inputXCenter);
    } else if(board[1][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[1][1] = "X";
        turnCount += 1;
        inputInBoard(board[1][1], inputOCenter, inputXCenter);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridMiddleRight.addEventListener("click", () =>{
    if (board[1][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[1][2] = "O";
        turnCount += 1;
        inputInBoard(board[1][2], inputOMiddleRight, inputXMiddleRight);
    } else if(board[1][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[1][2] = "X";
        turnCount += 1;
        inputInBoard(board[1][2], inputOMiddleRight, inputXMiddleRight);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridBottomLeft.addEventListener("click", () =>{
    if (board[2][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[2][0] = "O";
        turnCount += 1;
        inputInBoard(board[2][0], inputOBottomLeft, inputXBottomLeft);
    } else if(board[2][0] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[2][0] = "X";
        turnCount += 1;
        inputInBoard(board[2][0], inputOBottomLeft, inputXBottomLeft);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

gridBottomMiddle.addEventListener("click", () =>{
    if (board[2][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[2][1] = "O";
        turnCount += 1;
        inputInBoard(board[2][1], inputOBottomMiddle, inputXBottomMiddle);
    } else if(board[2][1] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[2][1] = "X";
        turnCount += 1;
        inputInBoard(board[2][1], inputOBottomMiddle, inputXBottomMiddle);
    }
    checkDraw();
    checkXWin();
    checkOWin();
});

gridBottomRight.addEventListener("click", () =>{
    if (board[2][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 0) {
        document.getElementById("o-audio").play();
        board[2][2] = "O";
        turnCount += 1;
        inputInBoard(board[2][2], inputOBottomRight, inputXBottomRight);
    } else if(board[2][2] == "" && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show") && turn == 1){
        document.getElementById("x-audio").play();
        board[2][2] = "X";
        turnCount += 1;
        inputInBoard(board[2][2], inputOBottomRight, inputXBottomRight);
    }
    checkDraw();
    checkOWin();
    checkXWin();
});

function checkOWin(){
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[0][0] == "O" && board[1][0] == "O" && board [2][0] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[0][1] == "O" && board[1][1] == "O" && board [2][1] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[0][2] == "O" && board[1][2] == "O" && board [2][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"){
        document.querySelector(".o-win").classList.add("show");
    } else if(board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"){
        document.querySelector(".o-win").classList.add("show");
    }
}

function checkXWin(){
    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[0][0] == "X" && board[1][0] == "X" && board [2][0] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[0][1] == "X" && board[1][1] == "X" && board [2][1] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[0][2] == "X" && board[1][2] == "X" && board [2][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"){
        document.querySelector(".x-win").classList.add("show");
    } else if(board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X"){
        document.querySelector(".x-win").classList.add("show");
    }
}

function checkDraw(){
    if(turnCount == 9 && !document.querySelector(".o-win").classList.contains("show") && !document.querySelector(".x-win").classList.contains("show")){
        document.querySelector(".ox-draw").classList.add("show");
    }
}

function startPage(){
    document.querySelector(".start-player-x").classList.add("show");
    document.querySelector(".start-player-o").classList.add("show");
    document.querySelector(".game-title").classList.add("show");
    document.querySelector(".first-move-select").classList.add("show");
}


document.addEventListener("DOMContentLoaded", setTimeout(startPage, 1000));