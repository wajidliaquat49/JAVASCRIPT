
var offbulb = document.getElementById("offbulb");
var on = document.getElementById("on");
var off = document.getElementById("off");

on.addEventListener("click", function () {
    offbulb.src = "images (2).jpg";
});

off.addEventListener("click", function () {
    offbulb.src = "download.jpg";
});