var startButton = document.querySelector(".start-button");
var answerbuttons = document.querySelector(".answers-hidden")
var timerEl = document.querySelector(".timer-count")

var timer;
var timerCount ;

function startQuiz() {
    startButton.setAttribute('class', 'start-button-hidden')
    answerbuttons.setAttribute('class', 'answers')
    timerCount = 10;
    startTimer()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        // if (timerCount >= 0) {

        // }

    }, 1000);
}

startButton.addEventListener("click", startQuiz);