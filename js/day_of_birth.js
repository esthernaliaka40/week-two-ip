var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
   // shows days of the week
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var century, yearDigit, monthDigit, monthDay, dayOfWeek, dayValue;
//var dateInput = prompt("Enter date of birth: YY-MM-DD:"); // requests user to put date of birth in indicated format.
function validate() {

  var genders = document.getElementsByName("gender");

  if (

    document.myForm.year.value == "" ||

    document.myForm.year.value.length != 4 ||

    document.myForm.year.value > 2022 ||

    document.myForm.year.value <= 1900

  ) {

    alert("Please provide a valid year of birth! eg 2022");

    document.myForm.year.focus();

    return false;

  } else if (

    document.myForm.month.value == "" ||

    isNaN(document.myForm.month.value) ||

    document.myForm.month.value.length != 2 ||

    document.myForm.month.value > 12 ||

    document.myForm.month.value <= 0

  ) {

    alert("Please provide your month of birth! between 1 and 12");

    document.myForm.month.focus();

    return false;

  } else if (

    document.myForm.date.value == "" ||

    isNaN(document.myForm.month.value) ||

    document.myForm.month.value.length != 2 ||

    document.myForm.date.value > 31 ||

    document.myForm.date.value <= 0

  ) {

    alert("Please provide a valid date that you were born in!");

    document.myForm.day.focus();

    return false;

  } else if (genders[0].checked == false && genders[1].checked == false) {

    alert("You must select male or female");

    return false;

  } else {

    return true;

  }

}

 

function calculateDayValue() {

  year = document.getElementById("year").value;

  century = parseInt(year.substring(0, 2));

  yearDigit = parseInt(year.substring(2, 4));

  monthDigit = parseInt(document.getElementById("month").value);

  dayOfWeek = parseInt(document.getElementById("date").value);

  dayValue =

    (century / 4 -

      2 * century -

      1 +

      (5 * yearDigit) / 4 +

      (26 * (monthDigit + 1)) / 10 +

      dayOfWeek) %

    7;

  console.log(dayValue);

  return Math.floor(dayValue);

}

 

function getGender() {

  var genders = document.getElementsByName("gender");

  if (genders[0].checked == true) {

    var gender = "male";

  } else if (genders[1].checked == true) {

    var gender = "female";

  } else {

    return false;

  }

  switch (gender) {

    case "male":

      if (dayValue == 1) {

        alert(

          "You were born on " +

            dayWeekNames[0] +

            " and Your akan name is  " +

            maleAkanNames[0] +

            "!"

        );

      } else if (dayValue == 2) {

        alert(

          "You were born on " +

            dayWeekNames[1] +

            " and Your akan name is " +

            maleAkanNames[1] +

            "!"

        );

      } else if (dayValue == 3) {

        alert(

          "You were born on " +

            dayWeekNames[2] +

            " and Your akan name is " +

            maleAkanNames[2] +

            "!"

        );

      } else if (dayValue == 4) {

        alert(

          "You were born on " +

            dayWeekNames[3] +

            " and Your akan name is " +

            maleAkanNames[3] +

            "!"

        );

      } else if (dayValue == 5) {

        alert(

          "You were born on " +

            dayWeekNames[4] +

            " and Your akan name is " +

            maleAkanNames[4] +

            "!"

        );

      } else if (dayValue == 6) {

        alert(

          "You were born on " +

            dayWeekNames[5] +

            " and Your akan name is " +

            maleAkanNames[5] +

            "!"

        );

      } else if (dayValue == -0) {

        alert(

          "You were born on " +

            dayWeekNames[6] +

            " and Your akan name is " +

            maleAkanNames[6] +

            "!"

        );

      }

      break;

    case "female":

      if (dayValue == 1) {

        alert(

          "You were born on " +

            dayWeekNames[0] +

            " and Your akan name is  " +

            femaleAkanNames[0] +

            "!"

        );

      } else if (dayValue == 2) {

        alert(

          "You were born on " +

            dayWeekNames[1] +

            " and Your akan name is " +

            femaleAkanNames[1] +

            "!"

        );

      } else if (dayValue == 3) {

        alert(

          "You were born on " +

            dayWeekNames[2] +

            " and Your akan name is " +

            femaleAkanNames[2] +

            "!"

        );

      } else if (dayValue == 4) {

        alert(

          "You were born on " +

            dayWeekNames[3] +

            " and Your akan name is " +

            femaleAkanNames[3] +

            "!"

        );

      } else if (dayValue == 5) {

        alert(

          "You were born on " +

            dayWeekNames[4] +

            " and Your akan name is " +

            femaleAkanNames[4] +

            "!"

        );

      } else if (dayValue == 6) {

        alert(

          "You were born on " +

            dayWeekNames[5] +

            " and Your akan name is " +

            femaleAkanNames[5] +

            "!"

        );

      } else if (dayValue == -0) {

        alert(

          "You were born on " +

            dayWeekNames[6] +

            " and Your akan name is " +

            femaleAkanNames[6] +

            "!"

        );

      }

      break;

    default:

  }

}

function findName() {

  var dataIsValid = validate();

  if (dataIsValid) {

    dayValue = calculateDayValue();

    getGender();

  } else {

    alert("Wrong Information!, Enter correct Year, Month and Day");

  }

}

