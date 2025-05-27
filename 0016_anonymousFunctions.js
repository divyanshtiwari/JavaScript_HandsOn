//Anonymous functions : function without a name
// Function expression.

// fucntion is assigned to a variable.
// by assigning the fucntion to a variable, we made this a function expression.
const calAge2 = function (birthYear){ // here the funciton doesn't have a name of itself
    return 2024 - birthYear;
}

const age2 = calAge2(2000); // we call it the same way as now that fucntion is assigned to a variable called calAge2.
console.log(age2)


// function expression are different from function definitions as fuction expression can't be called prior to its declaration, where as the same it not true for function definition.
// this happens because of something called as Hoisting.
console.log(isThisTrue()); // this call will work fine, even if its prior to the function difinition.

function isThisTrue() {
    return "yes";
}

console.log(isThisFalse()); // this won't work, and raise an error saying ReferenceError : Cannot access 'isThisFalse' this is because function expression can't be used prior to there initialization.

const isThisFalse = function (){
    return "no";
}

// console.log(isThisFalse()); // this will work fine. as this is after the initialization.
