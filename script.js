let username;
let clicksNumber;

//Steps
const mainPage = document.getElementById('main');
const startPage = document.getElementById('startGame');
const gamePage = document.getElementById('game');
const finalPage = document.getElementById('finalScore');

//Buttons
const startButton = document.getElementById('startButton');
const startGameButton = document.getElementById('startGameButton');
const gameButton = document.getElementById('gameButton');
const finalButton = document.getElementById('backButton');

// Function first page
const firstStep = function () {
    mainPage.classList.add('hidden');
    startPage.classList.remove('hidden');
};

startButton.addEventListener("click", firstStep);

// Function second page
const secondStep = function () {
    startPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
};

startGameButton.addEventListener("click", secondStep);

// Function third page with setTimeout
const thirdStep = function () {
    gamePage.classList.add('hidden');
    finalPage.classList.remove('hidden');
};

setTimeout(thirdStep, 10000);