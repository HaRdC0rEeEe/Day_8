'use strict';


const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


function initEventListeners() {
    overlay.addEventListener('click', hide())

    closeModal.addEventListener('click', hide())

    document.addEventListener('keydown', evt => {
        if (evt.key === 'Escape')
            hide();
    })

}

function hide() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

initEventListeners();


for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}
