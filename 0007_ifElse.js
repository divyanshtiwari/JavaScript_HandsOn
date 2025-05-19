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
// Please note, this is very basic century calculation and doesn't work of all birthYears.

const birthYear = 1998;
let century; // We'll have to define century outside of the if or else block as let is block scoped, that mean the variable defined with it, will get destroyed as soon as you are out of that block, and defining century in if or else block would destroy it by the time you try to print it out, so better to define outside of either of them so its available in the outer block.
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)

// Here you can understand the difference between var and let as well, var is functional scope and let is block scope, try defining century with let inside if and else block and see whats the result and do the same wiht var and see whats the result.
// var would work as it make the variable live within the functional scope, not block scope.
// But let is recommended to use as it forces you to provide better code.
// And no worries we'll visit this again.