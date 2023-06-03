

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