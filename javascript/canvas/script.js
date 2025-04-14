let canvas1 = document.getElementById("myCanvas1");
let context1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("myCanvas2");
let context2 = canvas2.getContext("2d");
let canvas3 = document.getElementById("myCanvas3");
let context3 = canvas3.getContext("2d");
let canvas4 = document.getElementById("myCanvas4");
let context4 = canvas4.getContext("2d");
let canvas5 = document.getElementById("myCanvas5");
let context5 = canvas5.getContext("2d");


// Draw a Line:

context1.lineWidth = 5;
context1.strokeStyle = "green";

context1.beginPath();
context1.moveTo(0, 0);
context1.lineTo(250, 250);
context1.lineTo(250, 500);
context1.moveTo(500, 0);
context1.lineTo(250, 250)
context1.stroke();

// Draw a Triangle

context2.lineWidth = 5;
context2.strokeStyle = "green";
context2.fillStyle = "yellow"

context2.beginPath();
context2.moveTo(250, 0);
context2.lineTo(0, 250);
context2.lineTo(500, 250);
context2.lineTo(250, 0)
context2.stroke();
context2.fill();

// Draw a Rectangle


context3.strokeStyle = "black";
context3.fillStyle = "red"
context3.fillRect(0, 0, 250, 250);
context3.strokeRect(0, 0, 250, 250);


context3.strokeStyle = "black";
context3.fillStyle = "blue"
context3.fillRect(250, 0, 250, 250);
context3.strokeRect(250, 0, 250, 250);


context3.strokeStyle = "black";
context3.fillStyle = "yellow"
context3.fillRect(0, 250, 250, 250);
context3.strokeRect(0, 250, 250, 250);


context3.strokeStyle = "black";
context3.fillStyle = "green"
context3.fillRect(250, 250, 250, 250);
context3.strokeRect(250, 250, 250, 250);


// Draw a Circle

context4.lineWidth = 10;
context4.strokeStyle = "black";
context4.fillStyle = "lightblue";

context4.beginPath();
context4.arc(250, 250, 200, 0, 2 * Math.PI)
context4.stroke();
context4.fill();

// Draw a Text

context5.font = "50px MV Boli"
context5.fillStyle = "grey"
context5.textAlign = "center"
context5.fillText("You Won!!", canvas5.width / 2, canvas5.height / 2)