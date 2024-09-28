var milli = document.getElementById("milli");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");
var weeks = document.getElementById("weeks");
var months = document.getElementById("months");
var years = document.getElementById("years");

var now = new Date();
var eidTime = new Date("6/20/2024");
var milleseconds = now.getTime();
var eidTimeMillseconds = eidTime.getTime();
var eidTime = eidTimeMillseconds - milleseconds;

document.getElementById("milli").innerText = eidTime;

document.getElementById("seconds").innerText = Math.round(eidTime / 1000);

document.getElementById("minutes").innerText = Math.round(eidTime / 1000 / 60);

document.getElementById("hours").innerText = Math.round(eidTime / 1000 / 60 / 60);

document.getElementById("days").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24);

document.getElementById("weeks").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24 / 7);

document.getElementById("months").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24 / 30);

document.getElementById("years").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24 / 30 / 12);








































// var now = new Date();
// var eidTime = new Date("6/20/2024");
// var milleseconds = now.getTime();
// var eidTimeMillseconds = eidTime.getTime();
// var eidTime = milleseconds - eidTimeMillseconds;
// console.log("milleseconds=>", eidTime);
// document.getElementById("milli").innerText = eidTime;

// console.log("seconds=>", Math.round(eidTime / 1000));
// document.getElementById("seconds").innerText = Math.round(eidTime / 1000);

// console.log("minutes=>", Math.round(eidTime / 1000 / 60));
// document.getElementById("minutes").innerText = Math.round(eidTime / 1000 / 60);

// console.log("hours=>", Math.round(eidTime / 1000 / 60 / 60));
// document.getElementById("hours").innerText = Math.round(eidTime / 1000 / 60 / 60);

// console.log("day=>", Math.round(eidTime / 1000 / 60 / 60 / 24));
// document.getElementById("days").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24);

// console.log("weeks=>", Math.round(eidTime / 1000 / 60 / 60 / 24 / 7));
// document.getElementById("weeks").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24 / 7);

// console.log("months=>", Math.round(eidTime / 1000 / 60 / 60 / 24 / 30));
// document.getElementById("months").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24 / 30);

// console.log("years=>", Math.round(eidTime / 1000 / 60 / 60 / 24 / 30 / 12));
// document.getElementById("years").innerText = Math.round(eidTime / 1000 / 60 / 60 / 24 / 30 / 12);