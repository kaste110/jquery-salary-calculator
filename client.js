console.log("js is loaded");

$(document).ready(onReady);

let employeeArray = [];

function onReady() {
  console.log("jquery loaded");
  $("#submitBtn").on("click", clickFunction);
}

function clickFunction() {
  console.log("click works"); // works

  let employeeInput = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    iD: $("#iD").val(),
    title: $("#title").val(),
    annualSalary: $("#annualSalary").val(),
  };

  if (
    employeeInput.firstName === "" ||
    employeeInput.lastName === "" ||
    employeeInput.iD === "" ||
    employeeInput.title === "" ||
    employeeInput.annualSalary === ""
  ) {
    alert("Please enter all fields");
  } else {
    employeeArray.push(employeeInput);
    console.log(employeeArray); //works
    appendEmployee();

    $("#firstName").val('');
    $("#lastName").val('');
    $("#iD").val('');
    $("#title").val('');
    $("#annualSalary").val('')
  };
};
function appendEmployee() {
    for (let employee of employeeArray){
      $('.salaryCalcHeader').append(
    '<li>' ${employee.firstName} '</li>');
    };
};
