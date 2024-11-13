// Turn on the strict mode
// strict mode make it easy for us to write secure code in javascript.
'use strict';  // For activating strict mode this like here has to be the first line of code, this will activate strict mode of the entire file, comment are allowed above this line but no code.

// note you can also only enable strict mode for a block of code or a function we look into that later.

// what does strict mode acutally do, what I have understood rn is, that it will forbid us to do certain things and it will show visible errors on developer console where js woudl have faild silently.

//example : 
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('I can drive :D');
// lets now try to run this code once by disableing strict mode and then by enabling it again.

// you would notice that even when we have a wrong name set to true ,the js didn't gave any issue in the console when the strict mode was not active.
// and when it was active it highlighted that the variable hasDriverlicense (wrong name variable) is not yet defined.

/* Another thing that stcit mode does is to introduce a short list of reserved words that the language has reserved for future use */
//eample 

const interface = 'Audio';
const private = 342;

