"use strict";
// Basic Type Annotations
let firstName = "Emmanuel";
let age = 25;
let isLearning = true;
console.log(`${firstName} is ${age} years old`);
console.log(`Learning Typescript is:${isLearning}`);
// Typed Function
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 12));
const user = {
    firstName: "Emmanuel",
    age: 25,
    role: "developer",
    isActive: true,
};
console.log(user);
// Typed Array
const scores = [88, 92, 75, 95, 80];
const total = scores.reduce((acc, score) => acc + score, 0);
console.log("Total:", total);
// Union Types
let id;
id = 1;
console.log("ID is a number:", id);
id = "ABC123";
console.log("ID is a string;", id);
