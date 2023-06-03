"use strict"

window.addEventListener("load", start);

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
    startBird();
    showPoints();
    resetGameVariables();
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

function resetGameVariables() {
    points = 0;
    lives = 3;
}

// Rocket
function startRocket() {
    document.querySelector("#rocket_container").classList.add("rocket_falling");
    document.querySelector("#rocket_container").classList.add("rocket_position8");
}

function clickRocket() {
    const rocket = this;
    // document.querySelector("#rocket_container").removeEventListener("mousedown", clickRocket);
    rocket.removeEventListener("mousedown", clickRocket);
    rocket.classList.add("paused");
    rocket.querySelector("img").classList.add("zoom_in");
    rocket.addEventListener("animationend", rocketGone);
    console.log("Rocket clicked");
    addPoins();
}

function rocketGone() {
    this.removeEventListener("animationend", rocketGone);
    this.querySelector("img").classList.remove("zoom_in");
    this.classList.remove("paused");
    this.addEventListener("mousedown", clickRocket);
    restartRocket.call(this);
}

function restartRocket() {
    this.classList.remove("rocket_falling");
    this.offsetWidth;
    this.classList.add("rocket_falling");
    this.classList.remove("rocket_position1", "rocket_position2", "rocket_position3", "rocket_position4",
        "rocket_position5", "rocket_position6", "rocket_position7", "rocket_position8", "rocket_position9",
        "rocket_position10", "rocket_position11", "rocket_position12", "rocket_position13", "rocket_position14",
        "rocket_position15", "rocket_position16", "rocket_position17", "rocket_position18");
    const calculation = Math.ceil(Math.random() * 18);
    this.classList.add(`rocket_position${calculation}`);
    console.log(`rocket ${calculation}`);
}
function addPoins() {
    points = points + 200;
    showPoints();
}

function showPoints() {
    document.querySelector("#score_board").textContent = `Score: ${points}`;
}


// Bird
function startBird() {
  document.querySelector("#bird_container").classList.add("falling");
  document.querySelector("#bird_container").classList.add("position1");
}










// Mangler
// Fugl(-liv)
// liv (hvis liv=0 dræb ellers fortsæt)
// timer (dø efter x sekunder && vind med fugl > 10 eller point)
// Lydeffekter og musik