// Looping IN javaScript
// The for loop.

// for loop will keep running while the condition is true.

for(let i = 1; i <= 10; i++){
    console.log(`Lifting weights repetition ${i}`); // print 10 lines.
}

// when the loop if first incountered the first part of it get executed, let i = 1; marking the initialization of the variable i, this variable can be used in the for body.
// then condition would be checked to enter the loop body. if its true the control would enter in the loop body else, it would skip it.
// one it enters the loop body and finishes all the statements inside the for body. it comes to the mutation statement i++, that mutates i's value from 1 to 2. then the condition would again be checked and the process repeats itself, until the condition become false.



// looping Array
let jonasArray = [
    'jonas',
    'schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true,
    {name: "divaynsh",age:26}
]

const types = [];
const typesJonasArray = [];
// lets loop through this array and log each element.
for(let i = 0; i<jonasArray.length; i++){
    console.log(jonasArray[i],typeof jonasArray[i]);
    
    // Filling types array
    types[i] = typeof jonasArray[i];

    // Filling another array with push method.
    typesJonasArray.push(typeof jonasArray[i]);
}

console.log(types);
console.log(typesJonasArray);

const years = [1991,2007,1969,2020];
const ages = [];

for(let i = 0; i < years.length ; i++){
    ages.push(2037- years[i]);
}

console.log(ages);



// continue and break

// lets say we only want to print string from jonasArray to the console.
console.log("=========Continue===========");

for(let i = 0; i<jonasArray.length; i++){
    if(typeof jonasArray[i] != 'string')
        continue; // when continue statement is encountered it forces the control flow back to continue with the loop itration without finishing the remaning body.
        // The continue redirects the flow to the modifier statement in the for definition. that is : i++
        
    // this statement would be skipped if continue was encountered. before this.
    console.log(jonasArray[i]);
    // continues are always used with conditions.
}

// continue statemetn is very helpful in certain scenarios but in coding one can slove the same problems in multiple ways.
// one can say the above for loop can be doen without continue statement, and I agree with that, this example is just to illustrate the use of continue and how it works.



// break 

// break, doesn't just terminate the current itration from executing, it terminates the entire for loop and brings the control flow out of the for loop, no matter the state of the for loop.

// lets print eveything untill we found a number.
console.log("=========Break============");
for(let i = 0; i<jonasArray.length; i++){
    if(typeof jonasArray[i] == 'number')
        break; // this statement when encountered will force the contorl flow, out of for loop no matter the state of the for loop, meaning the loop can be on its first intration of many but if break statement is encountered then that's it. the execution of for stops then and there, bringing the contorl flow out of for.
    console.log(jonasArray[i]);
}

console.log("===you are not out of the for loop===");



console.log("=======Lopping backwrads=====");
// Looping backwards
jonasArray = [
    'jonas',
    'schmedtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true,
    {name: "divaynsh",age:26}
]

for(let i = jonasArray.length-1;i>=0;i--){
    console.log(i,jonasArray[i]);
}

// loops inside loops 
// nested loops

for(let exercise = 1;exercise < 4;exercise++){
    console.log(`--------- Start Exercise ${exercise}`);
    for(let rep = 1; rep<6;rep++){
        console.log(`Exercise ${exercise}: Lifting weight Repetition ${rep}`);
    }
}


