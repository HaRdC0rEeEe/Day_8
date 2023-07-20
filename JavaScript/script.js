'use strict';

// const array1 = ["zacatek", 1, 5, 3, 5, 132, 5, 2, 1, 5, 1, "konec"];


// function vypisPole(array) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         console.log(array[i]);
//     }
// }

// vypisPole(array1);

// function hodKostkou() {
//     let x = 0;
//     for (let i = 0; i < 2; i++) {
//         x = Math.random() * 6 + 1;
//         console.log(Math.trunc(x));
//     }
// }



var secret = Math.trunc(Math.random() * 20 + 1);

function checkGuess() {

    let guessTxt = document.getElementById("guess").value;
    let message = "";
    let score = "";
    let messageContent = "";
    let currScore = document.querySelector('.score').textContent;

    if (Number.isNaN(Number(guessTxt)))
        document.querySelector('.message').textContent = "Zadej nějaké číslo!";
    else {

        if (guessTxt == secret) {
            message = document.querySelector('.message').textContent = "You won!";
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

                if (guessTxt < secret)
                    messageContent = "Guess higher number";
                else
                    messageContent = "Guess lower number";

                document.querySelector('.message').textContent = messageContent;
            }
            if (currScore == 0) {

                message = document.querySelector('.message').textContent = "You lost the game";
                document.body.style.backgroundColor = "rgb(128, 0, 0)";
            }
        }
    }

}

//toto je inline zápis onClick="function()"

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = "Guess again...";
    document.querySelector('.score').textContent = "20";
    document.querySelector('.number').textContent = "?";
    secret = Math.trunc(Math.random() * 20 + 1);
    document.body.style.backgroundColor = "#222";


})



