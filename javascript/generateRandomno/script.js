const rollBtn = document.getElementById("rollBtn");
const label1 = document.getElementById("Label1");
const label2 = document.getElementById("Label2");
const label3 = document.getElementById("Label3");
const max = 6;
const min = 1;
let randnum1;
let randnum2;
let randnum3;


rollBtn.onclick = function () {
    randnum1 = Math.floor(Math.random() * max) + min;
    randnum2 = Math.floor(Math.random() * max) + min;
    randnum3 = Math.floor(Math.random() * max) + min;

    label1.innerHTML = randnum1;
    label2.innerHTML = randnum2;
    label3.innerHTML = randnum3;
}