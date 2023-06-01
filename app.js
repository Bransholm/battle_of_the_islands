"use strict"

window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("Start - Javascript is running wild");
    document.querySelector("#button_start_game").addEventListener("click", startGame);
    document.querySelector("#button_game_over").addEventListener("click", startGame);
    document.querySelector("#button_level_complete").addEventListener("click", showStartScreen);
}

