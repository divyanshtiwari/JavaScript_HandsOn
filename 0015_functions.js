// functions
// function are blocks of code under an identifier so that its easier to read, write and maintain and also able to reuse.

// this is know as function definition
function logger() { // function header
    // function body
    console.log("My name is divyansh");

}

// invoking / running / calling a function
logger();
logger();
logger();

//function can also accept data and return data.
//function are like machines, you give some input you get some output.

// function definition with arguments (input data)
function fruitProcessor(apples, oranges) { // these argument are know as formal parameter
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // return statement // output data
}

//passing values for the formal parameters
// these value are know as actual parameters
resultJuice = fruitProcessor(5,0);
console.log(resultJuice);

resultSecondJuice = fruitProcessor(2,4);
console.log(resultSecondJuice);

// for the above discussion we have concluded that not all funciton will accept data and not all function will return something.
// but in general functions are used for reducing redundancy and enabling re-useablity.

// dry - don't repeat yourself.

// please note that these function that we have wrote here are user defined function, we will also see that there are alot of built-in function like console.log();

//

function calAge1(birthYear){
    return 2024 - birthYear;
}

const age1 = calAge1(1998);
console.log(age1);

