// Equality operator
// == or ===
// double euqal or triple equal

const age = 18;
if(age === 18){ // strict equality operator
    console.log('You just became an adult');
}
// == is strict equality operator, it checks for the value and the type.
// if the value is matching but the type is not it will result in false.
// ex : 
if(age === '18'){//checking number 18 with string 18
    console.log('You just became an adult | this was a string check');
}
// this code will not get executed as the === is evaluating to a falsy value.


//Where as the == (double equal) is  loose equality operator, this operator preforms a type coercion befor comparing the values.

if(age == 18){ // loose equality operator
    console.log('You just became an adult | loose equality operator');
}

if(age == '18'){//checking number 18 with string 18
    console.log('You just became an adult | this was a string check with ==');
}

const favourite = prompt("what's your favourite number?"); // prompt here will provide a string.

//const favourite = Number(prompt("what's your favourite number?")); // Propmt here will provide a number.

console.log(favourite,typeof(favourite));
// number and string

if(favourite === 23) {
    console.log("Cool! 23 is an amazing number!!");
} else if (favourite === 7){
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

// InEquality operator:

if (favourite !== 23){
    console.log("Why not 23?");
}