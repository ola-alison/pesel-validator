function checkPesel() {

let pesel = prompt('podaj pesel').split("").map(Number);
let control = ((pesel[0] + pesel[1]*3 + pesel[2]*7 + pesel[3]*9 + pesel[4] + pesel[5] * 3 + pesel[6] * 7 + pesel[7] * 9 + pesel[8] + pesel[9] * 3 + pesel[10]) % 10);

  if (control != 0 || pesel.length != 11) {
    console.log("incorrect", pesel, control);
  }
  else {
    console.log("correct", pesel);
  }
}

checkPesel();
