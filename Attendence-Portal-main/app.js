
var userData = [
    {
        name: 'John Doe',
        fatherName: 'Richard Doe',
        age: 16,
        rollNo: '101',
        userGrade: '10th Grade',
    },
    {
        name: 'Jane Smith',
        fatherName: 'Robert Smith',
        age: 15,
        rollNo: '102',
        userGrade: '9th Grade',
    },
    {
        name: 'Michael Johnson',
        fatherName: 'James Johnson',
        age: 17,
        rollNo: '103',
        userGrade: '11th Grade',
    },
    {
        name: 'Emily Davis',
        fatherName: 'William Davis',
        age: 14,
        rollNo: '104',
        userGrade: '8th Grade',
    },
    {
        name: 'Jessica Brown',
        fatherName: 'Charles Brown',
        age: 16,
        rollNo: '105',
        userGrade: '10th Grade',
    },
    {
        name: 'Daniel Wilson',
        fatherName: 'Thomas Wilson',
        age: 15,
        rollNo: '106',
        userGrade: '9th Grade',
    },
    {
        name: 'Sarah Taylor',
        fatherName: 'Andrew Taylor',
        age: 17,
        rollNo: '107',
        userGrade: '11th Grade',
    },
    {
        name: 'David Lee',
        fatherName: 'George Lee',
        age: 14,
        rollNo: '108',
        userGrade: '8th Grade',
    },
    {
        name: 'Laura Martin',
        fatherName: 'Paul Martin',
        age: 16,
        rollNo: '109',
        userGrade: '10th Grade',
    },
    {
        name: 'Kevin White',
        fatherName: 'Mark White',
        age: 15,
        rollNo: '110',
        userGrade: '9th Grade',
    },
    {
        name: 'Anna Harris',
        fatherName: 'Steven Harris',
        age: 17,
        rollNo: '111',
        userGrade: '11th Grade',
    },
    {
        name: 'Brian Clark',
        fatherName: 'Edward Clark',
        age: 14,
        rollNo: '112',
        userGrade: '8th Grade',
    },
    {
        name: 'Sophia Lewis',
        fatherName: 'Henry Lewis',
        age: 16,
        rollNo: '113',
        userGrade: '10th Grade',
    },
    {
        name: 'Christopher Walker',
        fatherName: 'Frank Walker',
        age: 15,
        rollNo: '114',
        userGrade: '9th Grade',
    },
    {
        name: 'Grace Hall',
        fatherName: 'Peter Hall',
        age: 17,
        rollNo: '115',
        userGrade: '11th Grade',
    },
    {
        name: 'Justin Allen',
        fatherName: 'Patrick Allen',
        age: 14,
        rollNo: '116',
        userGrade: '8th Grade',
    },
    {
        name: 'Olivia Young',
        fatherName: 'Bruce Young',
        age: 16,
        rollNo: '117',
        userGrade: '10th Grade',

    },
    {
        name: 'Nathan Hernandez',
        fatherName: 'Larry Hernandez',
        age: 15,
        rollNo: '118',
        userGrade: '9th Grade',
    },
    {
        name: 'Mia King',
        fatherName: 'Joe King',
        age: 17,
        rollNo: '119',
        userGrade: '11th Grade',
    },
    {
        name: 'Ethan Wright',
        fatherName: 'Stanley Wright',
        age: 14,
        rollNo: '120',
        userGrade: '8th Grade',
    },
    {
        name: 'Ava Lopez',
        fatherName: 'Timothy Lopez',
        age: 16,
        rollNo: '121',
        userGrade: '10th Grade',
    },
    {
        name: 'Jacob Scott',
        fatherName: 'Chris Scott',
        age: 15,
        rollNo: '122',
        userGrade: '9th Grade',
    },
    {
        name: 'Samantha Green',
        fatherName: 'Shawn Green',
        age: 17,
        rollNo: '123',
        userGrade: '11th Grade',
    },
    {
        name: 'Andrew Adams',
        fatherName: 'Jason Adams',
        age: 14,
        rollNo: '124',
        userGrade: '8th Grade',
    },
    {
        name: 'Ella Baker',
        fatherName: 'Ryan Baker',
        age: 16,
        rollNo: '125',
        userGrade: '10th Grade',
    },
];



var name = document.getElementById("name_html");
var fatherName = document.getElementById("fatherName_html");
var rollNo = document.getElementById("Rollno_html");
var age = document.getElementById("Age_html");
// var class_html = document.getElementById("class_html");
var attendence = document.getElementById("Attendence_html");
var tableData = document.getElementById("tableData");
var userGrade = document.getElementById("randomGrades");
var presentRadio = document.getElementById("presentRadio");
var absentRadio = document.getElementById("absentRadio");
var leavetRadio = document.getElementById("leavetRadio");
var counte_present = document.getElementById("counte_present");
var counte_absent = document.getElementById("counte_absent");
var counte_leave = document.getElementById("counte_leave");
var presentType = document.getElementById("presentType");
var absentType = document.getElementById("absentType");
var leaveType = document.getElementById("leaveType");
var div_1 = document.getElementById("div_1");
var div_2 = document.getElementById("div_2");
var div_3 = document.getElementById("div_3");




for (var i = 0; i < userData.length; i++) {
    tableData.innerHTML += `
               <tr>
                <th>${userData[i].name}</th>
                <th>${userData[i].fatherName}</th>
                <th>${userData[i].rollNo}</th>
                <th>${userData[i].age}</th>
                <th>${userData[i].userGrade}</th>
                
              
                <th>  
                
                <div id="typeContainer">
                <input type="radio" name="status" value="Present"><span id="presentType"> Present</span> &nbsp;&nbsp;&nbsp;
                <input type="radio" name="status" value="Absent"> <span id="absentType"> Absent</span> &nbsp;&nbsp;&nbsp;
                <input type="radio" name="status" value="Leave"> <span id="leaveType"> Leave</span> &nbsp;&nbsp;&nbsp;
               </div>
                 
               </th>
               
               </tr>
 `
}

