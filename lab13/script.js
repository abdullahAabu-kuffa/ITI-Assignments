

//1:
(async function fetchData() {
    var response = await fetch("https://jsonplaceholder.typicode.com/users")
    var jsonData = await response.json();
    displayUsers(jsonData);
    button.disabled = false;
})();
//a:
const button = document.getElementById('btn');
button.disabled = true;

function displayUsers(users) {
    var select = document.createElement('select');
    select.style.width = '200px';
    select.style.display = 'inline';
    document.body.appendChild(select);
    for (let user of users) {
        var option = document.createElement('option');
        select.appendChild(option).innerText = user.name;
    }
    select.addEventListener('change', function () {
        var selectedUser = users.find(user => user.name === select.value);
        if (selectedUser) {
            var card = createCard(selectedUser);
            document.body.appendChild(card);
        }
    });
}
//b:

//createe card to show user data
function createCard(user) {
    var card = document.getElementById('btn');
    card.innerHTML = '';
    var id = document.createElement('p');
    id.innerText = `ID: ${user.id}`;
    card.appendChild(id);
    var name = document.createElement('h3');
    name.innerText = user.name;
    card.appendChild(name);

    var email = document.createElement('p');
    email.innerText = `Email: ${user.email}`;
    card.appendChild(email);

    var address = document.createElement('p');
    address.innerText = `Address: ${user.address.street}, ${user.address.city}`;
    card.appendChild(address);

    return card;
}
const post = {
    title: 'foo',
    body: 'bar',
    userId: 1
}
function postPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(data => {
            var card = document.getElementById('btn');
            card.innerHTML = '';

            var userId = document.createElement('p');
            userId.innerText = `User ID: ${data.userId}`;
            card.appendChild(userId);

            var title = document.createElement('h3');
            title.innerText = `Title: ${data.title}`;
            card.appendChild(title);

            var body = document.createElement('h5');
            body.innerText = `Body: ${data.body}`;
            card.appendChild(body);
        })
        .catch(error => console.error('Error:', error));
}
// class Size {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }

// class Image {
//     constructor(url, size = new Size()) {
//         this.url = url;
//         this.size = new Size();
//         this.size.width = size.width;
//         this.size.height = size.height;

//     }
//     getUrl() { return this.url; }
//     setUrl(url) { this.url = url; }
//     setSize(width, height) {
//         this.size.width = width;
//         this.size.height = height;
//     }
//     getSize() { return this.size; }
//     cloneImage() {
//         return new Image(this.url, this.size);
//     }
// }
// var image = new Image('afas', new Size(200, 100));
// console.log(image.cloneImage());


// function Employee(title) {
//     this.title = title;
// }
// Employee.prototype.setTitle = function (title) {
//     this.title = title;
// }
// Employee.prototype.getTitle = function () {
//     return this.title;
// }
// function Engineer(title, isManager) {
//     Employee.call(this, title);
//     this.isManager = isManager;
// }
// Engineer.prototype.constructor = Engineer;
// Engineer.prototype = Object.create(Employee.prototype);

// Engineer.prototype.setIsManager = function (isManager) {
//     this.isManager = isManager;
// }
// Engineer.prototype.getIsManager = function () {
//     return this.isManager;
// }
// var eng = new Engineer('sfaaf', true);
// console.log(eng.getIsManager());