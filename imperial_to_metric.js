var myName = prompt("What is your name");
var heightInches = prompt("How tall are you in inches");
var weightPounds = prompt("How much do you weigh");
var heightCentimeters = heightInches * 2.54;
var weightKilograms = weightPounds * 0.453592;

// console.log(myName + ' is ' + heightCentimeters + ' cm and ' + weightKilograms + ' kg.');



function greeting() {
  console.log("Hello " + myName);
}

greeting();

function convertInchesToCentimeters (number) {
  heightCentimeters = number * 2.54
  return heightCentimeters
}
console.log(myName + ' is ' + convertInchesToCentimeters(heightInches) + ' cm and ' + weightKilograms + ' kg.');
