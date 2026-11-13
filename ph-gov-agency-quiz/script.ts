import { agencies, type Agency } from "./agencies.js";

const shuffle = (arr: Agency[]): Agency[] => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
    }
    return newArr;
}

let questions = shuffle(agencies.slice(0, 5));
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

const acroSpan = document.querySelector(".acronym");
const resSpan = document.querySelector(".result");
const nameSpan = document.querySelector(".name");
const output = document.querySelector(".output");
const scoreSpan = document.querySelector(".score");

const renderUI = () => {
    if (status === "end") {
        nameSpan!.textContent = `Finished with score: ${score} / ${questions.length}`;
        resSpan!.textContent = "";
        return;
    }

    scoreSpan!.textContent = `${score} / ${questions.length}`;

    acroSpan!.textContent = `${questions[currIndex].acronym}`;
        
    output?.classList.toggle("hide", status === "answering" );

    status === "correct" ? resSpan!.textContent = "Correct!" : resSpan!.textContent = "Wrong!";
    nameSpan!.textContent = `Answer: ${questions[currIndex].fullName}`;
    resSpan?.classList.toggle("g", status === "correct");
    resSpan?.classList.toggle("r", status === "wrong");
}

const input = document.querySelector<HTMLInputElement>("input");
input?.focus();

input?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        if (!isAnswered) {
            e.preventDefault();
            const inputVal = input?.value.toLowerCase().trim();
            if (inputVal === questions[currIndex].fullName.toLowerCase()) {
                status = "correct"
                score++;
            } else {
                status = "wrong";
            }
            renderUI();
            isAnswered = true;
        } else {
            getQuestion();
            input.value = "";
            input.focus();
            if (status === "end") {
                input.disabled = true
                status = "end";
            } else {
                isAnswered = false;
            }

            renderUI();
        }
    }
});

renderUI();
