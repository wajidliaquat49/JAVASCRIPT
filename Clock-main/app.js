var hoursid = document.getElementById("hoursid");
var minutesid = document.getElementById("minutesid");
var secondsid = document.getElementById("secondsid");
var dateid = document.getElementById("dateid")
setInterval(
    function () {
        var currentDate = new Date();

        var currentHour = currentDate.getHours();

        hoursid.innerText = currentDate.getHours();
        minutesid.innerText = currentDate.getMinutes();
        secondsid.innerText = currentDate.getSeconds();
        dateid.innerText = currentDate.tolocalDateString();
        // dateid.innerText = currentDate.tolocalDateString()
    }, 1000)





