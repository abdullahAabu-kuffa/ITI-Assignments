//1: Define an array of tips
// const tips = [
//     "Always declare variables using let or const.",
//     "Use === instead of == to avoid type coercion.",
//     "Use 'const' when you don't need to reassign the variable.",
//     "JavaScript is case-sensitive!",
//     "Functions are first-class objects in JavaScript.",
//     "Avoid using 'var'; prefer 'let' and 'const'.",
//     "Array methods like map, filter, and reduce are powerful.",
//     "Use template literals (`) for cleaner string interpolation.",
//     "Always handle errors in asynchronous code using try/catch or .catch().",
//     "The DOM can be accessed and modified using JavaScript."
// ];
// function showRandomTip() {
//     const tipElement = document.getElementById("tip");
//     const randomIndex = Math.floor(Math.random() * tips.length);
//     tipElement.textContent = tips[randomIndex];
// }
// showRandomTip();

// //2 and 3: Function to show the current date
// function showCurrentDate() {
//     const currentDate = document.getElementById("current-date");
//     const date = new Date();
//     currentDate.textContent = date.toLocaleDateString();

// }

//4:
// function checkDateFormat() {
//     var dateToday = prompt("enter the date in the following format (DD-MM-YYYY) ex. 22-01-1999");
//     if (dateToday && dateToday.length === 10 && dateToday[2] === '-' && dateToday[5] === '-') {
//         return dateToday;
//     }
//     return null;
// }
// function setUserDate() {
//     try {
//         const dateToday = checkDateFormat();
//         if (dateToday) {
//             const showDate = document.getElementById("show-date");
//             var year = dateToday.substring(6, 10);
//             var month = dateToday.substring(3, 5) - 1;
//             var day = dateToday.substring(0, 2);
//             var userDate = new Date(year, month, day);
//             showDate.textContent = userDate.toDateString();
//         } else {
//             alert("Wrong Date Format");
//         }
//     } catch (error) {
//         alert("An error occurred while setting the date: " + error.message);
//         console.error("Error in setUserDate:", error);
//     }
// }

//5:
// const arrOfNum = [1, 3, 4, 7, 9, 7, 5, 3, 2, 1, 1, 3, 0];
// num = 8;
// function countNumberInArray(arrOfNum, num) {
//     var countNum = 0;
//     for (let i = 0; i < arrOfNum.length; i++) {
//         if (arrOfNum[i] == num) countNum++;
//     }
//     return countNum;
// }
// console.log(countNumberInArray(arrOfNum, num));


// //6:
// const arrOfChar = ["Welcome to Javescript"];
// const char = "t";
// function removeCharFromArray(arrOfChar, char) {
//     var result = [];
//     for (let i = 0; i < arrOfChar.length; i++) {
//         result.push(arrOfChar[i].replaceAll(char, ""));
//     }
//     return result;
// }
// console.log(removeCharFromArray(arrOfChar, char));


//ponus:

function checkDateFormat() {
    var dateToday = prompt("enter the date in the following format (DD-MM-YYYY) ex. 22-01-1999");
    if (dateToday && dateToday.length === 10 && dateToday[2] === '-' && dateToday[5] === '-') {
        var day = parseInt(dateToday.substring(0, 2));
        var month = parseInt(dateToday.substring(3, 5)) - 1;
        var year = parseInt(dateToday.substring(6, 10));
        var userDate = new Date(year, month, day);
        if (
            userDate.getFullYear() === year &&
            userDate.getMonth() === month &&
            userDate.getDate() === day
        ) {
            return userDate;
        }
        else {
            throw new Error("Date is not valid.");
        }
    } else {
        throw new Error("Date format is incorrect. Please use DD-MM-YYYY.");
    }
}

function setUserDate() {
    try {
        const userDate = checkDateFormat();
        const showDate = document.getElementById("show-date");
        showDate.textContent = userDate.toDateString();
    } catch (error) {
        alert("Error: " + error.message);
        console.error("Error in setUserDate:", error);
    }
}