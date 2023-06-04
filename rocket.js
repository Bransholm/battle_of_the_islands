
function clickRocket() {
  const rocket = this;
  // document.querySelector("#bird_container").removeEventListener("mousedown", clickRocket);
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
  this.classList.remove(
    "rocket_position1",
    "rocket_position2",
    "rocket_position3",
    "rocket_position4",
    "rocket_position5",
    "rocket_position6",
    "rocket_position7",
    "rocket_position8",
    "rocket_position9",
    "rocket_position10",
    "rocket_position11",
    "rocket_position12",
    "rocket_position13",
    "rocket_position14",
    "rocket_position15",
    "rocket_position16",
    "rocket_position17",
    "rocket_position18"
  );
  const calculation = Math.ceil(Math.random() * 18);
  this.classList.add(`rocket_position${calculation}`);
  console.log(`rocket ${calculation}`);
}
