

function random() {
    var randomNumber = Math.ceil(Math.random() * 6);
    var heading = document.getElementById("heading").innerHTML = (randomNumber);
    var input = document.getElementById("input");
    if (input.value.trim()) {
        if (input.value <= 6 && randomNumber <= 6 && input.value != 0) {


            if (input.value == randomNumber) {

                var heading = document.getElementById("heading").innerHTML = ("Congratulations You Win!");
                var heading = document.getElementById("heading").style.color = "green";

            } else {
                var heading = document.getElementById("heading").innerHTML = ("You loss Try Again");
                var heading = document.getElementById("heading").style.color = "red";
            }
        } else {
            var heading = document.getElementById("heading").innerHTML = ("Number Sahi Daalo");
            var heading = document.getElementById("heading").style.color = "orange";
        }

    } else {
        var heading = document.getElementById("heading").innerHTML = ("Enter any value Check Your Luck");
        var heading = document.getElementById("heading").style.color = "purple";
    }
}





