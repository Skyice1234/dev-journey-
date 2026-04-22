function showMessage(from,text) {
    return from + ": " + text
};

console.log(showMessage(`Ann`, `Hello`));
console.log(showMessage(`Jerry`,`What's up?`));

// Falsy test check
// function showMessage(from, text) {
//     text = text || `no text given`
// };
// console.log(showMessage(from,text));


// 1. Regular functions
function greet(name){
    return `Hello ` + name + `!`
};

// 2. Function Expression
const square = function(n) {
    return n*n
};

// 3. Arrow Function
const double = (n) => n * 2;

// 4. Arrow function with multiple lines
const multiply = (a,b) => {
    const result = a * b;
    return result;
};

// 5. Tip calculator

const calculateTip = (bill, tipPercent) => {
    const tip = bill * (tipPercent/100);
    const total = bill + tip;
    return {tip, total};
};

console.log(calculateTip(50,15));