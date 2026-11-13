import { agencies } from "./agencies.js";
const shuffle = (arr) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[random]] = [newArr[random], newArr[i]];
    }
    return newArr;
};
let questions = shuffle(agencies);
let currIndex = 0;
let currQuestion = questions[currIndex];
const input = document.querySelector("input");
input?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
    const inputVal = input?.value;
    console.log(inputVal);
});
