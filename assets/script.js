// start Button and timer
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
// Text elements for question
var quizTitle = document.querySelector(".title");
var questionEl = document.querySelector(".question");
// Correct/ incorrect text area for answers
var correctContainer = document.querySelector(".is-correct-hidden")
var isCorrectText = document.querySelector(".is-correct-text");
//Answer buttons
var answersHidden = document.querySelector(".answers-hidden");
var buttOne = document.querySelector(".butt1");
var buttTwo = document.querySelector(".butt2");
var buttThree = document.querySelector(".butt3");
var buttFour = document.querySelector(".butt4");
//empty timer variables
var timer ;
var timerCount ;

//functions to notify user if they were correct and incorrect
function correct(){
    isCorrectText.textContent = 'CORRECT!';
}

function incorrect(){
    isCorrectText.textContent = 'INCORRECT :(';
    timerCount -= 10;
}


function startQuiz() {
    startButton.setAttribute('class', 'hidden');
    quizTitle.setAttribute('class', 'hidden');
    answersHidden.setAttribute('class', 'answers');
    correctContainer.setAttribute('class', 'is-correct-container');
    
    timerCount = 60;
    startTimer();
    
    questionOne();
}

function q1Correct(){
    correct();
    questionTwo();
    q1jank();
}

function q1Incorrect() {
    incorrect();
    questionTwo();
    q1jank();
}

function q1jank () {
    buttOne.removeEventListener('click', q1Correct);
    buttTwo.removeEventListener('click', q1Incorrect);
    buttThree.removeEventListener('click', q1Incorrect);
    buttFour.removeEventListener('click', q1Incorrect);
}

function questionOne() {
    questionEl.textContent = "test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";
    
    buttOne.addEventListener('click', q1Correct);
    buttTwo.addEventListener('click', q1Incorrect);
    buttThree.addEventListener('click', q1Incorrect);
    buttFour.addEventListener('click', q1Incorrect);
}

function q2Correct(){
    correct();
    questionThree();
    q2jank();
}

function q2Incorrect() {
    incorrect();
    questionThree();
    q2jank();
}

function q2jank () {
    buttOne.removeEventListener('click', q2Correct);
    buttTwo.removeEventListener('click', q2Incorrect);
    buttThree.removeEventListener('click',q2Incorrect);
    buttFour.removeEventListener('click', q2Incorrect);
}

function questionTwo() {
    questionEl.textContent = "Q2 test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";
    
    buttOne.addEventListener('click', q2Correct);
    buttTwo.addEventListener('click', q2Incorrect);
    buttThree.addEventListener('click', q2Incorrect);
    buttFour.addEventListener('click', q2Incorrect);
}

function questionThree(){
    console.log('jank')
}


function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);

