const students = [
    {name: "Emmanuel", scores: [88,92,75,95,80]},
    {name: "Ann", scores: [45,52,60,48,55]},
    {name: "Jerry", scores: [72,68,79,85,71]},
    {name: "Lisa", scores: [91,95,98,92,96]},
    {name: "Tom", scores: [55,60,58,52,61]},
];

// 1. Calculate Average
const getAverage = (scores) => {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round((sum/scores.length)*10)/10;
}

// 2. Get Grade Letter
const getGrade = (average) => {
    if (average >90) {return "A";}
    else if(average >=80) {return "B";}
    else if (average >=70) {return "C";}
    else if (average >=60) {return "D";}
    else {return "F";}
};

// 3. Build a Result Array
const results = students.map (student => {
    const average = getAverage(student.scores);
    const grade = getGrade(average);
    return {name:student.name, average, grade};
    });

    // 4. Print results
    results.forEach(r =>{
        console.log(`${r.name}: ${r.average}- Grade ${r.grade}`)
    });


    //  5. Only Passinng Students
    const passing = results.filter(r => r.grade !=="F");
    console.log("\nPassing students:");
    passing.forEach(r =>{
        console.log(`${r.name}: ${r.average} - Grade ${r.grade}`);
    });