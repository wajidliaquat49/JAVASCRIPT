// [Chapter : 35 : Functions];

//===== Structure of the function =====\\;
// function funcName() {
// }
// funcName();



//===== Syntax of Function =====\\;
// function data(parameter1, parameter2, parameter3) {
//    // code to be executed
// };
// data();



// function abc() {
//     console.log("Hello")
// };
// abc();
// abc();
// abc();





//=====Example 1=====\\;

// function submitForm() {
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     console.log(name.value);
//     console.log(email.value);

//     name.value = "";
//     email.value = "";
// };




// function submitForm() {
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     if (name.value && email.value) {
//         console.log(name.value);
//         console.log(email.value);

//         name.value = "";
//         email.value = "";

//     } else {
//         console.log("Please enter your value")
//     }

// }



// function submitForm() {
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     if (name.value.trim() && email.value.trim()) {
//         console.log(name.value);
//         console.log(email.value);

//         name.value = "";
//         email.value = "";

//     } else {
//         console.log("Please enter your value")
//     }

// }
