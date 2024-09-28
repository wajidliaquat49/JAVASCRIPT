
var userData = document.getElementById("input");
var userAmount = document.getElementById("amount");
var exp = document.getElementById("expenditure");
var balanceData = document.getElementById("balance");
var savingData = document.getElementById("saving");

function income(userDataValue) {
    var userDataValue = userData.value;
    console.log(userDataValue);
    userAmount.innerText = "$" + userDataValue + ".00";
    balanceData.innerText = "$" + userDataValue + ".00";
    savingData.innerText = "$" + userDataValue + ".00";
    userData.value = "";
}

function expenditure(expUserdata) {
    var expUserdata = userData.value;
    console.log(expUserdata);
    exp.innerText = "$" + expUserdata + ".00";
    userData.value = "";
    balanceData.innerText = "$" + expUserdata + ".00";
    savingData.innerText = "$" + expUserdata + ".00";
};