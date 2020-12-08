// Step 1
var snackServings = 15;
var guests = 10;

// Step 2
console.log("Step 2:");
console.log(snackServings + guests)

// Step 3
console.log("\nStep 3:");
console.log(guests - snackServings);
console.log(snackServings - guests);

// Step 4
console.log("\nStep 4:");
console.log(snackServings * guests);

// Step 5
console.log("\nStep 5:");
console.log(snackServings / guests);

// Step 6
console.log("\nStep 6:");
var drinks = 10;
var resultOne = (snackServings * guests) / drinks;
console.log(resultOne);

// Step 7
console.log("\nStep 7:");
var monkeys = 15;
var bananas = 9;
console.log(monkeys / bananas);

// Step 8
console.log("\nStep 8:");
var monkeyFights = 20;
var resultTwo = (monkeys + bananas) * monkeyFights;
console.log(resultTwo);

// Step 9
console.log("\nStep 9:");
monkeys++;
console.log("Monkeys: " + monkeys)

// Step 10
console.log("\nStep 10:");
bananas--;
console.log("Bananas: " + bananas);

// Step 11
console.log("\nStep 11:");
var happiness = monkeys - bananas;
console.log("happiness + monkeyFights = " + `${happiness + monkeyFights}`);

// Step 12
console.log("\nStep 12:");
console.log(resultOne % resultTwo);
