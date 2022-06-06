const form = document.getElementById("form");
const username = document.getElementById("name");
const lname = document.getElementById('lname')
const email = document.getElementById("email");
const mobNumber = document.getElementById('mobNumber')
const dob = document.getElementById('dob');
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
let user_records = new Array();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});
var regexp = /\s/g;
// for Name validation
username.addEventListener("keyup", (e) => {
  let data = /^[a-zA-Z0-9 .]*$/;

  if (e.target.value === "") {
    setError(username, "Username is Required");
    cnt++;
  } else if (!e.target.value.match(data)) {
    setError(username, "Please Enter Valid Name");
    cnt++;
  } else if (e.target.value.match(regexp)) {
    setError(username, "Dont allow space between the name");
  } else if (e.target.value.length <= 3) {
    setError(username, "Name must be above 3 characters");
  } else {
    setSuccess(username);
  }
});

lname.addEventListener("keyup", (e) => {
  let data = /^[a-zA-Z .]*$/;

  if (e.target.value === "") {
    setError(lname, "Username is Required");
    cnt++;
  } else if (!e.target.value.match(data)) {
    setError(lname, "Please Enter Valid Name");
    cnt++;
  } else if (e.target.value.match(regexp)) {
    setError(lname, "Dont allow space between the name");
  } else if (e.target.value.length <= 3) {
    setError(lname, "Name must be above 3 characters");
  } else {
    setSuccess(lname);
  }
});

// Validation for email
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
email.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    setError(email, "Email Id is Required");
    cnt++;
  } else if (e.target.value.match(regexp)) {
    setError(email, "Dont allow any space");
  } else if (!isValidEmail(e.target.value)) {
    setError(email, "Inavlid Email Id");
    cnt++;
  } else {
    setSuccess(email);
  }
});
// Validation for Mobile No.
// mobNumber.addEventListener('keypress', (e) => {
//   let reg = /^\d{10}$/;
//   if(e.target.value === ''){
//     setError(mobNumber, "Mobile No. is Required")
//   }else if(!e.target.value.match(regexp)){
//     setError(mobNumber, "Spaces Not Allow")
//   }else if(e.target.value.length < 10){
//     setError(mobNumber, "Mobile No.not valid")
//   }else if(!reg.test(e.target.value)){
//     setError(mobNumber, "Characters or Special characters not allow")
//   }else {
//     setSuccess(mobNumber)
//   }
  
// })

// Validation for DOB
const dobValue = dob.value;
var currentDate = new Date();
var inputYear = dobValue.slice(0,4);
var inputMonth = dobValue.slice(5,7)
var inputDate = dobValue.slice(9, 11);

var currentYear =currentDate.getFullYear();
var minYear = (currentYear - 100);
dob.addEventListener('mouseleave', function(e){
 
})
dob.addEventListener('change', function(e){
  var input_Year = e.target.value.slice(0,4)
  let curren_Year = currentDate.getFullYear()
let min_Year = curren_Year -100;

  if(e.target.value === ''){
    setError(dob, "DOB must be Required");
  }else if(input_Year < min_Year){
    setError(dob, "DOB Must be greater than 1922 years");
  }else if(input_Year > curren_Year){
    setError(dob, "DOB must be less than current Year");
  }else{
    setSuccess(dob);
  }
})

// Validation for Password
password.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    setError(password, "Password is Required");
    cnt++;
  } else if (e.target.value.match(regexp)) {
    setError(password, "Dont allow any space");
  } else if (e.target.value.length < 8) {
    setError(password, "Password must be any 10 character");
    cnt++;
  } else {
    setSuccess(password);
  }
});
password2.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    setError(password2, "Please Re enter Password");
    cnt++;
  } else if (e.target.value !== passwordValue) {
    setError(password2, "Password Didn't Match Please Enter same Password");
    cnt++;
  } else {
    setSuccess(password2);
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInput = () => {
  const nameValue = username.value.trim();
  const lnameValue = lname.value.trim()
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let cnt = 0;

  let data = /^[a-zA-Z .]|^[a-zA-Z]d*$/g;
  if (nameValue === ''){
    setError(username, "Username is Required");
    cnt++;
  } else if (!nameValue.match(data)) {
    setError(username, "Please Enter Valid Name");
    cnt++;
  } else if (nameValue.length <= 3) {
    setError(username, "Name must be above 3 characters");
  } else {
    setSuccess(username);
  }
  if (lnameValue === "") {
    setError(lname, "Username is Required");
    cnt++;
  } else if (!lnameValue.match(data)) {
    setError(lname, "Please Enter Valid Name");
    cnt++;
  } else if (lnameValue.length <= 3) {
    setError(lname, "Name must be above 3 characters");
  } else {
    setSuccess(lname);
  }

  //Email Validation
  if (emailValue === "") {
    setError(email, "Email Id is Required");
    cnt++;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Inavlid Email Id");
    cnt++;
  } else {
    setSuccess(email);
  }
  // DOB Validation
  if(dobValue===''){
    setError(dob,"DOB must be required")
  }else if(inputYear <minYear){
    setError(dob, "DOB Must be greater than 1922 years");
  }else if(inputYear < currentYear){
    setError(dob, "DOB must be less than current Year");
  }else{
    setSuccess(dob)
  }
  //Password validation
  if (passwordValue === "") {
    setError(password, "Password is Required");
    cnt++;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be any 10 character");
    cnt++;
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please Re enter Password");
    cnt++;
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password Didn't Match Please Enter same Password");
    cnt++;
  } else {
    setSuccess(password2);
  }
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (
    user_records.some((duplicate) => {
      return duplicate.email === emailValue;
    })
  ) {
    setError(email, "Email Id is already Exist");
    cnt++;
  }

  if (cnt === 0) {
    user_records.push({
      firstname: nameValue,
      lastName : lnameValue,
      email: emailValue,
      password: passwordValue,
    });

    localStorage.setItem("users", JSON.stringify(user_records));

    location.href = "login.html";
    return true;
  } else {
    return false;
  }
};
