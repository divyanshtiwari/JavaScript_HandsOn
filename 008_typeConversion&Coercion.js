// Type Conversion and Coercion
// Type Conversion is manual conversion of value type and Type Coercion is automatic conversion of value type.


// Type Conversion

const inputYear = '1998';
console.log(inputYear + 18); // 18 will automatically get converted into a string to make sense of the + operation.

// The above code will result in 199818
// but probably that was not the desired result we wanted the result in mind was : 2016
// To achive this we need to explictly change the type of 1998 so that js can make sense on + as an addition not a concatination.
// what we saw above was type coercion, now will achive 2016 with type conversion.

console.log(Number(inputYear) + 18);
// this results in 2016 because 1998 was converter into a number prior to the operation.
// the conversion took place because of the Number() function.
// another point to note here is that we have not replace or assigned this number 1998 back to inputYear that means, the variable inputYear still contains a string.
// the conversion only took place on the value for that calculation.

console.log(typeof(inputYear)); // output type as string.

// Please note, Not everything can we converted to another datatype, for an example string like, "divyansh" will not be converted to a number of obious reasons.

console.log(Number("divyansh")); // this will result in NAN value (Not A Number)
// NaN stands for "Not a Number" and is a value in JavaScript used to represent an unrepresentable value. NaN is the result of an operation that was supposed to return a number, but couldn't because of an error or undefined/empty value.

// Its not just Numbers that we can convert value to.
console.log(String(49));
console.log(String(49)+" House Number");

// Now, lets not get ahead of ourselfs. In js we can convert values from string, number and boolean between them, depending on if its a valid conversion. but we can't convert any of these type to either undefined or null, as it also doesn't make sense.

// Type Coercion 
console.log('I am '+23+' year olds'); // type coersion, converting number to string automaticially.

console.log('23' + 10); // Here the string '23' will get converted to number to make sense of the - operator
// please note that string doesn't have a - operator where as in case of + , the operation is considered as concatination.


// but please note not everything not everystring will get converted to number for the operation
console.log('23dd'-10); // results NaN

console.log('23' * 10);

console.log('230' / 10);

let n = '1' + 1
n = n - 1;
console.log(n); // output 10

