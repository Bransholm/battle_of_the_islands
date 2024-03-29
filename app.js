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
    document.querySelector("#bird_container").addEventListener("mousedown", clickBird);
    document.querySelector("#bird_container").addEventListener("animationiteration", restartBird);
    resetGameVariables();
    showPoints();
    startTimer();
    document.querySelector("#background_sound").play();
}

function showStartScreen () {
    document.querySelector("#start").classList.remove("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    console.log("Show start screen");
}

function showLevelComplete () {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.remove("hidden");
  console.log("Show level complete screen");
  document.querySelector("#sound_level_complete").currentTime = 0;
  document.querySelector("#sound_level_complete").play();
}

function showGameOver() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  console.log("Show game over");
  document.querySelector("#sound_game_over").currentTime = 0;
  document.querySelector("#sound_game_over").play();
}

function resetGameVariables() {
    points = 0;
    lives = 3;
    document.querySelector("#rocket1").classList.remove("lives_dead_rocket");
    document.querySelector("#rocket2").classList.remove("lives_dead_rocket");
    document.querySelector("#rocket3").classList.remove("lives_dead_rocket");
    document.querySelector("#rocket1").classList.add("lives_active_rocket");
    document.querySelector("#rocket2").classList.add("lives_active_rocket");
    document.querySelector("#rocket3").classList.add("lives_active_rocket");
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
    rocket.querySelector("img").classList.add("rocket_rotate_away");
    rocket.addEventListener("animationend", rocketGone);
    console.log("Rocket clicked");
    document.querySelector("#sound_rocket").currentTime = 0;
    document.querySelector("#sound_rocket").play();
    removeLives();
}

function rocketGone() {
    this.removeEventListener("animationend", rocketGone);
    this.querySelector("img").classList.remove("rocket_rotate_away");
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




// Bird
function startBird() {
  document.querySelector("#bird_container").classList.add("bird_flying");
  document.querySelector("#bird_container").classList.add("bird_position9");
}

function clickBird() {
  const bird = this;
  // document.querySelector("#bird_container").removeEventListener("mousedown", clickBird);
  bird.removeEventListener("mousedown", clickBird);
  bird.classList.add("paused");
  bird.querySelector("img").classList.add("bird_rotate_away");
  bird.addEventListener("animationend", birdGone);
  console.log("Bird clicked");
  document.querySelector("#sound_bird").currentTime = 0;
  document.querySelector("#sound_bird").play();
  addPoins();
}

function birdGone() {
  this.removeEventListener("animationend", birdGone);
  this.querySelector("img").classList.remove("bird_rotate_away");
  this.classList.remove("paused");
  this.addEventListener("mousedown", clickBird);
  restartBird.call(this);
}

function restartBird() {
  this.classList.remove("bird_flying");
  this.offsetWidth;
  this.classList.add("bird_flying");
  this.classList.remove(
    "bird_position1",
    "bird_position2",
    "bird_position3",
    "bird_position4",
    "bird_position5",
    "bird_position6",
    "bird_position7",
    "bird_position8",
    "bird_position9",
    "bird_position10",
    "bird_position11",
    "bird_position12",
    "bird_position13",
    "bird_position14",
    "bird_position15",
    "bird_position16",
    "bird_position17",
    "bird_position18"
  );
  const calculation = Math.ceil(Math.random() * 18);
  this.classList.add(`bird_position${calculation}`);
  console.log(`bird ${calculation}`);
}


// Lives and points

function removeLives() {
    showLives();
    --lives;
    if (lives <= 0) {
        showGameOver();
        clearEventlisteners();
        document.querySelector("#game_over_points").textContent = points;
    }
}

function showLives() {
  //document.querySelector("#life_board").textContent = `Lives: ${lives}`;
    document.querySelector("#rocket" + lives).classList.remove("lives_active_rocket");
    document.querySelector("#rocket" + lives).classList.add("lives_dead_rocket");
}

function addPoins() {
  points = points + 250;
  showPoints();
}

function showPoints() {
  document.querySelector("#score_board").textContent = `Score: ${points} `;
}

// Timer
function startTimer() {
    document.querySelector("#time_sprite").classList.add("timer"); 
    document.querySelector("#time_sprite").addEventListener("animationend", timerEnd);
}

function timerEnd() {
    console.log("timerEnd");

    if (points < 2000) {
        showGameOver();
        clearEventlisteners();
        document.querySelector("#game_over_points").textContent = points;
    } else if (points >= 2000) {
        showLevelComplete();
        clearEventlisteners();
        document.querySelector("#level_complete_points").textContent = points;
    } else {
        console.log("Something went wrong in timerEnd function")
    }
}

function clearEventlisteners() {
    // Remove animationer
    document.querySelector("#rocket_container").classList.remove("rocket_falling");
    document.querySelector("#rocket_container").classList.remove("rocket_position8");
    document.querySelector("#bird_container").classList.remove("bird_flying");
    document.querySelector("#bird_container").classList.remove("bird_position9");

    // Remove clicks
    document.querySelector("#rocket_container").removeEventListener("mousedown", clickRocket);
    document.querySelector("#rocket_container").removeEventListener("animationiteration", restartRocket);
    document.querySelector("#bird_container").removeEventListener("mousedown", clickBird);
    document.querySelector("#bird_container").removeEventListener("animationiteration", restartBird);

    // Remove background sound
    document.querySelector("#background_sound").pause();
    document.querySelector("#background_sound").currentTime = 0;

    //Remove timer
    document.querySelector("#time_sprite").classList.remove("timer");
    console.log("Timer removed");
}