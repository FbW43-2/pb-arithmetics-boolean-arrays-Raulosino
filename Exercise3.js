// Step 1
console.log("Step 1:");
var myArray = ["Varrock", "lumbridge", "Ardougne", "Camelot", "Lumbridge"];

for (var i = 0; i < myArray.length; i++) {
    console.log("Position: " + i);
    console.log("Value: " + myArray[i]);
    console.log("");
}


// Step 2
console.log("Step 2:");
var thirdElement = myArray[2];
console.log(thirdElement);
console.log("");


// Step 3
console.log("Step 3:");
myArray[3] = "Catherby";
console.log(myArray[3]);