"use strict"

window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("Start - Javascript is running wild");
    document.querySelector("#button_start_game").addEventListener("click", startGame);
    document.querySelector("#button_game_over").addEventListener("click", startGame);
    document.querySelector("#button_level_complete").addEventListener("click", showStartScreen);
    // showLevelComplete();
}

function startGame() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  console.log("Show start screen");
}

function showStartScreen () {
    document.querySelector("#start").classList.remove("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    console.log("Show start screen");
}

function showLevelComplete () {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  console.log("Show game over screen");
}