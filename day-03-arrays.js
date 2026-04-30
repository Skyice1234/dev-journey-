const students = [
    {name: "Emmanuel", score: 88},
    {name: "Ann", score: 45},
    {name: "Jerry", score: 72},
    {name: "Lisa", score: 91},
    {name: "Tom", score: 55},
];

// Challenge 1 - map
// Return an array of just the names
const names = students.map(student => student.name);
console.log(names);

// Challenge 2 - filter
// Return only students who passed (score >=60)
const passed = students.filter(student => student.score >= 60);
console.log(passed);

// Challenge 3 - Reduce
// Calculate the total of all scores
const total = students.reduce((accumulator, student) => accumulator + student.score, 0);
console.log(total);

// Challenge 4 - find
//  find the first student with top score above 90
const topStudent = students.find (student => student.score >90);
console.log(topStudent);

// Challenge 5 - chaining
// Get the names of students who passed in uppercase
const passedNames = students
.filter(student => student.score >= 60)
.map(student => student.name.toUpperCase());
console.log(passedNames);