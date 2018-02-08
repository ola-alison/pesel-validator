// 'use strict';
// import './style.scss';

document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("button").onclick = function checkPesel() {

    let pesel = document.getElementById("pesel").value.split("").map(Number);
    let control = ((pesel[0] + pesel[1]*3 + pesel[2]*7 + pesel[3]*9 + pesel[4] + pesel[5] * 3 + pesel[6] * 7 + pesel[7] * 9 + pesel[8] + pesel[9] * 3 + pesel[10]) % 10);
    let day = pesel[4]*10 + pesel[5];
    let month = (pesel[2]%2)*10 + pesel[3];
    let year;
    let sex;


    if (pesel[2] > 1) {
      year = pesel[0]*10 + pesel[1] + 2000;
    }
    else {
      year = pesel[0]*10 + pesel[1] + 1900;
    }


    if (pesel[9] % 2 === 0) {
      sex = "female";
    }
    else {
      sex = "male";
    }


    if (control != 0 || pesel.length != 11) {
      alert('incorrect number');
      console.log("incorrect", pesel, control);
    }
    else {
      alert('correct number');
      console.log("correct", pesel, "day:", day, "month:", month, "year:", year, "sex:", sex);
      document.getElementById("year").innerHTML = year;
      document.getElementById("month").innerHTML = month;
      document.getElementById("day").innerHTML = day;
      document.getElementById("sex").innerHTML = sex;
    }
  }

}, false);
