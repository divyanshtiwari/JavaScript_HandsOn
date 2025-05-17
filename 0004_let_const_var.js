// let, var and const
//let and const were introduced in Es6
// we use let keyword to declare variables that can change values latter. (mutation)
let age = 30;
console.log(age);
age = 31;
console.log(age);

// We use const keyword to declare variable that can not change its value, a immutable variable.
const PI = 3.14;
// PI = 3.145; // NOT ALLOWED (ILLEGAL)
// because variable from const can't change there value, we don't defined a empty value variable with these.
// the below mentioned statement is illegal in js
// const BIRTHYEAR; // NOT ALLOWED (ILLEGAL)
// this will result in error
// missing initializer in const declaration

// the old way of defining variables 
// don't use it, its function scope
var job = 'programmer';
job = 'superProgrammer';

// please note that you might also thinking that by omiting "let" you will be able to define variables like : 
lastName = 'tiwari';
console.log(lastName);
// but this is not creating a variable at all, this is just creating a new property in the global object 
// this will understand latter
// DON'T DO THIS.
// Always declare your variables before use.
