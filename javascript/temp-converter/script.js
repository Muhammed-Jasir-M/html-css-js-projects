const textBox = document.getElementById("textBox");
const cButton = document.getElementById("cButton");
const fButton = document.getElementById("fButton");
const resultText = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");
let temp;

submitBtn.onclick = function () {
    

    if (cButton.checked) {
        temp = textBox.value;
        temp = Number(temp);
        temp = toCelsius(temp)
        resultText.textContent = temp.toFixed(2) + "°C";
        console.log(temp)
    } 
    else if (fButton.checked) {
        temp = textBox.value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        resultText.innerHTML = temp.toFixed(2) + "°F";
    } 
    else {
        resultText.textContent = "Select a Unit";
    }

}
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

