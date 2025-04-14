const counter = document.getElementById("counterLabel")
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = function () {
    count -= 1;
    counter.innerHTML = count
}
resetBtn.onclick = function () {
    count = 0;
    counter.innerHTML = count
}
increaseBtn.onclick = function () {
    count += 1;
    counter.innerHTML = count
}