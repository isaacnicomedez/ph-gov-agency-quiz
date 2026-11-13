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
let status = "start";
let isAnswered = false;
console.log(questions[currIndex]);

const input = document.querySelector<HTMLInputElement>("input");
const getQuestion = () => currIndex++;

const acroSpan = document.querySelector(".acronym");
const resSpan = document.querySelector(".result");
const name = document.querySelector(".name");
const renderUI = () => {
    acroSpan!.textContent = `${questions[currIndex].acronym}`;

    if (status !== "start") {
        name!.textContent = `Answer: ${questions[currIndex].fullName}`;
        name?.classList.add("show");
        name?.classList.remove("hide");
    } else {
        name?.classList.add("hide");
        name?.classList.remove("show");
        resSpan?.classList.remove("r", "g");
        name!.textContent = "";
        resSpan!.textContent = "";
    }

    if (status === "correct") {
        resSpan!.textContent = "Correct!";
        resSpan!.classList.add("g");
    } else if (status === "wrong") {
        resSpan!.textContent = "Wrong"
        resSpan!.classList.add("r");
    }
}

input?.addEventListener("keydown", e => {
    if (e.key === "Enter") {

        if (!isAnswered) {
            e.preventDefault();
            const inputVal = input?.value.toLowerCase().trim();
            console.log(`Input: ${inputVal} question: ${questions[currIndex].fullName}`);
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
            status = "start";
            renderUI();
            isAnswered = false;
        }
    }
});

renderUI();
