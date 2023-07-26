'use strict';

let currPlayer = document.querySelector('.player--active');
const rollDiceBtn = document.querySelector('.btn--roll');
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
const p1Score = document.querySelector('#current--0');
const p2Score = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;

swapPlayers();
function reset() {
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    swapPlayers();
}
reset();



function getActivePlayer() {
    return p1.classList.contains('player--active') ? p1 : p2;
}

function swapPlayers() {

    if (p1.classList.contains('player--active')) {
        p1.classList.remove('player--active');
        p2.classList.add('player--active')
    }
    else {
        p1.classList.add('player--active');
        p2.classList.remove('player--active');
    }

}

hold.addEventListener('click', function () {
    let score = Number(p1Score.textContent);

    let scoreElement = getActivePlayer().querySelector('.current-score').textContent;
    score += Number(scoreElement);
    getActivePlayer().querySelector('.score').textContent = score;



    reset();

})

rollDiceBtn.addEventListener('click', function () {
    dice.classList.remove('hidden');
    dice.src = "dice-1.png";

    let roll = Math.trunc(Math.random() * 6 + 1);
    switch (roll) {
        case 1: dice.src = "dice-1.png"; break;
        case 2: dice.src = "dice-2.png"; break;
        case 3: dice.src = "dice-3.png"; break;
        case 4: dice.src = "dice-4.png"; break;
        case 5: dice.src = "dice-5.png"; break;
        case 6: dice.src = "dice-6.png"; break;
        default: break;
    }

    if (roll == 1) {
        reset();
    }
    else {
        let score = Number(p1Score.textContent) + Number(roll);

        let scoreElement = getActivePlayer().querySelector('.current-score').textContent;
        score += Number(scoreElement);
        getActivePlayer().querySelector('.current-score').textContent = score;


    }


})