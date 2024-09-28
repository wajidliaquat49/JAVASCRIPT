
var questions = document.getElementById("questions");
var allQuestions = [
    "1. What is JavaScript and how is it different from Java?",
    "2. Explain the concept of closures in JavaScript.",
    "3. What are JavaScript Promises and how do you use them?",
    "4. How does the 'this' keyword work in JavaScript?",
    "5. What is the difference between '=='' and '===' in JavaScript?",
    "6. Explain the event loop in JavaScript.",
    "7. What is the difference between 'let', 'const', and 'var'?",
    "8. How do you create and use modules in JavaScript?",
    "9. What is the purpose of the 'use strict' directive in JavaScript?",
    "10. How do arrow functions differ from regular functions in JavaScript?",
    "11. What are JavaScript data types?",
    "12. Explain the concept of hoisting in JavaScript.",
    "13. What are Higher-Order Functions in JavaScript?",
    "14. How does asynchronous programming work in JavaScript?",
    "15. What is the difference between null and undefined in JavaScript?",
    "16. How do you handle errors in JavaScript?",
    "17. What are JavaScript templates literals?",
    "18. How do you manipulate the DOM using JavaScript?",
    "19. What are JavaScript events and how do you manage them?",
    "20. Explain the purpose and usage of the fetch API in JavaScript."
];

var allBoxes = document.getElementsByClassName("box");
for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function () {
        allClear();
        this.style.backgroundColor = "red";
        this.style.color = "white";
        this.style.border = "1px solid black"
        questions.innerText = allQuestions[Math.floor(Math.random() * 20)];
    })
};

function allClear() {
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.backgroundColor = "black";
        allBoxes[i].style.color = "white";
        questions.innerText = allQuestions[Math.floor(Math.random() * 20)];
    }
};
