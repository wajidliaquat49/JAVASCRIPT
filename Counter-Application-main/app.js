var num_jv = document.getElementById("num");
var cir_jv1 = document.getElementById("cir1");
var cir_jv2 = document.getElementById("cir2");
var re_jv = document.getElementById("re-h1");

var counter_jv = 0;
function increment() {
    num_jv.innerText = ++counter_jv;
    if (counter_jv <= 9) {
        num_jv.innerText = "0" + counter_jv;
    }

    if (counter_jv % 2 === 0) {
        // var cir_jv1 = document.getElementById("cir1").style.background = "green";
        var re_jv = document.getElementById("re-h1").innerText = "Number is Even";
        var re_jv = document.getElementById("re-h1").style.color = "black";
    } else {
        // var cir_jv2 = document.getElementById("cir2").style.background = "red";
        var re_jv = document.getElementById("re-h1").innerText = "Number is Odd"
        var re_jv = document.getElementById("re-h1").style.color = "red";
    }
}

function decrement() {
    // num_jv.innerText = --counter_jv;
    // if (counter_jv % 2 === 0) {
    //     // var cir_jv1 = document.getElementById("cir1").style.background = "green";
    //     var re_jv = document.getElementById("re-h1").innerText = "Number is Even";
    //     var re_jv = document.getElementById("re-h1").style.color = "greenyellow";
    // } else {
    //     // var cir_jv2 = document.getElementById("cir2").style.background = "red";
    //     var re_jv = document.getElementById("re-h1").innerText = "Number is Odd"
    //     var re_jv = document.getElementById("re-h1").style.color = "red";
    // }
    if (counter_jv > 0) {
        num_jv.innerText = --counter_jv;

        if (counter_jv <= 9) {
            num_jv.innerText = "0" + counter_jv;
        }

        if (counter_jv % 2 === 0) {
            // var cir_jv1 = document.getElementById("cir1").style.background = "green";
            var re_jv = document.getElementById("re-h1").innerText = "Number is Even";
            var re_jv = document.getElementById("re-h1").style.color = "black";
        } else {
            // var cir_jv2 = document.getElementById("cir2").style.background = "red";
            var re_jv = document.getElementById("re-h1").innerText = "Number is Odd"
            var re_jv = document.getElementById("re-h1").style.color = "red";
        }
    }
}
function reset() {
    clearInterval(counter_jv);
    counter_jv = 0;
    counter_jv.innerText = 0;
    num_jv.innerText = "0" + 0;
    var re_jv = document.getElementById("re-h1").innerText = "Refresh";
    var re_jv = document.getElementById("re-h1").style.color = "black";
};