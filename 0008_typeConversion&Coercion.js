// Type Conversion and Coercion
// Type Conversion is manual conversion of value type and Type Coercion is automatic conversion of value type.

const inputYear = '1991';
console.log(Number(inputYear)+18); // Type conversion
console.log(inputYear + 18); // Type coercion

// Type Conversion
// ===============
console.log(inputYear + 18); // 18 will automatically get converted into a string to make sense of the + operation.

// The above code will result in 199818
// but probably that was not the desired result we wanted the result in mind was : 2009
// To achive this we need to explictly change the type of 1991 so that js can make sense of + as an addition not a concatination.
// what we saw above was type coercion, now will achive 2009 with type conversion.

console.log(Number(inputYear) + 18);
// this results in 2009 because 1991 was converter into a number prior to the operation.
// the conversion took place because of the Number() function.
// another point to note here is that we have not replace or assigned this number 1991 back to inputYear that means, the variable inputYear still contains a string.
// the conversion only took place on the value for that calculation.

console.log(typeof(inputYear)); // output type as string.

// Please note, Not everything can we converted to another datatype, for an example string like, "divyansh" will not be converted to a number for obious reasons.

console.log(Number("divyansh")); // this will result in NaN value (Not A Number)
// NaN stands for "Not a Number" and is a value in JavaScript used to represent an unrepresentable value. NaN is the result of an operation that was supposed to return a number, but couldn't because of an error or undefined/empty value.

// Its not just Numbers that we can convert value to.
console.log(String(49));
console.log(String(49)+" House Number");

// Now, lets not get ahead of ourselfs. In js we can convert values from string, number and boolean between them, depending on if its a valid conversion. but we can't convert any of these type to either undefined or null, as it also doesn't make sense.
// Boolean conversion need an understanding of truthy and falsy values, which will have in a bit.

// Type Coercion 
console.log('I am '+23+' year olds'); // type coersion, converting number to string automaticially.
// Here the nubmer 23 is getting converted to string to make sense of the + operator.

console.log('23' - 10); // Here the string '23' will get converted to number to make sense of the - operator
// please note that string doesn't have a - operator where as in case of + , the operation is considered as concatination.

// but please note : Not everystring will get converted to number for the operation
console.log('23dd'-10); // results NaN

// Here with 23 being string the * will not make any sense hence typer coercion will occur and change 23 from string to number.
console.log("multiply --")
console.log('23' * 10);

// Same for divide.
console.log("divide --")
console.log('230' / 10);

let n = '1' + 1
n = n - 1;
console.log(n); // output 10
