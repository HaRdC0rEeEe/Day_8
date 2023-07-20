'use strict';

var secret = Math.trunc(Math.random() * 20 + 1);

function checkGuess() {

    let guessTxt = document.getElementById("guess").value;
    let messageContent = "";
    let currScore = document.querySelector('.score').textContent;


    if (!document.getElementById("guess").checkValidity())
        messageContent = "Zadej nějaké číslo!";
    else {

        if (guessTxt == secret) {
            messageContent = "You won!";
            document.querySelector('.number').textContent = secret;

            let highscore = document.querySelector('.highscore').textContent;

            if (Number(highscore) < Number(currScore))
                highscore = currScore;

            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.number').style = "font-size: 15rem; width: auto; height: 200px; border-radius: 30px; text-align: center;";
            document.body.style.backgroundColor = "rgb(0, 165, 0)";

        }
        else {

            if (currScore > 0) {
                Number(currScore--);
                document.querySelector('.score').textContent = currScore;

                messageContent = guessTxt < secret ? "Guess higher number" : "Guess lower number";

            }
            if (currScore == 0) {
                messageContent = "You lost the game";
                document.body.style.backgroundColor = "rgb(128, 0, 0)";

            }
        }
    }
    document.querySelector('.message').textContent = messageContent;

}

//toto je inline zápis onClick="function()"

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = "Guess again...";
    document.querySelector('.score').textContent = "20";
    document.querySelector('.number').textContent = "?";
    secret = Math.trunc(Math.random() * 20 + 1);
    document.body.style.backgroundColor = "#222";


})



