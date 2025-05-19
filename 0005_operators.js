// operator in js
// these are special symbols that preform some operation on operands, ex- + (plus) , - (minus)

// We have many types of operatos


// Arithmetic operator (Operator for Number data type)
// addition
const a = 3;
const b = 4;
console.log('addition',a+b);
console.log('addition',55+6);

//subtraction
const ageJonas = 1991;
const currectYear = 2037;
console.log('subtraction',currectYear-ageJonas,'years');

// multiplication
console.log('multiplication',a*3);

// divide
console.log('divide',b/2);
console.log('divide',a/2);

// exponent
console.log('exponent',a**b) // a to the power of b

// Operator for strings
// Concatination (+)
const fname = 'Divyansh';
const lname = 'Tiwari';
console.log('fullName:',fname+lname)


// typeof operator
console.log(fname);

// assigment operator (short hand assigment)
let x = 10;
console.log(x);
x+=2;
console.log(x);
x-=3;
console.log(x);
x*=2;
console.log(x);
x/=2;
console.log(x);
x**=2;
console.log(x);

// increment and decrement operator
x = 10;
// x++
console.log("x++ =>",x++);  // first print then add
// x--
console.log("x-- =>",x--);  // first print then substract

x = 10
// ++x
console.log("++x =>",++x); // first add then print
// --x
console.log("--x =>",--x); // firt substract then print

// comparison operator
let age = 18;
console.log(age>18)
console.log(age==18)
console.log(age<18)
console.log(age<=18)
console.log(age>=18)

/* Operator Precedence */

// Precedence of operator doesn't dictate its timing of execution but rather its binding to operands.

// Precedence Table on MDN (Mozilla Developer Network).

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

const age_Jonas = currectYear-1991;
const ageSarah = currectYear-2018;
const averageAge = age_Jonas + ageSarah / 2;
console.log("averageAge :",averageAge ,"(Wrong value)");
// According to the precedence of operators, divide would take ageSarah and 2 as its operands first and then the result and age_Jonas would be taken as operands for +
// Please note this defeats the purpose of average, as average is the sum of all entities divided by the count of all entities.
// To overwrite this precedence we will have to use the highest precedence operator "(--)"
// By segrigating through brackets, we will force the interpreter to first resolve what ever is inside brackets and then move to something else.
const average_age = (age_Jonas + ageSarah) / 2;
console.log("average_age :",average_age,"(Correct Value)");
