//1:
(function (num1, num2) {
    alert("Sum: " + (num1 + num2))
})(7, 8);


//2:

//a:
let arr = [1, 3, 6, 4, 8, 4, 1, 0, 11, 17];
const oddNumbers = arr.filter(num => num % 2 !== 0);

//b:
oddNumbers.forEach(element => {
    console.log(element);
});

//c:
let oddNNumbersSquare = oddNumbers.map(element => element * element)
console.log(oddNNumbersSquare);

//d:
const obj = {
    name: "Test",
    normalFunc: function () {
        console.log(this.name); // works
    },
    arrowFunc: () => {
        console.log(this.name); // undefined or global
    }
}
obj.normalFunc();
obj.arrowFunc();

//3:
const array = [1, 2, 3];
const arrSO = [...arr];
console.log(arrSO);

//4:
class Student {
    constructo(name, university, faculty, grad) {
        this.name = name;
        this.university = university;
        this.faculty = faculty;
        this.grad = grad;
    }
    getInfo() {
        return (`${this.name} is a student in faculty of ${this.faculty} in university ${this.university}
        And his final grad is ${this.grade}.`)
    }
}
let abdullah = new Student('Abdullah', 'Assiut', 'Computer Science', '3.5 GPA');
console.log(abdullah.getInfo());

//5:
const students = new Set();
students.add("Ahmed");
students.add("Mhmd");
students.add("Ali");
console.log([...students]);
for (let name of students) {
    console.log(name);
}

//6:
const tips = [
    "Keep your code clean and readable.",
    "Use meaningful variable and function names.",
    "Break down problems into smaller pieces.",
    "Comment your code where necessary.",
    "Always test your code after writing.",
    "Use version control (like Git) for your projects.",
    "Avoid repeating yourself — use functions and loops.",
    "Understand error messages — they guide you.",
    "Practice consistently to improve your logic.",
    "Learn how to debug using developer tools."
];
function displayAllTips() {
    for (let tip of tips) {
        console.log(tip);
    }
}

function* tipGenerator() {
    for (let tip of tips) {
        yield tip;
    }
}
const gen = tipGenerator();

function displayOneTip() {
    setInterval(() => {
        let nextTip = gen.next().value;
        console.log(nextTip);
    }, 3000);
}

//7:
//1: (?.)
const user = {
    profile: {
        address: {
            street: "123 Main St"
        }
    }
};

const street = user?.profile?.address?.street; // "123 Main St"
const city = user?.profile?.address?.city;   // undefined

//2:  (??)
const name = null;
const defaultName = name ?? "Guest"; // "Guest"

const count = 0;
const defaultCount = count ?? 1; // 0 (not 1, as 0 is not null or undefined)

//3:  (await)
// In a module file (e.g., data.js)
// const data = await fetchDataFromServer();// async function
// export default data;

//3: bonus
class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize;
    }

    #top = 0;
    #list = [];
    #getQueueElements() {
        for (let i = 0; i < this.#top; i++)
            console.log(this.#list[i]);
        return this.#top;
    }

    getCurrentSize() {
        return this.#top;
    }

    viewQueue() {
        this.#getQueueElements();
    }
    returnQueue() {
        return this.#getQueueElements();
    }
    inQueue(element) {
        if (this.#top >= this.maxSize) {
            console.log("the Queue is full");
            return 0;
        }
        this.#list[this.#top++] = element;
    }
    deQueue() {
        if (this.isEmpty()) {
            console.log("the Queue is empty")
            return 0;
        }
        this.#top--;
    }
    isEmpty() {
        return this.#top === 0;
    }
}
var queuList = new Queue(10);
queuList.inQueue("Element 1");
queuList.inQueue("Element 2");
queuList.inQueue("Element 3");
queuList.inQueue("Element 4");
queuList.inQueue("Element 5");
queuList.deQueue();
queuList.viewQueue();
console.log("Current Size: " + queuList.getCurrentSize());
var allList = () => {
    return queuList.returnQueue();
}
console.log(allList());