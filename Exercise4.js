var operation;

// Question 1
console.log("Question 1:");
operation = 6500 / 15;
operation = Math.trunc(operation);
console.log("Tickets sold: " + operation);
operation = 0;
console.log("");


// Question 2
console.log("Question 2:");
operation = 500 * 52.1429;
console.log("Sylvia earns per year: $" + operation.toFixed(2));
operation = 0;
console.log("");


// Question 3
console.log("Question 3:");
operation = ((17 / 30) * 100).toFixed(2);
console.log(operation + "%");
operation = 0;
console.log("");


// Question 4
console.log("Question 4:");
operation = 4 * 4.75;
console.log("Squeare's perimeter: " + operation.toFixed(2));
operation = 0;
console.log("");


// Question 5
console.log("Question 5:");
operation = 5 + 6 + 7;
console.log("Triangles's perimeter: " + operation);
operation = 0;
console.log("");


// Question 6
console.log("Question 6:");
operation = 5;
console.log("Squeare's area: " + operation);
operation = 0;
console.log("");


// Question 7
console.log("Question 7:");
console.log("height of the triangle: " + 4.899);
operation = (4.899 * 6) / 2;
console.log("Triangle's area: " + operation.toFixed(2));
operation = 0;
console.log("");


// Question 8
console.log("Question 8:");
operation = 9 * 9 * 9;
console.log(operation.toFixed(2));
console.log("");
operation = 0;


// Question 9
console.log("Question 9:");

operation = 22.35 + (22.35 * 0.1);
console.log("First bill: €" + operation.toFixed(2));
operation = 0;

operation = 26.67 + (26.67 * 0.15);
console.log("Second bill = €" + operation);
operation = 0;

operation = 35.92 + (35.92 * 0.20);
console.log("Third bill = €" + operation);
operation = 0;
console.log("");


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
console.log("Question 11");
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
