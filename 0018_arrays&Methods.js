// Arrays
// Arrays are one of the most used data structures in javascript.
// Data structures are specialized formats for organizing, processing, retrieving, and storing data. They are foundational to writing efficient software and solving complex computational problems.

// If I need to store name of 3 friends, we'll do something like below as per the knowledge we have so far.
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// 

const friends = ['Michale', 'Steven', 'Peter']; // This is know as literal syntax of arry declaration
console.log(friends);  // outputs an array of 3 values

const years_1 = new Array(1991, 1984, 2008, 2020);

console.log(years_1);

// accessing specific element in an array
console.log(friends[0]);
console.log(friends[2]);

// total number of elements in an array
console.log(friends.length);

// last element of an array
console.log(friends[friends.length-1]);

// chaning a specific element in array
friends[2] = 'Jay';
console.log(friends);

// You might think that we have just done a mutation in a const defined array. but acutally you have done mutation in a element of the array

// if you do this, then it would not work.
// friends = [2,3,4];
// console.log(friends);

// array with diffrent types of values 

const jonas = ['jonas','schmedtmann', 2037-1991,'teacher', true, friends];

console.log(jonas);
console.log(jonas.length);


// 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

console.log(calcAge(years[0]));
console.log(calcAge(years[2]));
console.log(calcAge(years[years.length-1]));

const ages = [calcAge(years[0]),calcAge(years[2]),calcAge(years[years.length-1])];

console.log(ages);


// array meth00ods
console.log("===================")
const my_friends = ['Michale', 'Steven', 'Peter'];
console.log(my_friends);

const push_return = my_friends.push('Jay'); // this is a push method and pushes a new element at the end of the array its applied/called for.
// push being a method may return a value, and it does, it returns the length of the new modified array.
// in this case 4.
console.log(push_return);

console.log(my_friends);

// Add element at the start of an array, using unshift method.
// unshift also return the length of the new modified array
my_friends.unshift('Jhon');
console.log(my_friends);


// Remove an element from an array

// Pop, removes the last element of an array.
// pop return the removed element's value.
const removed_element = my_friends.pop(); //

console.log(my_friends);

console.log(removed_element);

// shift, removes an element from the start of an array.
// shift, also returns the removed element's value.
const shift_removed = my_friends.shift();
console.log(my_friends);
console.log(shift_removed);


// ================================
// get the position of any element in an array.
// get the index of a element in the array.
// the indexOf method return the position/index of the element in the array.
const index = my_friends.indexOf('Steven');
console.log(my_friends);
console.log(index);
console.log(my_friends[index]);

// if the element is not present in the array it will return -1.

console.log(my_friends.indexOf('Bob'));


// ES6 method for the same sort of purpose.
// this method only return a true, false, not the index of the element.
console.log(my_friends.includes('Steven'));
console.log(my_friends.includes('Bob'));

// Please note, includes do a strict euquality for this check.
// meaning Number(23) will not be equal to String(23);
console.log("=====================");
my_friends.push(23);
console.log(my_friends.includes(23));
console.log(my_friends.includes('23'));

// same is the case with indexOf
console.log(my_friends.indexOf(23));
console.log(my_friends.indexOf('23'));

my_friends.pop();
console.log(my_friends);

