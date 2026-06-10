interface Student
    {name: string;
    scores: number[];}

interface Result 
    {name: string;
    average: number;
    grade: string;}


const students: Student[] = [
    {name: "Emmanuel", scores: [88,92,75,95,80]},
    {name: "Ann", scores: [45,52,60,48,55]},
    {name: "Jerry", scores: [72,68,79,85,71]},
    {name: "Lisa", scores: [91,95,98,92,96]},
    {name: "Tom", scores: [55,60,58,52,61]},
];

// 1. Calculate Average
const getAverage = (scores: number[]) => {
    const sum: number = scores.reduce((acc: number, score: number) => acc + score, 0);
    return Math.round((sum/scores.length)*10)/10;
}

// 2. Get Grade Letter
const getGrade = (average: number):string => {
    if (average >=90) {return "A";}
    else if(average >=80) {return "B";}
    else if (average >=70) {return "C";}
    else if (average >=60) {return "D";}
    else {return "F";}
};

// 3. Build a Result Array
const results: Result[] = students.map ((student : Student) => {
    const average: number = getAverage(student.scores);
    const grade: string = getGrade(average);
    return {name:student.name, average, grade};
    });

    // 4. Print results
    results.forEach((r: Result) =>{
        console.log(`${r.name}: ${r.average}- Grade ${r.grade}`)
    });


    //  5. Only Passinng Students
    const passing: Result[] = results.filter((r: Result) => r.grade !=="F");
    console.log("\nPassing students:");
    passing.forEach((r: Result) =>{
        console.log(`${r.name}: ${r.average} - Grade ${r.grade}`);
    });