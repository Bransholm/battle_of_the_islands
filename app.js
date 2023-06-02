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
    // showLevelComplete();
}

function startGame() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  console.log("Show start screen");

    startRocket();
    document.querySelector("#rocket_container").addEventListener("mousedown", clickRocket);
    document.querySelector("#rocket_container").addEventListener("animationiteration", restartRocket);
    showPoints();
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
    rocket.classList.add("paused");
    rocket.querySelector("img").classList.add("zoom_in");
    rocket.addEventListener("animationend", rocketGone);
    console.log("Rocket clicked");
    addPoins();
}

function rocketGone() {
    this.removeEventListener("animationend", rocketGone)
    this.querySelector("img").classList.remove("zoom_in");
    this.classList.remove("paused");
    this.addEventListener("mousedown", clickRocket);
    restartRocket.call(this);
}

function restartRocket() {
    this.classList.remove("falling");
    this.offsetWidth;
    this.classList.add("falling");
    this.classList.remove("position1", "position2", "position3", "position4", "position5");
    const calculation = Math.ceil(Math.random() * 5);
    this.classList.add(`position${calculation}`);
}

function addPoins() {
    points = points + 200;
    showPoints();
}

function showPoints() {
    document.querySelector("#score_board").textContent = `Score: ${points}`;
}

// HUSK
