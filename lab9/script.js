// //1:Start local storage

// function saveToLocalStorage(event) {
//     event.preventDefault();
//     if (document.forms[0].elements["remember"].checked) {
//         var name = document.forms[0].elements["name"].value;
//         var password = document.forms[0].elements["password"].value;
//         if (!localStorage.getItem("name")) {
//             localStorage.setItem('name', name);
//         }
//         if (!localStorage.getItem("password")) {
//             localStorage.setItem('password', password);
//         }
//     }
//     else {
//         if (localStorage.getItem("name")) {
//             localStorage.removeItem("name")
//         }
//         if (localStorage.getItem("password")) {
//             localStorage.removeItem("password")
//         }
//     }
// }
// function gitInfo() {
//     if (localStorage.getItem('name')) {
//         document.forms[0].elements["name"].value = localStorage.getItem("name");
//     }
//     if (localStorage.getItem('password')) {
//         document.forms[0].elements["password"].value = localStorage.getItem("password");
//     }
// }
// gitInfo();
// //End Local Storage

// //6:Start Cookies Storage
// function parseAllCookies() {
//     var cookiesString = document.cookie;
//     var cookiesArray = cookiesString.split("; ");
//     var cookiesObject = {};
//     cookiesArray.forEach(cookiePair => {
//         var cookieKeyValue = cookiePair.split("=");
//         cookiesObject[cookieKeyValue[0]] = cookieKeyValue[1];
//     })
//     return cookiesObject;
// }

// function saveToCookiesStorage(event) {
//     event.preventDefault();
//     if (document.forms[0].elements["remember"].checked) {
//         var name = document.forms[0].elements["name"].value;
//         var password = document.forms[0].elements["password"].value;
//         var date = new Date();
//         date.setDate(date.getDate() + 1)
//         document.cookie = `name= ${name}; expires= ${date.toUTCString()}`
//         document.cookie = `password= ${password}; expires= ${date.toUTCString()}`
//     }
//     else {
//         var dateRemove = new Date();
//         dateRemove.setDate(dateRemove.getDate() - 1)
//         document.cookie = `name= ${name}; expires= ${dateRemove.toUTCString()}`
//         document.cookie = `password= ${password}; expires= ${dateRemove.toUTCString()}`
//     }
// }
// function gitCookies() {
//     var cookies = parseAllCookies();
//     if (cookies.name)
//         document.forms[0].elements["name"].value = cookies.name;
//     if (cookies.password)
//         document.forms[0].elements["password"].value = cookies.password;
// }
// gitCookies();
// //End Cookies Storage

// //3:Start Json
// const ID = 'id';
// const NAME = 'name';
// const AGE = 'age';
// const ADDRESS = 'address';
// const SKILLS = 'skills';
// const IS_LEADER = 'isLeader';

// // Array of 3 students
// const students = [
//     {
//         [ID]: 123,
//         [NAME]: 'Abdullah',
//         [AGE]: 24,
//         [ADDRESS]: 'Dirut, Assuit, Egypt',
//         [SKILLS]: ['HTML', 'CSS', 'JavaScript'],
//         [IS_LEADER]: true
//     },
//     {
//         [ID]: 124,
//         [NAME]: 'Sara',
//         [AGE]: 22,
//         [ADDRESS]: null,
//         [SKILLS]: ['Python', 'Django'],
//         [IS_LEADER]: false
//     },
//     {
//         [ID]: 125,
//         [NAME]: 'Omar',
//         [AGE]: 23,
//         [ADDRESS]: 'Cairo, Egypt',
//         [SKILLS]: ['C++', 'Java'],
//         [IS_LEADER]: false
//     }
// ];

// // Print each student name and skills
// students.forEach(stu => {
//     console.log(`Name: ${stu.name}, Skills: ${stu.skills.join(', ')}`);
// });

// // Optionally, set the first student to the form as before
// function setValuesToForm() {
//     const student = students[0];
//     document.forms[0].elements["id"].value = student.id;
//     document.forms[0].elements["name"].value = student.name;
//     document.forms[0].elements["age"].value = student.age;
//     document.forms[0].elements["address"].value = student.address;
//     document.forms[0].elements["skills"].value = student.skills;
//     document.forms[0].elements["isLeader"].value = student.isLeader;
// }
// setValuesToForm();
//End Json


//5: Start Ajax
var users = {}
function loadUsersData() {
    var xhrUsers = new XMLHttpRequest();
    xhrUsers.open("get", "https://reqres.in/api/users")
    xhrUsers.onreadystatechange = function () {
        if (xhrUsers.readyState == 4 && xhrUsers.status == 200) {
            var response = JSON.parse(xhrUsers.responseText);
            users = response.data;
        }
    }
    xhrUsers.setRequestHeader("x-api-key", "reqres-free-v1");
    xhrUsers.send();
}
loadUsersData();
//display by id
function displayUserById(e) {
    e.preventDefault();
    var userId = document.forms[0].elements["id"].value;
    if (userId > 6) {
        error = new Error(RangeError + "Max Id : 6")
        throw error;
    }
    else {
        users.forEach(user => {
            if (String(user.id) == userId) {
                document.getElementById("id").innerText = "ID : " + user.id;
                document.getElementById("firstname").innerText = "First Name : " + user.first_name;
                document.getElementById("lastname").innerText = "Last Name : " + user.last_name;
                document.getElementById("avatar").src = user.avatar;
            }
        });
    }
}

//dropdown
function displayUserByName(e) {
    e.preventDefault();
    var userName = document.getElementById("selectName").value;
    var container = document.getElementById('usersList');
    if (!userName || !container) {
        container.innerHTML = '';
        return;
    }
    if (userName == "All") {
        container.innerHTML = '';
        users.forEach(user => {
            container.innerHTML += `<div style="padding: 010px 30px;
                                    text-align: center;
                                    line-height: 2;
                                    border: 1px solid #ccc;
                                    margin-top:20px;
                                    ">
                                         User Data:
                                         <br>
                                    First Name: ${user.first_name} 
                                    <br>
                                    Last Name: ${user.last_name}
                                    <br>
                                    <img src="${user.avatar}" width="100"></div>`;
        })
    }
    else {
        users.forEach(user => {
            if (user.first_name == userName) {
                container.innerHTML = `<div style="padding: 010px 30px;
                                    text-align: center;
                                    line-height: 2;
                                    border: 1px solid #ccc;
                                    margin-top:20px;
                                    ">
                                    User Data:
                                         <br>
                                    First Name: ${user.first_name} 
                                    <br>
                                    Last Name: ${user.last_name}
                                    <br>
                                    <img src="${user.avatar}" width="100"></div>`;
            }
        })
    }
}
//End Ajax