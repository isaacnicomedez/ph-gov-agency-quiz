import { agencies, type Agency } from "./agencies.js";

const shuffle = (arr: Agency[]): Agency[] => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i+1));

        [newArr[i],newArr[random]] = [newArr[random],newArr[i]];
    }
    return newArr;
}

let questions = shuffle(agencies);

