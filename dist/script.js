import { agencies } from "./agencies.js";
const shuffle = (arr) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
    }
    return newArr;
};
console.log(agencies.length);
let questions = [];
let currIndex = 0;
let score = 0;
let status = "answering";
let isAnswered = false;
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
        questions = agencies.filter(a => a.difficulty === "easy");
    }
    else if (difficulty === "medium") {
        questions = agencies.filter(a => a.difficulty === "medium");
    }
    else {
        questions = agencies.filter(a => a.difficulty === "hard");
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
const acroSpan = document.querySelector(".acronym");
const nameSpan = document.querySelector(".name");
const output = document.querySelector(".output");
const scoreSpan = document.querySelector(".score");
const descSpan = document.querySelector(".desc");
const check = document.querySelector(".correct");
const cross = document.querySelector(".wrong");
const question = document.querySelector(".question");
const renderUI = () => {
    if (status === "end") {
        nameSpan.textContent = `Finished with score: ${score} / ${questions.length}`;
        return;
    }
    scoreSpan.textContent = `${score} / ${questions.length}`;
    acroSpan.textContent = `${questions[currIndex].acronym}`;
    descSpan.textContent = `${questions[currIndex].description}`;
    output?.classList.toggle("hide", status === "answering");
    nameSpan.textContent = `${questions[currIndex].fullName}`;
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
        console.log(questions[currIndex].acronym);
        renderUI();
    });
});
back?.addEventListener('click', e => {
    game?.classList.add("hideEl");
    menu?.classList.remove("hideEl");
});
