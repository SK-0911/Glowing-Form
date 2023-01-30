function display(){
    DispWin = window.open();
    msg = "<b>First Name:</b> " + document.form1.firstname.value + "<br><br>";
    msg += "<b>Middle Name:</b> " + document.form1.middlename.value + "<br><br>";
    msg += "<b>Last Name:</b> " + document.form1.lastname.value + "<br><br>";
    // Gender
    msg += "<b>Gender:</b> " + document.form1.gender.value + "<br><br>";
    msg += "<b>Email:</b> " + document.form1.email.value + "<br><br>";
    msg += "<b>Courses:</b> " + document.form1.course.value + "<br><br>";
    // Lang
    var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var checkedValues = "";
    for (var i = 0; i < checkedBoxes.length; i++) {
        i===checkedBoxes.length-1 ? checkedValues += checkedBoxes[i].value : checkedValues += checkedBoxes[i].value + ", ";
        //checkedValues += checkedBoxes[i].value + ", ";
    }
    msg += "<b>Language(s):</b> " + checkedValues + "<br><br>";
    msg += "<b>Phone:</b> " + document.form1.phone.value + "<br><br>";
    msg += "<b>Address:</b> " + document.form1.address.value + "<br><br>";
    // if(document.getElementById('male').value === 'Male'){
    //     msg += "<b>Gender:<b>" + document.getElementById('male') + "<br><br>";
    // }
    // else{
    //     msg += "<b>Gender:<b>" + document.getElementById('female') + "<br><br>";
    // }
    DispWin.document.write(msg);
}
// Form Animation
setTimeout(function(){
    document.querySelector('form').classList.add('show');
}, 1000);

const form = document.querySelector("form");
const progressBar = document.getElementById("progress-bar");

form.addEventListener("input", updateProgress);

function updateProgress() {
    const progress = (form.querySelectorAll("input, select, textarea").length / form.elements.length) * 100;
    progressBar.style.width = `${progress}%`;
}
updateProgress();