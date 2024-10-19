// decision making in js (Conditional statements)

const age = 17;
const isOldEnough = age >= 18;


// This if , else arrangement is called as a control structure.
if(isOldEnough){
    console.log("Sarah can apply for a driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young right now, wiat another ${yearsLeft} year :)`)
}

// lets get the century in which a person was born depending on the birth year

const birthYear = 1998;
let century; // This is block scope, so can't define 
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)