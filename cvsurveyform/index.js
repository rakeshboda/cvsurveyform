let gender = "";

let firstnameEl = document.getElementById("first_name");
let firstnameErrMsg = document.getElementById("firstname_err-msg");

let lastnameEl = document.getElementById("last_name");
let lastnameErrMsg = document.getElementById("lastname_err_msg");

let dobEl = document.getElementById("dob");
let dobErrMsg = document.getElementById("dob_err_msg");

let countryEl = document.getElementById("country");
let countryErrMsg = document.getElementById("countryErrMsg");

firstnameEl.onblur = function(event) {
    if (event.target.value === "") {
        firstnameErrMsg.textContent = "Required*"
    } else {
        firstnameErrMsg.textContent = "";
    }
}

lastnameEl.onblur = function(event) {
    if (event.target.value === "") {
        lastnameErrMsg.textContent = "Required*"
    } else {
        lastnameErrMsg.textContent = "";
    }

}

dobEl.onblur = function(event) {
    if (event.target.value === "") {
        dobErrMsg.textContent = "Required*";
    } else {
        dobErrMsg.textContent = ""
    }
}

countryEl.onblur = function(event) {
    //console.log(event.target.value);
    if (event.target.value === "") {
        countryErrMsg.textContent = "Required*";
    } else {
        countryErrMsg.textContent = ""
    }
}


let genderMaleEl = document.getElementById("gender_male");

genderMaleEl.onchange = function(event) {
    gender = event.target.value;
    console.log(gender);
}

let genderFemaleEl = document.getElementById("gender_female");
genderFemaleEl.onchange = function(event) {
    gender = event.target.value;
    console.log(gender);
}

let genderotherEl = document.getElementById("gender_other");
genderMaleEl.onchange = function(event) {
    gender = event.target.value;
    console.log(gender);
}

let professionEl = document.getElementById("profession");
let professionErrMsg = document.getElementById("professionErrMsg");

professionEl.onblur = function(event) {
    if (event.target.value === "") {
        professionErrMsg.textContent = "Required*"
    } else {
        professionErrMsg.textContent = "";
    }
}

let mobileEl = document.getElementById("mobile_number");
let mobileMsg = document.getElementById("mobileErrMsg");

mobileEl.onblur = function(event) {
    if (event.target.value === "") {
        mobileMsg.textContent = "Required*"
    } else {
        mobileMsg.textContent = "";
    }
}

let emailEl = document.getElementById("email");
let emailErrMsg = document.getElementById("emailErrMsg");

emailEl.onblur = function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Requires*"
    } else {
        emailErrMsg.textContent = "";
    }
}

//submitting data 
let formEl = document.getElementById("surveyForm");
formEl.onsubmit = function() {
    event.preventDefault();
    if (firstnameEl.value !== "" && lastnameEl.value !== "" && dobEl.value !== "" && countryEl.value !== "" && gender !== "" && professionEl.value !== "" && emailEl.value !== "" && mobileEl.value !== "") {
        let confirmationMsg = "First Name : " + firstnameEl.value + "\n" +
            "Last Name :" + lastnameEl.value + "\n" +
            "Country : " + countryEl.value + "\n" +
            "Date of birth : " + dobEl.value + "\n" +
            "Gender : " + gender + "\n" +
            "Profession : " + professionEl.value + "\n" +
            "Email : " + emailEl.value + "\n" +
            "Mobile No : " + mobileEl.value;
        alert(confirmationMsg)
        document.getElementById("surveyForm").reset();



    } else {
        alert("Fill all the fields")
    }



}




//Reset values
let resetBtn = document.getElementById("resetbtn");
resetBtn.onclick = function() {
    document.getElementById("surveyForm").reset();
}