const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false }
        ]
    },
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Style Syntax", correct: false },
            { text: "Computer Style Sheet", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionBox = document.getElementById('question-box');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionBox.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn');
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', selectAnswer);
        answerButtons.appendChild(btn);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    answerButtons.innerHTML = '';
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionBox.innerText = `You scored ${score} out of ${questions.length}! 🎉`;
    nextBtn.innerText = "Play Again";
    nextBtn.style.display = 'block';
    scoreDisplay.innerText = '';
    nextBtn.addEventListener('click', startQuiz);
}

startQuiz();
