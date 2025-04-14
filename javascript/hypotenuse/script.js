
const aTextBox = document.getElementById("aTextBox");
const bTextBox = document.getElementById("bTextBox");
const cLabelText = document.getElementById("cLabelText");
const submitBtn = document.getElementById("submitBtn")
let a;
let b;
let c;

submitBtn.onclick = function () {

    a = Number(aTextBox.value);

    b = Number(bTextBox.value);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    cTextLabel.textContent = "Side C : " + c.toFixed(2);

}
