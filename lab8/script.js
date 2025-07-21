
// "use strict";
// //1:
function whichKeyboardKey() {
    document.getElementById("myInput").addEventListener("keydown", function (event) {
        var keyName = event.key;
        var keyCode = event.code;
        alert("Key pressed: " + keyName + " (Code: " + keyCode + ")");
    })
}
function whichMouseButton(event) {
    var buttonName = event.button
    let buttonText = ["Left", "Middle", "Right"];
    alert("Mouse Button: " + (buttonText[buttonName] || "Unknown"));
}

//2:
let clockInterval;
function showCurrentTime() {
    var date = new Date();
    document.getElementById("showTime").textContent = date.toLocaleTimeString();
}

function startClock() {
    alert("Clock started!");
    showCurrentTime();
    clockInterval = setInterval(showCurrentTime, 1000);
}

document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key.toLowerCase() === "w") {
        clearInterval(clockInterval);
        alert("Clock stopped!");
    }
});

//3:
document.addEventListener("DOMContentLoaded", function () {
    const fullName = document.getElementById("fullName");
    const nameMsg = document.getElementById("nameMsg");
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeatPassword");
    const passMsg = document.getElementById("passMsg");
    const form = document.getElementById("registrationForm");


    fullName.addEventListener("focus", function () {
        fullName.style.border = "solid 1px blue";
    });
    fullName.addEventListener("blur", function () {
        fullName.style.border = "";
        if (fullName.value.trim().length <= 3) {
            nameMsg.style.display = "inline";
            fullName.focus();
            fullName.style.backgroundColor = "gray";
        } else {
            nameMsg.style.display = "none";
            fullName.style.backgroundColor = "white";
        }
    });
    fullName.addEventListener("input", function () {
        if (fullName.value.trim().length > 3) {
            nameMsg.style.display = "none";
            fullName.style.backgroundColor = "white";
        }
    });

    repeatPassword.addEventListener("blur", function () {
        if (!password.value || !repeatPassword.value || password.value !== repeatPassword.value) {
            passMsg.style.display = "inline";
            repeatPassword.style.backgroundColor = "gray";
        } else {
            passMsg.style.display = "none";
            repeatPassword.style.backgroundColor = "white";
        }
    });
    repeatPassword.addEventListener("input", function () {
        if (password.value && repeatPassword.value && password.value === repeatPassword.value) {
            passMsg.style.display = "none";
            repeatPassword.style.backgroundColor = "white";
        }
    });


    form.addEventListener("submit", function (e) {
        let valid = true;
        if (fullName.value.trim().length <= 3) {
            nameMsg.style.display = "inline";
            fullName.focus();
            fullName.select();
            fullName.style.backgroundColor = "gray";
            valid = false;
        }
        if (!password.value || !repeatPassword.value || password.value !== repeatPassword.value) {
            passMsg.style.display = "inline";
            repeatPassword.style.backgroundColor = "gray";
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
            return false;
        }
    });
});
// //4:
// const star = document.getElementById("star") || document.querySelector(".image img");
// let isClicked = false;

// function filledStar() {
//     if (!isClicked) {
//         star.src = 'images/star-filled.png';
//     }
// }

// function emptyStar() {
//     if (!isClicked) {
//         star.src = 'images/star-empty.jpeg';
//     }
// }

// function clickedStar() {
//     isClicked = !isClicked;
//     if (isClicked) {
//         star.src = 'images/star-filled.png';
//     } else {
//         star.src = 'images/star-empty.jpeg';
//     }
// }
// star.addEventListener('mouseover', filledStar);
// star.addEventListener('mouseout', emptyStar);
// star.addEventListener('click', clickedStar);


// //5:
// const searchText = document.getElementById("search");
// searchText.addEventListener("focus", function () {
//     searchText.style.border = "solid 1px blue";
//     searchText.style.width = "600px";
//     searchText.style.transition = "width 0.5s ease";
// });
// searchText.addEventListener("blur", function () {
//     searchText.style.border = "";
//     searchText.style.width = "200px";
// });


//6:
var imageOpacity = document.getElementsByClassName("image-opacity");
var imgOpac = 0;
for (let i = 0; i < imageOpacity.length; i++) {
    imageOpacity[i].addEventListener("mouseover", function () {
        imageOpacity[i].style.opacity = (imgOpac += 0.250);
        if (imgOpac == 1) imgOpac = 0.250;
    });
    imageOpacity[i].addEventListener("mouseout", function () {
        imageOpacity[i].style.opacity = 1;
    });
}   