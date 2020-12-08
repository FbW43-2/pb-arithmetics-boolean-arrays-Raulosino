var operation;

// Question 1
console.log("Question 1:");
console.log("Tickets sold: " + `${Math.trunc(6500 / 15)}`);


// Question 2
console.log("\nQuestion 2:");
console.log("Sylvia earns per year: $" + `${(500 * 52.1429).toFixed(2)}`);


// Question 3
console.log("\nQuestion 3:");
console.log(`${((17 / 30) * 100).toFixed(2)}` + "%");


// Question 4
console.log("\nQuestion 4:");
console.log("Squeare's perimeter: " + `${(4 * 4.75).toFixed(2)}`);


// Question 5
console.log("\nQuestion 5:");
console.log("Triangles's perimeter: " + `${5 + 6 + 7}`);


// Question 6
console.log("\nQuestion 6:");
console.log("Squeare's area: " + `${5 * 5}`);


// Question 7
console.log("\nQuestion 7:");
console.log("height of the triangle: " + 4.899);
console.log("Triangle's area: " + `${((4.899 * 6) / 2).toFixed(2)}`);


// Question 8
console.log("\nQuestion 8:");
console.log((9 * 9 * 9).toFixed(2));


// Question 9
console.log("\nQuestion 9:");
console.log("First bill: €" + `${(22.35 + (22.35 * 0.1)).toFixed(2)}`);
console.log("Second bill = €" + `${(26.67 + (26.67 * 0.15)).toFixed(2)}`);
console.log("Third bill = €" + `${(35.92 + (35.92 * 0.20)).toFixed(2)}`);


// Question 10
console.log("Questions 10");
var hours = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
for (var i = 0; i < hours.length; i++) {
    operation = operation + hours[i];
    i++;
    console.log("Day " + i + " : " + operation);
    i--;
}
operation = operation / hours.length;
console.log("The average hours per day are: " + operation);
operation = 0;
console.log("");


// Question 11
console.log("Question 11")
var sixthTest;
var average = 85;
var grades = [75, 70, 85, 90, 100, sixthTest];

//Left side of the equation:
var left = 75 + 70 + 85 + 90 + 100;

//Right side of the equation:
var right = 85 * grades.length;

sixthTest = right - left;
console.log("The grade of the sixth test is: " + sixthTest);
console.log("");


// Question 12
console.log("Question 12");
console.log("Taking in consideration that the first 8 test constitute 78% means that in every test he got a 78.")
operation = (80 * 9) - (78 * 8);
console.log("James needs a minimum of : " + operation + "% in the last test to get an average of 80%");
