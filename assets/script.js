var startButton = document.querySelector(".start-button");
var answerbuttons = document.querySelector(".answers-hidden")

function startQuiz() {
    startButton.setAttribute('class', 'start-button-hidden')
    answerbuttons.setAttribute('class', 'answers')
    
}

startButton.addEventListener("click", startQuiz);