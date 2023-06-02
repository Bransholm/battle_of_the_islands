"use strict"

window.addEventListener("load", start)

let points = 0;
let lives = 0;

function start() {
    console.log("Start - Javascript is running wild");
    showStartScreen();
    document.querySelector("#button_start_game").addEventListener("click", startGame);
    document.querySelector("#button_game_over").addEventListener("click", startGame);
    document.querySelector("#button_level_complete").addEventListener("click", showStartScreen);
    startRocket();
    document.querySelector("#rocket_container").addEventListener("mousedown", clickRocket);
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

function startRocket() {
    document.querySelector("#rocket_container").classList.add("falling");
    document.querySelector("#rocket_container").classList.add("position1");
}

function clickRocket() {
    const rocket = this
    // document.querySelector("#rocket_container").removeEventListener("mousedown", clickRocket);

    rocket.removeEventListener("mousedown", clickRocket);
    console.log("Rocket clicked");
}