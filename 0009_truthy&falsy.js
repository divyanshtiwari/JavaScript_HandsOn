// Truthy And Falsy Values

// Falsy value -> values that when converted to boolean results in false.

// 5 Falsy values.
//Falsy values => // 0,'', undefined, null, NaN

// Truthy values -> all other values apart from Falsy values.

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('This string is not empty'));
console.log(Boolean({})); // empty object is also not a falsy value, please note.

//Type coercion
//The conversion of Truthy and Falsy values will happen automatically when being evaluated in a controle structure setting. or when used with logical operatos.

// example : 

let money = 0;
if(money){
    console.log("don't spend it all!!!");
} else {
    console.log("Get a job!!!");
}

// Another use case
// Check if a variable is defined or not.
let height;
if(height){
    console.log("Yay! Height is defined");
} else {
    console.log("Height is Undefined");
}

// Please note, crate a logical error, when height = 0;
// here height would be defined but because 0 is a falsy value the above code will still say its undefined.
// here then you will have to change your if statement code and add somthing like this if(height || height==0) to work.
// These are logical operatos which will be understand in a bit.