// Strings
// Template Literals

const firstName = 'divaysnh';
const job = 'software Engineer';
const birthyear = 1998;
const currectYear = 2024;

let divyanshIntro = "I'm" + firstName + ', a ' + (currectYear-birthyear) + ' years old ' +job +'!';
console.log(divyanshIntro)
// Creating a line of text in the above code was actually a hustel (keeping track of all the + and spaces was a pain)

// introducing in ES6 we have a better solution for this. called as template litrals

divyanshIntro = `I'm ${firstName}, a ${currectYear-birthyear} years old, working as a ${job}!!`;
console.log(divyanshIntro);
// in the above line of code was have used tick(`) to start and end the new string. this give us the feature of putting variable into this string dirctly without using concatination.
// you can put any expression in ${-----}, and once the new string is getting rendered the values inside will be evaluated and be replaced to produce the requried string.

// template litrals can also be used for creating multi line string like : 
const newString = `this is a 
multi-line string    
     please note taht
this string retains its formate`
console.log(newString)

// another regular was of creating multi-line string was acuatlly only possible because of a bug in the language
const bugMultiString = 'String start \n\
this is a multi lie \n\
   are you checkign this out \n\
I dont think so.'
console.log(bugMultiString)
// this also retains its formate


/* note this bug was corrected in ES6 without removing this functionality but the recommended way of writing multi-line string is template-literals */
