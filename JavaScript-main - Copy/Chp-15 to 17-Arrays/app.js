// ========================[Chapter 15 to 17    "Arrays" ]===========================\\

// Defination: To collect multiply data in one element or variable

// var student1 = "Wajid";
// var student2 = "Ali";

// var students = [];
// console.log(students);

// var students = ["Wajid", " Ali", "Ahmed"];
// console.log(students);

// var students = ["Wajid", " Ali", "Ahmed"];
// console.log(students[0]);


// =============Update Value===========\\

// var students = ["Wajid", " Ali", "Ahmed"];
// students[3] = "Zain";
// students[4] = "Saif";
// console.log(students)

//=================**==================\\


//=============To Find length Arrays's element===================\\

// var students = ["Wajid", " Ali", "Ahmed"];
// console.log(students.length);

//=====================**======================\\


// var students = ["Wajid", "Ali"];
// students[5] = "Abc";
// console.log(students);

//  (Result)
//  (6) ['Wajid' , 'Ali' , empty x 3 , 'Abc']
//  0: "Wajid"
//  1: "Ali"
//  5: "Abc"
//  length: 6
//================**===============\\






//=================Methods================\\

// methods

// push , add 1 or more element in the last of an array
// pop , remove one element from last of an array
// unshift , add 1 or more element in the start of an array
// shift , remove one element from start of an array
// Splice , we can add , delete , and update 1 or more element  in the start , center, and last of the array
// Slice , we can 1 or more element copy from the array



// Push:
// var students = ["Wajid", "Ali"];
// students.push("Ahmed", "Zain", "Saif");
// console.log(students);


// Push ReturnValue:                  Push at the time of returnvalue tell us length of the arrays
// var students = ["Wajid", "Ali"];
// var returnValue = students.push("Ahmed", "Zain", "Saif");
// console.log(returnValue);
// console.log(students);


// Pop:
// var students = ["Wajid", "Ali", "Ahmed"];
// students.pop();
// console.log(students);


// Pop ReturnValue                 Pop at time of returnvalue return that value that deleted
// var students = ["Wajid", "Ali", "Ahmed"];
// var returnValue = students.pop();
// console.log(returnValue);
// console.log(students);


// Unshift
// var students = ["Wajid", "Ali"];
// students.unshift("Ahmed", "Zain", "Saif");
// console.log(students);


// Unshift ReturnValue:                  Unshift at the time of returnvalue tell us length of the arrays
// var students = ["Wajid", "Ali"];
// var returnValue = students.unshift("Ahmed", "Zain", "Saif");
// console.log(returnValue);
// console.log(students);



// Shift
// var students = ["Wajid", "Ali", "Ahmed"];
// students.shift();
// console.log(students);


// Shift ReturnValue                 Shift at time of returnvalue return that value that deleted
// var students = ["Wajid", "Ali", "Ahmed"];
// var returnValue = students.shift();
// console.log(returnValue);
// console.log(students);


// Splice
// var students = ["Wajid", "Ali", "Ahmed"];
// // students.splice(0,1);
// // students.splice(1,1);
// // students.splice(2,1);
// // students.splice(0,2);
// // students.splice(0,3);
// // students.splice(1,2)
// // students.splice(1,0,"Zain");
// // students.splice(1,2,"Zain" , "Saif")
// console.log(students);


// Splice
// Splice ReturnValue               Splice at time of returnvalue return that value that deleted with [] square brackets
// var students = ["Wajid", "Ali", "Ahmed"];
// var returnValue = students.splice(0, 1);
// console.log(returnValue);
// console.log(students);


// // Slice
// var students = ["Wajid", "Ali", "Ahmed"];
// // var copy = students.slice(0,1);
// // var copy = students.slice(0, 2)
// // var copy = students.slice(1,2);
// // var copy = students.slice(1,3)
// // var copy = students.slice(0)
// // var copy = students.slice(1)
// // var copy = students.slice(2)
// // var copy = students.slice(-1)
// // var copy = students.slice(-2)
// // var copy = students.slice(-3)
// console.log(copy);
// console.log(students);



