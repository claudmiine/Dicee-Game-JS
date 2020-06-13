/*function randomImages() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");


    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw! Roll dice again.";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    }
}


function randomImages() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll(".img")[0]("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll(".img")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");


    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw! Roll dice again.";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    }
}
*/



var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw! Roll dice again.";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}