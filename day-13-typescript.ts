// Basic Type Annotations
let firstName: string = "Emmanuel";
let age: number = 25;
let isLearning: boolean = true;

console.log(`${firstName} is ${age} years old`);
console.log(`Learning Typescript is:${isLearning}`);

// Typed Function
const add = (a:number, b:number): number => {
    return a + b;
};
console.log(add(5,12));

// Interface
interface User {
    firstName: string;
    age: number;
    role: string;
    isActive: boolean;
}

const user: User = {
    firstName: "Emmanuel",
    age: 25,
    role: "developer",
    isActive: true,
};

console.log (user);

// Typed Array
const scores: number [] = [88,92,75,95,80];
const total: number = scores.reduce((acc, score) => acc + score, 0);
console.log("Total:", total);

// Union Types
let id: string | number;
id = 1;
console.log("ID is a number:", id);
id = "ABC123";
console.log("ID is a string;", id);