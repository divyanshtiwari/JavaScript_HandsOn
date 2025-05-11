// DataTypes
// a data in js is either a object or a primitive value

//-------------------------
// Primitive Data Types
//-------------------------
// 1.Number
// 2.String
// 3.Boolean
// 4.undefined
// 5.null
// 6.symbol
// 7.BigInt
//-------------------------

// Numbes  // ------------------------------
// In Js numbers are actully floating point numbers always, either its with or without a decimal point, its a floating point number.
// Js doesn't have a type int as in other languageus
// for example : 
let age = 23; // number data type
let score = 23.0; // number data type
// both age and score as same data type

// Strings // ------------------------------
// A sequence of characters and they should be present in either " or '
let fname = "divyansh";

// Boolean // ------------------------------
// This is a logical data type, can either be true or false
// This data type is used for decision taking purpose
let passInExam = true;
let goodMatch = false;

// Undefined // ------------------------------
// This is a value taken by variables that are not yet defined. (empty value)
// eg : 
let tree; // undefined
console.log(tree);

// Null // ------------------------------
// an empty
// In JavaScript, null is considered an object type due to a historical bug in the language's design. Here's a detailed explanation
// Historical Bug: When JavaScript was first created, values were stored in a way that included type information in the lower bits of the value. For objects, the type tag was 0. However, null was represented as a special case where all bits were zero, which made it appear as if it had the same type tag as an object.
let temp = null;

// Symbol (ES2015)// ------------------------------
// A value that is unique and can't be changed

// BigInt (ES2020)// ------------------------------
// Large integers than the Number type can hold

// +++++++++++++++++++++++++++++++++++++++++++++++
// Note : 
// JavaScript is a dynamically typed launge, that is we do not have to manually define the data type of the value stored in a variable. instead, data types are determined automatically on initialization or assignment.
// Becasue of this, here in js, its the value that has a type not a variable.
// +++++++++++++++++++++++++++++++++++++++++++++++

// note : as javaScript is a dynamicly typed language, that is variable that was associated with a number value can alwasy be reassociated with any of the other types, let say string. This can result in issue.
// We can check the data type of a variable by the typeof operator
console.log(typeof fname)
console.log(typeof true)
console.log(typeof null) // this will be an object type not a null type. why ??
// When you run console.log(typeof null), JavaScript returns 'object' because of a long-standing issue in how the typeof operator works. Despite null representing an absence of value and being its own primitive type, it was incorrectly implemented as an object. This behavior persists to avoid breaking old scripts.


// Changing the type of a variable :
let passedInExam = true;
console.log(typeof passedInExam);
passedInExam = 'yes';
console.log(typeof passedInExam);


//////////////////////////////////////////////
//////////////////////////////////////////////
