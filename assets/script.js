// start Button, and timer
var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
// Input variables for score
var inputContainer = document.querySelector('.score-input-hidden')
var submitButt = document.querySelector('.submit-butt')
var userInput = document.querySelector('#user-input')
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
    questionEl.textContent = "What does CSS stand for?";
    buttOne.textContent = "Cascading Style Sheet";
    buttTwo.textContent = "Caught Standing still";
    buttThree.textContent = "Computer Solving System";
    buttFour.textContent = "Can't Stop Singing";

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
    questionEl.textContent = "Where is the JavaScript placed inside an HTML document or page?";
    buttOne.textContent = "In the <meta> section.";
    buttTwo.textContent = "In the <title> section. ";
    buttThree.textContent = "In the <body> and <head> sections";
    buttFour.textContent = "In the <footer> section.";

    buttOne.addEventListener('click', q2Incorrect);
    buttTwo.addEventListener('click', q2Incorrect);
    buttThree.addEventListener('click', q2Correct);
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
    questionEl.textContent = "What is the default behavior called that is used to move declarations to the top of the current scope?";
    buttOne.textContent = "Arranging";
    buttTwo.textContent = "Sorting";
    buttThree.textContent = "Jumping";
    buttFour.textContent = "Hoisting";

    buttOne.addEventListener('click', q3Incorrect);
    buttTwo.addEventListener('click', q3Incorrect);
    buttThree.addEventListener('click', q3Incorrect);
    buttFour.addEventListener('click', q3Correct);
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
    questionEl.textContent = "What are the CSS properties that are used to add space around sections of content?";
    buttOne.textContent = "Cleaner";
    buttTwo.textContent = "Spacing";
    buttThree.textContent = "Break";
    buttFour.textContent = "Padding";

    buttOne.addEventListener('click', q4Incorrect);
    buttTwo.addEventListener('click', q4Incorrect);
    buttThree.addEventListener('click', q4Incorrect);
    buttFour.addEventListener('click', q4Correct);
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
    questionEl.textContent = "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?";
    buttOne.textContent = "Cascading";
    buttTwo.textContent = "Shifting";
    buttThree.textContent = "Responsive";
    buttFour.textContent = "Evolution";

    buttOne.addEventListener('click', q5Incorrect);
    buttTwo.addEventListener('click', q5Incorrect);
    buttThree.addEventListener('click', q5Correct);
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
    questionEl.textContent = "What tag is used to define – and place – an interactive button in an HTML document?";
    buttOne.textContent = "<footer>";
    buttTwo.textContent = "<button>";
    buttThree.textContent = "<td>";
    buttFour.textContent = "<clickfield>";

    buttOne.addEventListener('click', q6Incorrect);
    buttTwo.addEventListener('click', q6Correct);
    buttThree.addEventListener('click', q6Incorrect);
    buttFour.addEventListener('click', q6Incorrect);
}

// Functions for score
// submitButt.addEventListener('click', function (event) {
//     event.preventDefault();
//     saveLastScore();
//     renderScores();
// });
// var score = timerCount;

// var highscores = JSON.parse(localStorage.getItem('highscores')) || []

// function saveLastScore() {
//     var highscore = {
//         name: userInput.value,
//         score: timerCount
//     };

//     var newScores = highscores.concat(highscore);

//     localStorage.setItem("highscores", JSON.stringify(newScores))
// }

// function renderScores() {
//     highscores = JSON.parse(localStorage.getItem('highscores'));
//     for (var highscore of highscores) {
//         var leaderboardEl = document.querySelector('.leaderboard');
//         var paraEl = document.createElement("p");
//         paraEl.textContent = highscore.name + ': ' + highscore.score;
//         leaderboardEl.append(paraEl);
//     }
// }

// function init() {
//     renderScores();
// }
// init();

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
            endQuiz();
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);

