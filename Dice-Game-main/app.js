
var one_1 = document.getElementById("one_1");
var two_2 = document.getElementById("two_2");
var three_3 = document.getElementById("three_3");
var four_4 = document.getElementById("four_4");
var five_5 = document.getElementById("five_5");
var six_6 = document.getElementById("six_6");
var winnerid = document.getElementById("winnerid");
var looserid = document.getElementById("looserid");
var totalcounter = document.getElementById("totalcounter");
var winnercounter = document.getElementById("winnercounter");
var loosercounter = document.getElementById("loosercounter");


var totalcounter = 10;
var winnercounter = 0;
var loosercounter = 0;

function click_btn(usernumber) {

  var random = Math.ceil(Math.random() * 6);
  document.getElementById("totalcounter").innerText = --totalcounter;

  if (usernumber == random) {

    // var winnerid = document.getElementById("winnerid").style.backgroundColor = "green";
    // var looserid = document.getElementById("winnerid").style.color = "white";
    document.getElementById("winnercounter").innerText = ++winnercounter;

  } else {
    // var looserid = document.getElementById("looserid").style.backgroundColor = "red";
    // var looserid = document.getElementById("looserid").style.color = "white";
    document.getElementById("loosercounter").innerText = ++loosercounter;
  }
  Result();
}

function Result() {
  if (totalcounter == 0) {
    if (winnercounter >= 3) {

      var winnerid = document.getElementById("winnerid").style.backgroundColor = "green";
      var looserid = document.getElementById("winnerid").style.color = "white";
    } else {

      var looserid = document.getElementById("looserid").style.backgroundColor = "red";
      var looserid = document.getElementById("looserid").style.color = "white";

    }
    totalcounter = 10;
    winnercounter = 0;
    loosercounter = 0;
    totalcounter.innerText = totalcounter;
    winnercounter.innerText = winnercounter;
    loosercounter.innerText = loosercounter;



  }
}








