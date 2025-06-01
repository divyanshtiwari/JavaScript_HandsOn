// While Loop

// For loop is used when number of itrations are certain, and while loop is used when number of itration are not certain or finite.

// Run something while something else is true.
// lets say you are playing the retro snake game, where you have to make the snake eat all the food that apears inside the play area, without getting the snake smashed in the wall, if the snake hits the wall, gave over.
// now its not certain after how many moves the snake might hit the wall, it can be 4 it can be 100.



// introducing while loop.

// let dice = Math.random() * 6
// console.log(dice);

let dice = Math.trunc(Math.random() * 6 ) +1;
// console.log(dice);
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 ) +1;
}
console.log('=============dice end============');


// INTVQ  -- different ways for fact_string.
// lets illustrate this with a Prime factorization program.
// Prime factorization of any number means to represent that number as a product of prime numbers.
let num = 200;
let n = num;
let fact = 2;
let fact_string = '';
let factorArray = [];
// let first = true;

while(num !=1){
    if(num%fact === 0){
        console.log(`${fact} is a factor 
        of ${n}`);
        num /= fact;
        fact_string += `${fact} X `;
        factorArray.push(fact);
        // fact_string += first ? `${fact}` : ` X ${fact}`;
        // first = false;
    } else{
        fact++;
    }
    
}

console.log(`=========Factor string=========`);
console.log(`${fact_string} = ${n}`);
console.log(`=======Factor string with the hlep of slice string method =========`);
console.log(`${fact_string.slice(0,-3)} = ${n}`); // right version
console.log(`=======Factor string with the hlep of arrays =========`);
fact_string = factorArray.join(' X ');
console.log(`${fact_string} = ${n}`); // right version
console.log(`==================`);


// please note all for loops can be converted to while loops, but not all while loops can be converted to for loops.

// for loop 
console.log('==== For loop =====');
for(let rep = 1 ; rep <= 10 ; rep++){
    console.log(`Listing weight repetition ${rep}`);
}
console.log('==== For loop Ends =====');

console.log('===== While loop =====');
let repi = 1;
while(repi <=10){
    console.log(`Listing weight repetition ${repi}`);
    repi++;
}
console.log('===== While loop Ends =====');

