// Truthy And Falsy Values

// Falsy value -> values that when converted to boolean results in false.

//Falsy values => // 0,'', undefined, null, NaN

// Truthy values -> all other values apart from Falsy values.

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('This string is not empty'));

//Type coercion
//The conversion of Truthy and Falsy values will happen automatically when being evaluated in a controle structure setting. or when used with logical operatos.

// example : 

let money = 0;
if(money){
    console.log("don't spend it all!!!");
} else {
    console.log("Get a job!!!");
}

