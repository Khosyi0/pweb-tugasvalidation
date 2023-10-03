function validate() {
    if (document.forms["form"]["Name"].value == "") {
        alert("Insert your name!");
        document.forms["form"]["Name"].focus();
        return false;
    }
    var stdNum = document.forms["form"]["Std_Num"].value;
    if (stdNum == "") {
        alert("Insert your student number!");
        document.forms["form"]["Std_Num"].focus();
        return false;
    } 
    if (!/^\d+$/.test(stdNum)) {
        alert("Student number must contain only numbers!");
        document.forms["form"]["Std_Num"].focus();
        return false;
    }
    if (document.forms["form"]["Email"].value == "") {
        alert("Insert your email!");
        document.forms["form"]["Email"].focus();
        return false;
    }
    if (document.forms["form"]["faculty"].selectedIndex < 1) {
        alert("Choose Your Faculty!");
        document.forms["form"]["faculty"].focus();
        return false;
    }
    if (document.forms["form"]["department"].selectedIndex < 1) {
        alert("Choose Your Department!");
        document.forms["form"]["department"].focus();
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const facultySelect = document.querySelector('select[name="faculty"]');
    const departmentSelect = document.querySelector('#departmentSelect');

    const defaultDepartmentOption = departmentSelect.querySelector('option[value="0"]');

    facultySelect.addEventListener("change", function () {
        const selectedFaculty = facultySelect.value;
        const departmentOptions = departmentSelect.querySelectorAll('option');

        departmentOptions.forEach(function (option) {
            option.style.display = "none";
        });

        const departmentOptionsForFaculty = departmentSelect.querySelectorAll('.faculty-' + selectedFaculty);
        departmentOptionsForFaculty.forEach(function (option) {
            option.style.display = "";
        });

        departmentSelect.value = "0";
    });
});