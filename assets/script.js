// start Button, timer, input form for scores, aswell as a try again button
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
var inputContainer = document.querySelector('.score-input-hidden')
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
var timer;
var timerCount;

var score = timerCount;

//functions to notify user if they were correct and incorrect
function correct() {
    isCorrectText.textContent = 'CORRECT!';
}

function incorrect() {
    isCorrectText.textContent = 'INCORRECT :(';
    timerCount -= 10;
}


function startQuiz() {
    startButton.setAttribute('class', 'hidden');
    quizTitle.setAttribute('class', 'hidden');
    inputContainer.setAttribute('class', 'score-input-hidden')
    answersHidden.setAttribute('class', 'answers');
    correctContainer.setAttribute('class', 'is-correct-container');

    timerCount = 60;
    startTimer();

    questionOne();
}

// Start Question 1
function q1Correct() {
    correct();
    questionTwo();
    q1jank();
}

function q1Incorrect() {
    incorrect();
    questionTwo();
    q1jank();
}

function q1jank() {
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

// Start Question 2
function q2Correct() {
    correct();
    questionThree();
    q2jank();
}

function q2Incorrect() {
    incorrect();
    questionThree();
    q2jank();
}

function q2jank() {
    buttOne.removeEventListener('click', q2Correct);
    buttTwo.removeEventListener('click', q2Incorrect);
    buttThree.removeEventListener('click', q2Incorrect);
    buttFour.removeEventListener('click', q2Incorrect);
}

function questionTwo() {
    questionEl.textContent = "Q2";
    buttOne.textContent = "Q2!!!";
    buttTwo.textContent = "Q2";
    buttThree.textContent = "Q2";
    buttFour.textContent = "Q2";

    buttOne.addEventListener('click', q2Correct);
    buttTwo.addEventListener('click', q2Incorrect);
    buttThree.addEventListener('click', q2Incorrect);
    buttFour.addEventListener('click', q2Incorrect);
}

// Start Question 3
function q3Correct() {
    correct();
    questionFour();
    q3jank();
}

function q3Incorrect() {
    incorrect();
    questionFour();
    q3jank();
}

function q3jank() {
    buttOne.removeEventListener('click', q3Correct);
    buttTwo.removeEventListener('click', q3Incorrect);
    buttThree.removeEventListener('click', q3Incorrect);
    buttFour.removeEventListener('click', q3Incorrect);
}

function questionThree() {
    questionEl.textContent = "Q3 test!";
    buttOne.textContent = "Q3!!!";
    buttTwo.textContent = "Q3";
    buttThree.textContent = "Q3";
    buttFour.textContent = "Q3";

    buttOne.addEventListener('click', q3Correct);
    buttTwo.addEventListener('click', q3Incorrect);
    buttThree.addEventListener('click', q3Incorrect);
    buttFour.addEventListener('click', q3Incorrect);
}

// Start Question 4
function q4Correct() {
    correct();
    questionFive();
    q4jank();
}

function q4Incorrect() {
    incorrect();
    questionFive();
    q4jank();
}

function q4jank() {
    buttOne.removeEventListener('click', q4Correct);
    buttTwo.removeEventListener('click', q4Incorrect);
    buttThree.removeEventListener('click', q4Incorrect);
    buttFour.removeEventListener('click', q4Incorrect);
}

function questionFour() {
    questionEl.textContent = "Q4 test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";

    buttOne.addEventListener('click', q4Correct);
    buttTwo.addEventListener('click', q4Incorrect);
    buttThree.addEventListener('click', q4Incorrect);
    buttFour.addEventListener('click', q4Incorrect);
}

// Start Question 5
function q5Correct() {
    correct();
    questionSix();
    q5jank();
}

function q5Incorrect() {
    incorrect();
    questionSix();
    q5jank();
}

function q5jank() {
    buttOne.removeEventListener('click', q5Correct);
    buttTwo.removeEventListener('click', q5Incorrect);
    buttThree.removeEventListener('click', q5Incorrect);
    buttFour.removeEventListener('click', q5Incorrect);
}

function questionFive() {
    questionEl.textContent = "Q5 test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";

    buttOne.addEventListener('click', q5Correct);
    buttTwo.addEventListener('click', q5Incorrect);
    buttThree.addEventListener('click', q5Incorrect);
    buttFour.addEventListener('click', q5Incorrect);
}

// Start Question 6
function q6Correct() {
    correct();
    q6jank();
    endQuiz();
}

function q6Incorrect() {
    incorrect();
    q6jank();
    endQuiz();
}

function q6jank() {
    buttOne.removeEventListener('click', q6Correct);
    buttTwo.removeEventListener('click', q6Incorrect);
    buttThree.removeEventListener('click', q6Incorrect);
    buttFour.removeEventListener('click', q6Incorrect);
}

function questionSix() {
    questionEl.textContent = "Q6 test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";

    buttOne.addEventListener('click', q6Correct);
    buttTwo.addEventListener('click', q6Incorrect);
    buttThree.addEventListener('click', q6Incorrect);
    buttFour.addEventListener('click', q6Incorrect);
}

//Quiz ends to show input for high scores
function endQuiz() {
    inputContainer.setAttribute('class', 'score-input')
    clearInterval(timer);

}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);

