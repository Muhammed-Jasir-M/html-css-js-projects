const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let running = false;

startBtn.onclick = function () {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        running = true;
    }

}
stopBtn.onclick = function () {
    if (running) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

resetBtn.onclick = function () {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    running = false;
    display.textContent = "00:00:00:00"
}

function update() {
    currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = ` ${hours}:${minutes}:${seconds}:${milliseconds} `


}
