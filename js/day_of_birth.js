var birthdayInput = prompt("ENTER YOUR BIRTHDAY(YYYY-MM-DD): ");
var genderInput = prompt("ENTER YOUR GENDER (M/F): ").toUpperCase();
var birthDate = new Date(birthdayInput);
var birthDay = birthDate.getDay(); //GETS THE BIRTHDAY FROM THE birthDate

var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// to access day use daysOfWeek[birthDay])
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
console.log(femaleNames[birthDay]);
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
console.log(maleNames[birthDay]);

//if (genderInput === "M" || genderInput=== "F") {}
