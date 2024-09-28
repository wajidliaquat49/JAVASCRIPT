

var questions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(questions[Math.floor(Math.random() * 20)]);

var allBoxes = document.getElementsByClassName("box");
for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", function () {
        clearAll();
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.innerText = questions[Math.floor(Math.random() * 20)];

    })
}

function clearAll() {
    for (var i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.backgroundColor = "black";
        allBoxes[i].style.color = "white";
        allBoxes[i].innerText = i + 1;
    }

}