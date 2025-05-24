// Strict mode. // Forces ES6 and above javascript.
// This string is know as directive string.

'use strict'; // strict mode make it easy for us to write secure code in javascript.

// This in js will introduce strict mode, please note this has to be the first statement in the file apart from comments to enable strict mode.
// if any code, statement or expression precedes this then strict mode won't get enabled.

// we can also enable strict mode for only a function on a block of code, will look into it, but its adviceable to alwasy make the entire file use strict mode.

// ============================ //
// What does strict mode do ?
// Strict mode is a way to opt in to a restricted variant of Js, thereby implicitly opting-out of "sloppy mode".
// strict mode isn't just a subset : it intentionally has different semantics from normal code.
// Strict mode makes several changes : 

// ====================================
// 1. Eliminates some js silent errors by changing them to throw erros.
let isBufferReady = true;

if(isBufferReady){
    // the below variable name has an extra "s".

    // isBuffersReady = false; 

    // this variable is supposed to be the same name as the variable defined above and consoling out below.
    // but because of a typo, is not.
    // Js in sloppy mode would ignore this, and not raise an error. as it think that you have created a new property in the global object, where as you were trying to assign the same variable a new value.

    // strict mode, will not let it be ignored and will throw an error here.
    // letting us know that this varible refrence is not defined.

}

console.log(isBufferReady);

// Another example : 
let hasDriversLicense = false;
const passTest = true;

// if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// ====================================
// 2. Fixes mistakes that make it difficult for Js engines to perform optimizations : Strict mode code can sometimes be made to run faster than identical code that's not strict mode.



// ======================================
// 3. Prohibits some syntax liekly to be defined in future version of JavaScript.
// in other words have reservred some syntax that the languague would likely introduce in future.

// private is a reserved word for future usages, that's will throw an error in strict mode.

// const private = 'hello'
// console.log(private);

// const interface = true;
// console.log(interface);


