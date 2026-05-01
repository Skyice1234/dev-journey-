const user = {
    name:"Emmanuel",
    age: 25,
    role: "developer",
    skills: ["HTML", "CSS", "JavaScript"]
};

// Destructuring
const {name, age, role} = user;

// Adding New Properties
user.country = "Nigeria";
user.continent = "Africa";

// Spread - merge two objects
const extra = {github: "Skyice1234", available:true};
const fullProfile = {...user, ...extra};

// Rest - collecting extra arguments
const getScores = (first, ...rest) => {
    console.log("First:", first);
    console.log("Others:", rest);
};

getScores(88,45,72,91,55);