
// //1:00000000000000000000000000000000
// function startClock() {
//     let date = new Date();
//     var currentTime = date.toLocaleTimeString();
//     let timeElement = document.getElementById("time");
//     timeElement.textContent = currentTime;
// }
// function startClockInterval() {
//     window.setInterval(startClock, 1000);
// }


// //2:00000000000000000000000000000000
// function createPage() {
//     advWindow = window.open("adv-win.html", "_blank", "width=600,height=400");
//     advWindow.moveTo(600, 200);
// }
// function openPage() {
//     window.setTimeout(createPage, 3000);
// }

// function closePage() {
//     advWindow.close();
// }


//3:00000000000000000000000000000000
// function getUsername() {
//     const params = new URLSearchParams(window.location.search);
//     const username = params.get('username');
//     if (username) {
//         document.getElementById('welcome').innerHTML = `Welcome ${username}`;
//     }
//     else {
//         // alert(enter you name);
//     }
// }
// //getUsername();
// window.addEventListener('DOMContentLoaded', getUsername);

// //4:00000000000000000000000000000000
// // // Auto-scroll
// function scrollText() {
//     window.scrollBy(0, 20);
// }
// setInterval(scrollText, 500);


// //5:0000000000000000000000000000000000

var fullNameRegExp = new RegExp("^([a-zA-z]{3,})\\s[a-zA-z]{3,}$");
//var chickValidateName = false;
do {
    var fullName = prompt("Enter Your Full Name: EX: Full Name ");
    //chickValidateName = fullNameRegExp.test(fullName);
    // if (!chickValidateName) {
    // }
} while (!fullNameRegExp.test(fullName));





var emailUserRegExp = /^[a-z0-9_\.-]+@[a-z]+\.(com|net|edu|org)\.eg$/;
//var chickValidateEmail = false;
do {
    var emailUser = prompt("Enter Your Email: EX: name@domain.com.eg");
    // chickValidateEmail = emailUserRegExp.test(emailUser);
    // if (!chickValidateEmail) {
    //alert("Email not valid! try again");

} while (!emailUserRegExp.test(emailUser));


alert("Full Name and Email valid");

window.alert(`Your full name is: ${fullName}`);

window.alert(`Your email is: ${emailUser}`);