import { agencies } from "./agencies.js";
const shuffle = (arr) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
    }
    return newArr;
};
let questions = shuffle(agencies.slice(0, 5));
let currIndex = 0;
let score = 0;
console.log(questions[currIndex]);
const input = document.querySelector("input");
const getQuestion = () => currIndex++;
input?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        const inputVal = input?.value.trim();
        getQuestion();
        if (inputVal === questions[currIndex].fullName) {
            renderUI(true);
            score++;
        }
        else {
            renderUI(false);
        }
        input.value = "";
        input.focus();
    }
});
const acroSpan = document.querySelector(".acronym");
const renderUI = (res) => {
};
