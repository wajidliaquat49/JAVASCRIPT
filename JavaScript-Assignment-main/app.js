//================Assignment==============\\





// Q (01) Grade Calculator:

var english = +prompt("Enter your english marks out of Hundred");
var math = +prompt("Enter your math marks out of Hundred");
var urdu = + prompt("Enter your urdu marks out of Hundred");

if (english + math + urdu >= 301) {
    console.log("Result Not Found")
}
else if (english + math + urdu >= 250) {
    console.log(english + math + urdu + " " + "Marks" + " " + "A1 grade" + " " + "Congratulations")
}
else if (english + math + urdu >= 200) {
    console.log(english + math + urdu + " " + "Marks" + " " + "A grade" + " " + "Congratulations")
}
else if (english + math + urdu >= 150) {
    console.log(english + math + urdu + " " + "Marks" + " " + "B grade" + " " + "Congratulations")
}
else if (english + math + urdu >= 100) {
    console.log(english + math + urdu + " " + "Marks" + " " + "C grade" + " " + "Congratulations")
}
else if (english + math + urdu >= 80) {
    console.log(english + math + urdu + " " + "Marks" + " " + "D grade" + " " + "Congratulations")
}
else if (english + math + urdu < 75) {
    console.log(english + math + urdu + " " + "Marks" + " " + "Sorry! You are fail Try again Best of Luck")
}
else {
    console.log("Result Not Found")
}







// Q (02):   Even / Odd Number Checker:

// var num = prompt("Enter any number");
// if (num % 2 === 0) {
//     console.log("Number is even")
// } else {
//     console.log("Number is odd")
// }







// Q (03):   Positive / Negative Number Checker:

// var num = +prompt("Enter any number");
// if (num >= 1) {
//     console.log("Number is positive")
// }
// else if (num === 0) {
//     console.log("Number is Zero (0)")
// }
// else {
//     console.log("Number is negative")
// }






// Q (04) Age Group Classifier:
// var age = + prompt("Enter your age");
// if (age <= 12) {
//     console.log("Child")
// }
// else if (age <= 19) {
//     console.log("Teenager")
// }
// else if (age <= 35) {
//     console.log("Adult")
// }
// else if (age <= 50) {
//     console.log("Man")
// }
// else if (age <= 65) {
//     console.log("Old")
// }
// else {
//     console.log("Invalid age")
// }







// Q (05) Character Vowel / Consonant Checker:

// var character = prompt("Enter any character");
// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//     console.log("It is vowel character")
// }
// else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U") {
//     console.log("It is vowel character")
// }
// else {
//     console.log("It is consonant character")
// }







// Q (06) Triangle Type Identifier:

// var equilateral1 = + prompt("Enter Triangle right Lenth ");
// var equilateral2 = + prompt("Enter Triangle left Lenth ");
// var equilateral3 = +prompt("Enter Triangle bottom Lenth ");

// if (equilateral1 === equilateral2 && equilateral1 === equilateral3 && equilateral2 === equilateral3) {
//     console.log("Equilateral Triangle")
// }
// else if (equilateral1 === equilateral2) {
//     console.log("Isosceles Triangle")
// }
// else {
//     console.log("Scalene Triangle")
// }







// Q (07)  Power Calculator

// var base = +prompt("Enter your base");
// var exponent = +prompt("Enter your exponent");
// if (base ** exponent) {
//     console.log(base ** exponent)
// }






// Q (08) Temperature Converter                ( Celsius into Fahrenheit)

// var celsius = +prompt("Enter Celsius Temprature");
// if (celsius * 1.8 + 32) {
//     console.log(celsius * 1.8 + 32 + " " + "Fahrenheit")
// }
// else {
//     console.log("Invalid")
// }






//  Q (09)  Maximum of two Numbers:

// var num1 = + prompt("Please enter any large number");
// var num2 = + prompt("Please enter any large number");

// if (num1 >= 300 && num2 >= 300) {
//     console.log(num1 + num2 + " " + "Number is Large")
// } else {
//     console.log("Please enter valid large number  greater than 300")
// }






// Q (10) Manimum of three Numbers:

// var num1 = + prompt("Please enter any small number");
// var num2 = + prompt("Please enter any small number");
// var num3 = + prompt("Please enter any small number");

// if (num1 <= 30 && num2 <= 30 && num3 <= 30) {
//     console.log(num1 + num2 + num3 + " " + "Number is small")
// } else {
//     console.log("Please enter valid small number less than 30 ")
// }












