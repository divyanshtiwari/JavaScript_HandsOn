// arrow functions
// arrow funcitons are added to js with the ES6 release.

// arrow functions are simply a special form of function expressions that is shorter and faster to write.

//function expression
const calAge1 = function (birthYear){
    return 2024 - birthYear;
}

console.log(calAge1(1991));

//arrow function
const calAge2 = birthYear => 2037 - birthYear;
// arrow functions with one parameter are not requried to have parentheses.
// And arrow functions with a single statement do not have to explict return statement.
// it returns implicitly the value after arrow.
const age2 = calAge2(2000);
console.log(age2)

// another arrow function
const yearsUntilRetirment = birhtYear => { // curly braces are requried here because the code will have more than one line.
    const age = 2024 - birhtYear;
    const retirment = 60 - age;
    return retirment; // becuase this function contains more than one statement hence explict return is requried.
}

console.log(yearsUntilRetirment(1991));

// another arrow function
const nameYearsUntilRetirment = (birhtYear,firstName) /* here parentheses are requried as we have more than one argument */ => {
    const age = 2024 - birhtYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment}`;
}

console.log(nameYearsUntilRetirment(1991,'jonas'));

// please note : 
// fundamental difference between traditional function (function declarations and function expression) and arrow functions : 

// Arrow functions do not get a "this" keyword, will read about this more moving forward.
