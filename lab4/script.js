
//part one 
console.log("part one");
var name = "Abdullah", age = 24, studentOrNot = false;
console.log("My name : " + name);
console.log("My age : " + age);
console.log("Student : " + studentOrNot);

//part two
console.log();
console.log("part two");
var a = 10, b = 20;
var sum = a + b;
var diff = a - b;
var product = a * b;
var quotient = a / b;
var remainder = a % b;
console.log("Sum: " + sum);
console.log("Difference: " + diff);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);

//part three
console.log("part three");
var number = prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive.");
}
else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
var age = (prompt("Enter your age:"));
if (age >= 18) {
    console.log("You are a eligible.");
}
else {
    console.log("You are not eligible.");
}

//part four
console.log("part four");
var day = prompt("Enter a day of the week.:");
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's Workday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's Weekend");
        break;
    default:
        console.log("Invalid day entered.");
}