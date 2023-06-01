"use strict"

window.addEventListener("load", start)

function start() {
    buttons();
    console.log("Javascript is running wild")
}

function buttons() { 
    document.querySelector("#level_complete_button").addEventListener("click", showStart);
}

function showStart() {
    document.querySelector("#level_complete").classList.add("hidden");
    console.log("Hidden")
}
