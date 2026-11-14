import { agencies } from "./agencies.js";
const shuffle = (arr) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
    }
    return newArr;
};
let questions = [];
let currIndex = 0;
let score = 0;
let highscores = {
    easy: JSON.parse(localStorage.getItem("highscore_easy") || "0"),
    medium: JSON.parse(localStorage.getItem("highscore_medium") || "0"),
    hard: JSON.parse(localStorage.getItem("highscore_hard") || "0"),
};
let status = "answering";
let isAnswered = false;
let isNewHigh = false;
const easy = agencies.filter(a => a.difficulty === "easy");
const medium = agencies.filter(a => a.difficulty === "medium");
const hard = agencies.filter(a => a.difficulty === "hard");
const getQuestion = () => {
    currIndex++;
    if (currIndex >= questions.length) {
        status = "end";
        return;
    }
    status = "answering";
};
const filterResetQuestions = () => {
    if (difficulty === "easy") {
        questions = easy;
    }
    else if (difficulty === "medium") {
        questions = medium;
    }
    else {
        questions = hard;
    }
    questions = shuffle(questions);
    currIndex = 0;
    score = 0;
    status = "answering";
    isAnswered = false;
    if (input) {
        input.value = "";
        input.disabled = false;
        input.focus();
    }
};
const saveHighScore = (diff, newScore) => {
    const key = diff;
    isNewHigh = newScore > highscores[key];
    if (isNewHigh) {
        highscores[key] = newScore;
        localStorage.setItem(`highscore_${diff}`, JSON.stringify(newScore));
    }
};
const updateHighScores = () => {
    if (easySpan)
        easySpan.textContent = `Highscore: ${highscores.easy} / ${easy.length}`;
    if (mediumSpan)
        mediumSpan.textContent = `Highscore: ${highscores.medium} / ${medium.length}`;
    if (hardSpan)
        hardSpan.textContent = `Highscore: ${highscores.hard} / ${hard.length}`;
};
const acroSpan = document.querySelector(".acronym");
const nameSpan = document.querySelector(".name");
const output = document.querySelector(".output");
const scoreSpan = document.querySelector(".score");
const descSpan = document.querySelector(".desc");
const check = document.querySelector(".correct");
const cross = document.querySelector(".wrong");
const question = document.querySelector(".question");
const easySpan = document.querySelector(".easy-count");
const mediumSpan = document.querySelector(".med-count");
const hardSpan = document.querySelector(".hard-count");
const renderUI = () => {
    if (status === "end") {
        nameSpan.textContent = `Finished with ${isNewHigh ? "new high" : ""} score: ${score} / ${questions.length}`;
        return;
    }
    scoreSpan.textContent = `${score} / ${questions.length}`;
    if (questions.length > 0) {
        acroSpan.textContent = `${questions[currIndex].acronym}`;
        descSpan.textContent = `${questions[currIndex].description}`;
        nameSpan.textContent = `${questions[currIndex].fullName}`;
    }
    output?.classList.toggle("hide", status === "answering");
    descSpan?.classList.toggle("hideEl", status !== "answering");
    question?.classList.toggle("hideEl", status !== "answering");
    nameSpan?.classList.toggle("hideEl", status === "answering");
    check?.classList.toggle("hideEl", status !== "correct");
    cross?.classList.toggle("hideEl", status !== "wrong");
};
const input = document.querySelector("input");
input?.focus();
input?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        if (!isAnswered) {
            e.preventDefault();
            const inputVal = input?.value.toLowerCase().trim();
            if (inputVal === questions[currIndex].fullName.toLowerCase()) {
                status = "correct";
                score++;
            }
            else {
                status = "wrong";
            }
            renderUI();
            isAnswered = true;
        }
        else {
            getQuestion();
            input.value = "";
            input.focus();
            if (status === "end") {
                input.disabled = true;
                status = "end";
                saveHighScore(difficulty, score);
            }
            else {
                isAnswered = false;
            }
            renderUI();
        }
    }
});
let difficulty = "";
const buttons = document.querySelectorAll(".nav-links button");
const menu = document.querySelector(".menu");
const game = document.querySelector(".game");
const back = document.querySelector(".back-btn");
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        difficulty = btn.textContent.toLowerCase().trim();
        menu?.classList.add("hideEl");
        game?.classList.remove("hideEl");
        filterResetQuestions();
        renderUI();
    });
});
back?.addEventListener('click', e => {
    game?.classList.add("hideEl");
    menu?.classList.remove("hideEl");
    updateHighScores();
});
updateHighScores();
renderUI();
