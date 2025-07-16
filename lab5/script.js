// 1:
// window.alert("Welcome to My Site");
// var userName = prompt("Enter You Name");
// if (userName != null) {
//     document.writeln("Welcome, " + userName);
// }

// 2:
// function sum(num1, num2) {
//     return num1 + num2;
// }
// function buttonOnClicked() {
//     var num1 = prompt("Enter First Num");
//     var num2 = prompt("Enter second Num");
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
//     console.log(sum(num1, num2));
// }

// 3:
// function calcTemperature(temp) {
//     if (temp >= 30)
//         return "HOT";
//     else
//         return "COLD";
// }
// var temp = prompt("Enter today’s temperature")
// console.log(calcTemperature(temp));

// 4:
// function checkWeather(temperature, actualFeel) {
//     if (temperature >= 25 && temperature <= 30 && actualFeel >= 25 && actualFeel <= 30) {
//         return "Normal";
//     } else if (temperature < 25 && actualFeel < 25) {
//         return "Cold";
//     } else if (temperature > 30 && actualFeel > 30) {
//         return "Hot";
//     } else {
//         return "Ambiguous, can’t detect";
//     }
// }
// console.log(checkWeather(25, 25));

// 5:
// function checkEligibility(faculty) {
//     switch (faculty) {
//         case "FCI":
//             return "You’re eligible to Programming tracks";
//         case "Engineering":
//             return "You’re eligible to Network and Embedded tracks";
//         case "Commerce":
//             return "You’re eligible to ERP and Social media tracks";
//         default:
//             return "You’re eligible to SW fundamentals track";
//     }
// }
// console.log(checkEligibility("FCI"));

// 6:
// function printOddNumbers(start, end) {
//     for (var i = start; i <= end; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// printOddNumbers(1, 20);

// 7:
// function evaluateExpression(expression) {
//     var expression = prompt("Enter a mathematical expression (e.g., 5 + 3 * 2 - 1)");
//     const result = eval(expression);
//     alert(`You entered: ${expression}, and the result is: ${result}`);
// }

// 8:
"use strict";
function getUserInfo() {
    let name = "";
    let birthYear = 0;
    while (true) {
        name = prompt("Enter your name:");
        if (name) {
            break;
        }
        alert("Please enter a valid name (letters only).");
    }
    while (true) {
        birthYear = parseInt(prompt("Enter your birth year (before 2010):"));
        if (!isNaN(birthYear) && birthYear < 2010) {
            break;
        }
        alert("Please enter a valid birth year less than 2010.");
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    const output = `
    <h3>User Information</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Birth Year:</strong> ${birthYear}</p>
    <p><strong>Age:</strong> ${age}</p>`;
    document.getElementById("result").innerHTML = output;
}
getUserInfo();