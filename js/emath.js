let correctscore = 0;
let wrongscore = 0;
let scorebox = document.getElementById("correctscore");
let scoreboxwrong = document.getElementById("wrongscore");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");

function setAdditionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function setDivisionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "division");
    divisionQuiz();
}

function checkAnswer() {
    let gametype = document.getElementById("myForm").getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("correct");
        correctscore++;
    }
    else {
        alert("Wrong");
        wrongscore++;
    }
    answerform["answer"].value = "";
    scorebox.textContent = correctscore;
    scoreboxwrong.textContent = wrongscore;
    if (gametype == "addition") {
        additionQuiz();
    }
    if (gametype == "subtraction") {
        subtractionQuiz();
    }
    if (gametype == "multiplication") {
        multiplicationQuiz();
    }
    if (gametype == "division") {
        divisionQuiz();
    }
}

function additionQuiz() {
    let num1 = (Math.floor(Math.random() * 50)+ 1);
    let num2 = (Math.floor(Math.random() * 50) + 1);
    questionbox.innerHTML = "<h3>Addition</h3><hr>" + "<p class='d-inline'>" + num1 + " + " + num2 + " = " + "</p>";
    answerform["rightAnswer"].value = (num1 + num2);
}

function subtractionQuiz() {
    let num1 = (Math.floor(Math.random() * 50)+ 1);
    let num2 = (Math.floor(Math.random() * 50)+ 1);
    if (num1 >= num2) {
      questionbox.innerHTML = "<h3>Subtraction</h3><hr>" + "<p class='d-inline'>" + num1 + " - " + num2 + " = " + "</p>";
      answerform["rightAnswer"].value = (num1 - num2);
    }
    else {
      questionbox.innerHTML = "<h3>Subtraction</h3><hr>" + "<p class='d-inline'>" + num2 + " - " + num1 + " = " + "</p>";
      answerform["rightAnswer"].value = (num2 - num1);
    }
}

function multiplicationQuiz() {
    let num1 = (Math.floor(Math.random() * 50) + 1);
    let num2 = (Math.floor(Math.random() * 50) + 1);
    questionbox.innerHTML = "<h3>Multiplication</h3><hr>" + "<p class='d-inline'>" + num1 + " x " + num2 + " = " + "</p>";
    answerform["rightAnswer"].value = (num1 * num2);
}

function divisionQuiz() {
    let num1 = (Math.floor(Math.random() * 15) + 1);
    let intermediateNumber = (Math.floor(Math.random() * 10) + 1);
    let num2 = num1 * intermediateNumber;
    questionbox.innerHTML = "<h3>Division</h3><hr>" + "<p class='d-inline'>" + num2 + " : " + num1 + " = " + "</p>";
    answerform["rightAnswer"].value = (num2 / num1);
}

additionQuiz();
