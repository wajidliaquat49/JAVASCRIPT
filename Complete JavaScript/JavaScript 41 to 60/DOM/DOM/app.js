
// var parent = document.getElementById("parent");
// var child2 = document.getElementById("child2");

// console.log("parent==>", parent);
// console.log("parent's children==>", parent.children);
// console.log("parent's children with junk artifects==>", parent.childNodes)


// console.log("child2==>", child2);
// console.log("child2 parent==>", child2.parentElement);
// console.log("child2 parent==>", child2.parentNode);

// console.log("child2 parent==>", child2.parentElement.parentElement.parentElement);

// console.log("child2 previousSibling==>", child2.previousElementSibling);
// console.log("child2 nextSibling==>", child2.nextElementSibling);


var todo_input = document.getElementById("todo_input");
var add_todo_btn = document.getElementById("add_todo_btn");
var delete_all_todo_btn = document.getElementById("delete_all_todo_btn");
var todo_list = document.getElementById("todo_list");

add_todo_btn.addEventListener("click", function () {
    if (!todo_input.value) return alert("Enter any Value");

    var list_item = `<ol class="java_list"><span> ${todo_input.value}</span><button onclick="edit(this)" class = "editbtn">edit</button> <button onclick="deleteFun(this)" class = "deletebtn">delete</button></ol>`
    todo_list.innerHTML += list_item;

    todo_input.value = "";

})

function edit(element) {
    console.log("edit==>", element.previousElementSibling.innerText);

    var previousValue = element.previousElementSibling.innerText;
    var updated = prompt("Edit Value", previousValue);
    element.previousElementSibling.innerText = updated;
}

function deleteFun(element) {
    //  console.log("delete==>", element.parentElement);
    element.parentElement.remove();
}