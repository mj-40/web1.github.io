// DOM Elements
const StartScreen = document.getElementById("Start-Screen");
const QuizScreen = document.getElementById("Quiz-Screen");
const ResultScreen = document.getElementById("Result-Screen");
const StartButton = document.getElementById("Start-Btn");
const QuestionText = document.getElementById("Question-Text");
const AnswersContainer = document.getElementById("Answers-Container");
const CurrentQuestionSpan = document.getElementById("Current-Question");
const TotalQuestionSpan = document.getElementById("Total-Questions");
const ScoreSpan = document.getElementById("Score");
const FinalScoreSpan = document.getElementById("Final-Score");
const MaxScoreSpan = document.getElementById("Max-Score");
const ResultMessege = document.getElementById("Result-Messege");
const RestartButton = document.getElementById("Restart-Btn");
const ProgressBar = document.getElementById("Progress");


const QuizQuestions = [
    {
        Question: "What is the capital of SaudiArabia",
        Answers: [
            { text: "Makka", correct: false },
            { text: "Madina", correct: false },
            { text: "Riyadh", correct: true },
            { text: "London", correct: false },
        ],
    },
    {
        Question: "Wich planet is known as the Red Planet?",
        Answers: [
            {text:"Venus", correct: false },
            {text:"Mars", correct: true },
            {text:"Jupiter", correct: false },
            {text:"Saturn", correct: false },
        ],
    },
    {
        Question: "What is the largest ocean onno Earth?",
        Answers: [
            {text:"Venus", correct: false },
            {text:"Mars", correct: false },
            {text:"Jupiter", correct: false },
            {text:"Saturn", correct: true },
        ],
    },
    {
        Question: "Wich planet is known as the Red Planet?",
        Answers: [
            {text:"Mars", correct: true },
            {text:"Venus", correct: false },
            {text:"Jupiter", correct: false },
            {text:"Saturn", correct: false },
        ],
    },
]


// QUIZ STATE VARS
let CurrentQuestionindex = 0;
let Score = 0;
let AnswersDisabled = false

TotalQuestionSpan.textContent = QuizQuestions.length;
MaxScoreSpan.textContent = QuizQuestions.length;

// event listeners

StartButton.addEventListener("click", StartQuiz)
RestartButton.addEventListener("click", RestartQuiz)


function StartQuiz(){
    // reset vars
    CurrentQuestionindex = 0;
    ScoreSpan.textContent = 0;

    StartScreen.classList.remove("active");
    QuizScreen.classList.add("active");

}

function RestartQuiz(){
    console.log("Quiz Re-Started");
}