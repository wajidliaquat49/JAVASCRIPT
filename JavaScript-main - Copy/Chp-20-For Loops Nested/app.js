// ========================[Chapter 20    "For Loops Nested" ]===========================\\


// for (var i = 0; i <= 5; i++) {
//     for (var j = 0; j <= 5; j++) {
//         console.log(i, j)
//     }
// }


// var array = [["Wajid", "Ali"], ["Meer", "Huzaifa"]];
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
// }


// var array = [["Wajid", "Ali"], ["Meer", "Huzaifa"]];
// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//         console.log(array[i][j])
//     }
// }



//===============Understand to above Question===============\\

// var array = [["Wajid"]];

// array[0] ===> ["Wajid"];

// array[0][0] ===> "Wajid"

//=====================================\\




//nested loop=>

// var userPrizeBond = [234, 235, 236, 237, 238, 323, 21, 313, 434, 124, 360];
// var prizeBondWinner = [
//   112, 152, 190, 201, 220, 236, 238, 250, 285, 310, 315, 320, 341, 360, 355,
//   380, 400,
// ];
// var userWon = [];
// for (var i = 0; i < userPrizeBond.length; i++) {
//   for (var j = 0; j < prizeBondWinner.length; j++) {
// console.log(
//   "i=>",
//   userPrizeBond[i],
//   "j=>",
//   prizeBondWinner[j],
//   userPrizeBond[i] === prizeBondWinner[j]
// );
//     if (userPrizeBond[i] === prizeBondWinner[j]) {
//       userWon.push(userPrizeBond[i]);
//     }
//   }
// }
// console.log("Prize bond ye nikle hen=>", userWon);

// var students1 = ["Ahmed", "Abdul", "Bilal", "Raza", "Haris", "Shoab"];
// var students2 = ["Hasan", "Tabish", "Usman", "Abdul", "Ahsan", "Hamza", "Bilal",];

// var duplication = []
// for(var i = 0; i < students1.length; i++){
//   for(var j = 0; j < students2.length; j++){
//     if(students1[i] === students2[j]){
//       duplication.push(students1[i])
//     }
//   }
// }
// console.log('These names are  in both list=>',duplication)


// for (var i = 0; i < 3; i++) {

//     for (var j = 0; j < 2; j++) {
//       console.log("i + j=>", i + j);
//     }
  
//   }
  
  // ##########
  // ##########
  // ##########
  // ##########
  // ##########
  // ##########
  // ##########
  // ##########
  
//   var rows = prompt("Rows");
//   var col = prompt("col");
  
//   for (var i = 0; i < rows; i++) {
//     var hashes = "";
//     for (var j = 0; j < col; j++) {
//       hashes = hashes + "#";
//     }
//     document.write(i + "==> " + hashes + "<br>");
//   }
  
//   var firstNames = ["Bilal", "Hamza", "Anas", "First"];
//   var lastNames = ["Raza", "Jawed", "ABC", "Last"];
//   var fullNames = [];
  
//   for (var i = 0; i < firstNames.length; i++) {
//     var fullName = firstNames[i] + " " + lastNames[i];
//     fullNames.push(fullName);
//   }
//   console.log(fullNames);
  
//    var string = "Saylani Welfare";
//    console.log(string.length);
//    console.log(string[2]);
  
//   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   console.log(arr.reverse());
  
  // split string ko array mein convert krne ke lye
  // join  array ko string mein convert krne ke lye
  
  // Mein koi string dun aap usko reverse krden
  
  // reverse the string
  
//   var str = "Hello World";
//   var strArr = str.split("");
//   console.log(strArr);
//   var strArrRev = strArr.reverse();
//   console.log(strArrRev);
//   var strArrRevJoin = strArrRev.join("");
//   console.log(strArrRevJoin);
  
//   var key = "214-213-21-321";
//   var sentence = "Students are just waiting to run away from class.";
//   // console.log(key.split("-"));
//   console.log(sentence.split(" ").length);
  

