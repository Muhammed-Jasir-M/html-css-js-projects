const submitBtn = document.getElementById("submitBtn");
const guessLabel = document.getElementById("guessLabel");
const guessNumber = document.getElementById("guessField");
const guessText = document.getElementById("guessText");
const statusText = document.getElementById("statusText");

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
let guesses = 0;
let guess;
let running = true;


guessLabel.innerHTML = `Guess a  number between  ${min} and ${max}`


submitBtn.onclick = function () {
    getGuessNum()

}

function getGuessNum() {



    guess = guessNumber.value;
    guess = Number(guess);

    if (isNaN(guess)) {
        // window.alert("Please Enter A valid Number!!")
        statusText.textContent = "Please Enter A valid Number!!";
        statusText.style.color = 'red'

    }
    else if (guess < min || guess > max) {
        // window.alert("Please Enter A Number Between 1 And 100")
        statusText.textContent = `Please Enter A Number Between ${min} And ${max}`;
        statusText.style.color = 'red'
    }
    else {

        guesses += 1;
        guessText.textContent = `No of Guesses: ${guesses}`
        if (guess < answer) {
            // alert("OOPS SOORY!! Try Larger Number");
            statusText.textContent = "OOPS SOORY!! Try Larger Number";
            statusText.style.color = 'blue'

        }
        else if (guess > answer) {
            // alert("OOPS SOORY!! Try Smaller Number");
            statusText.textContent = "OOPS SOORY!! Try Smaller Number";
            statusText.style.color = 'blue'


        }
        else {
            // alert(`CORRECT!! The Answer was ${answer}. you took ${guesses} Guesses `);
            statusText.textContent(`CORRECT!! The Answer was ${answer}. you took ${guesses} Guesses `);
            statusText.style.color = 'green'
        }
    }



}
guessNumber.onkeydown = function (event) {
    if (event.key === 'Enter') {
        getGuessNum();
    }
}








