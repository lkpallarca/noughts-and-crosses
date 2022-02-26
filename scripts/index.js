const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let topLeft = board[0][0];
const topMiddle = board[0][1];
const topRight = board[0][2];
const middleLeft = board[1][0];
const center = board[1][1];
const middleRight = board[1][2];
const bottomLeft = board[2][0];
const bottomMiddle = board[2][1];
const bottomRight = board[2][2];
let turn = 0;

const gridTopLeft = document.querySelector(".xo-grid.top.left");
const gridTopMiddle = document.querySelector(".xo-grid.top.middle");
const gridTopRight = document.querySelector(".xo-grid.top.right");
const gridMiddleLeft = document.querySelector(".xo-grid.middle.left");
const gridCenter = document.querySelector(".xo-grid.center");
const gridMiddleRight = document.querySelector(".xo-grid.middle.right");
const gridBottomLeft = document.querySelector(".xo-grid.bottom.left");
const gridBottomMiddle = document.querySelector(".xo-grid.bottom.middle");
const gridBottomRight = document.querySelector(".xo-grid.bottom.right");

function reset(){
    document.querySelector(".o-image.top-middle").classList.remove("show");
    document.querySelector(".x-image.top-middle").classList.remove("show");
}

gridTopLeft.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.top-left").classList.add("show");
        board[0][0] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.top-left").classList.add("show");
        board[0][0] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridTopMiddle.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.top-middle").classList.add("show");
        board[0][1] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.top-middle").classList.add("show");
        board[0][1] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridTopRight.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.top-right").classList.add("show");
        board[0][2] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.top-right").classList.add("show");
        board[0][2] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridMiddleLeft.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.middle-left").classList.add("show");
        board[1][0] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.middle-left").classList.add("show");
        board[1][0] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridCenter.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.center").classList.add("show");
        board[1][1] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.center").classList.add("show");
        board[1][1] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridMiddleRight.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.middle-right").classList.add("show");
        board[1][2] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.middle-right").classList.add("show");
        board[1][2] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridBottomLeft.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.bottom-left").classList.add("show");
        board[2][0] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.bottom-left").classList.add("show");
        board[2][0] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridBottomMiddle.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.bottom-middle").classList.add("show");
        board[2][1] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.bottom-middle").classList.add("show");
        board[2][1] = "X";
        turn = 0;
    } else {
        reset();
    }
});

gridBottomRight.addEventListener("click", ()=>{
    if(turn == 0){
        document.querySelector(".o-image.bottom-right").classList.add("show");
        board[2][2] = "O";
        turn = 1;
    } else if(turn == 1) {
        document.querySelector(".x-image.bottom-right").classList.add("show");
        board[2][2] = "X";
        turn = 0;
    } else {
        reset();
    }
});

console.log(board);
