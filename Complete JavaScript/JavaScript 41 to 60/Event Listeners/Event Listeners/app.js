
// function sayHello() {
//     alert("Hello")
// };

var btn = document.getElementById("helloBtn");
var java_div = document.getElementById("html_div");
var image_html = document.getElementById("image_html");




btn.addEventListener("click", function () {
    alert("Hello Class")
});

btn.addEventListener("mouseover", function () {
    alert("Mouse upar agaya")
});




// ====== div =======\\;

java_div.addEventListener("mouseover", function () {
    java_div.style.backgroundColor = "violet";
    java_div.style.borderRadius = "175px"
});

java_div.addEventListener("mouseout", function () {
    java_div.style.backgroundColor = "blue";
    java_div.style.borderRadius = "6px"

});

// btn.addEventListener("click", function () {
//     console.log(btn.id)
// });




image_html.addEventListener("mouseover", function () {
    image_html.src = "download (1).jpg";
    image_html.style.borderRadius = "6px";
});


image_html.addEventListener("mouseout", function () {
    image_html.src = "download.jpg";
    image_html.style.borderRadius = "6px";
});
