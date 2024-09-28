//=======[Object]=======\\,

// Defination:[

// An object is a collection of properties,
// and a property is an association between a name (or key) and a value.
// A property's value can be a function, in which case the property is known as a method...

// for Example: Campare it with a cup : A cup is an object, with properties , A cup has a color, a design, weight,
// a material it is made of etc...

// ];

// Basic structure of object;
// var myInfo = {};
// console.log("myInfo===>", myInfo);


// var myInfo = {
//     name: "Wajid Ali",    // Property
//     fatherName: "Liaqat Ali", // String
//     isMarried: true, // Boolean
//     childrens: 2, // Number
//     age: 27,
// };


// // Add Property ;
// myInfo.CNIC = "4310533647437";
// myInfo.dob = new Date("07-09-2007"); // object


// myInfo.calculateage = function () {
//     console.log("this=>", this.dob);
//     var now = new Date().getFullYear();
//     var userDobYear = new Date(this.dob).getFullYear();
//     var userAge = now - userDobYear;
//     return userAge;
// }

// console.log("myInfo===>", myInfo);
// console.log("Calculate Age Method=>", myInfo.calculateage());


// // Delete object property;
// delete myInfo.age;
// console.log("myInfo after delete=>", myInfo);

// document.getElementById("name").innerText = myInfo.name;
// document.getElementById("fatherName").innerText = myInfo.fatherName;
// document.getElementById("isMarried").innerText = myInfo.isMarried;
// document.getElementById("Childrens").innerText = myInfo.childrens;
// document.getElementById("Age").innerText = new Date(myInfo.age).toLocaleDateString();
// document.getElementById("Age").innerText = myInfo.calculateage();





