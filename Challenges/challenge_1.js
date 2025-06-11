// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

/* Write your code below. Good luck! 🙂 */

let massMark = 78;
let heightMark = 169;

let massJohn = 92;
let heightJohn = 188;

let bmiOfMark = massMark / (heightMark * heightMark);
let bmiOfJohn = massJohn / (heightJohn * heightJohn);

console.log(`BMI of Mark is ${bmiOfMark}`);
console.log(`BMI of John is ${bmiOfJohn}`);

let markHigherBMI = bmiOfMark > bmiOfJohn ? true : false;
console.log(`Mark have more than BMI of John: ${markHigherBMI}`);
