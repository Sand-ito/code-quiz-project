var startButton = document.querySelector(".start-button");
var answersHidden = document.querySelector(".answers-hidden");
var timerEl = document.querySelector(".timer-count");
var quizTitle = document.querySelector(".title");
var questionEl = document.querySelector(".question");
// var answerButts = document.querySelector(".answer-butts")
var buttOne = document.querySelector(".butt1");
var buttTwo = document.querySelector(".butt2");
var buttThree = document.querySelector(".butt3");
var buttFour = document.querySelector(".butt4");

var timer ;
var timerCount ;

function startQuiz() {
    startButton.setAttribute('class', 'hidden');
    quizTitle.setAttribute('class', 'hidden');
    answersHidden.setAttribute('class', 'answers');
    
    timerCount = 60;
    startTimer();
    
    questionOne();
}


function questionOne() {
    questionEl.textContent = "test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";
    
    buttOne.addEventListener('click', questionTwo);
    buttTwo.addEventListener('click', questionTwo);
    buttThree.addEventListener('click', questionTwo);
    buttFour.addEventListener('click', questionTwo);

}

function questionTwo() {
    questionEl.textContent = "test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";
    
    buttOne.addEventListener('click', questionTwo);
    buttTwo.addEventListener('click', questionTwo);
    buttThree.addEventListener('click', questionTwo);
    buttFour.addEventListener('click', questionTwo);

}

function questionThree() {
    questionEl.textContent = "test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";
    
    buttOne.addEventListener('click', questionTwo);
    buttTwo.addEventListener('click', questionTwo);
    buttThree.addEventListener('click', questionTwo);
    buttFour.addEventListener('click', questionTwo);

}

function questionFour() {
    questionEl.textContent = "test!";
    buttOne.textContent = "abc123!!!";
    buttTwo.textContent = "qwe";
    buttThree.textContent = "asd";
    buttFour.textContent = "qwedas";
    
    buttOne.addEventListener('click', questionTwo);
    buttTwo.addEventListener('click', questionTwo);
    buttThree.addEventListener('click', questionTwo);
    buttFour.addEventListener('click', questionTwo);

}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// startButton.addEventListener("click", startQuiz);


// function incorrectOne(){
//     minusPoints();
//     questionTwo();
// }

// buttOne.addEventListener('click', incorrectOne)



// function incorrectTwo(){
//     minusPoints();
//     questionThree();
// }

// buttOne.addEventListener('click', function incorrectTwo(){ minusPoints(); questionThree(); });