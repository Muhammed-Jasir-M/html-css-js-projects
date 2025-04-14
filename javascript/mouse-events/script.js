const myBox = document.getElementById('myBox');

myBox.addEventListener('click', () => {
    myBox.style.backgroundColor ="tomato";
    myBox.textContent = " OUCH ! 🤕";
});

myBox.addEventListener('mouseover', () => {
    myBox.style.backgroundColor ="yellow";
    myBox.innerHTML = "Pls Don't 😢";
});

myBox.addEventListener('mouseout', () => {
    myBox.style.backgroundColor ="lightgreen";
    myBox.textContent = "Click Me 😀"
});