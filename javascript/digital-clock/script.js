const clockDisplay = document.getElementById("clockDisplay");

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let meridian = hours >= 12 ? "PM" : "AM";


    clockDisplay.textContent = `${hours}:${minutes}:${seconds} ${meridian}`
}

updateClock();
setInterval(updateClock, 1000);