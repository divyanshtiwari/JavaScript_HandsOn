// Object and more.

const person = {
  name: 'Tobey',
  lastName : 'Maguire',
  age: 23,
  job: 'teacher',
  subjects: ['english', 'math', 'science'],
  friends: ['Mark', 'Steve', 'Jonas', 'Peter'],
  experience: 3,
  spouse: 'Michellle'
};

console.log(person); // when you will print out this object, you will see it doesn't have the same order as at the time of declaration, and that's okay because object are not bound with the order they have.

// So if, order is not there as was in arrays, how would we access the values of an object.

// by there properties/keys.

// Accessing object elements.
// there are two notations that can help us get some data out of objects.
// dot notation and square brackets.

console.log(person.name); // dot notation.
console.log(person['name']); // brackets.

// the main difference here is, that in the bracket notation we can put any expression that might result in the name of the property.
// but in dot notation the property name should be the exact match.

const nameKey = 'Name';
console.log(person['last'+nameKey]);

//console.log(person.'last'+nameKey); // this won't work.

const interestedIn = prompt("What do you wnat to know about the Tobey? Choose betwen name, lastName, age, job, subjects, firends, experience, spouse");

console.log(person.interestedIn); // this won't work and will give undefined as a result.
// here undefined will come becuase dot notation is treating interstedIn as a property and in the object we don't have any property with that name.

console.log(person[interestedIn]);// this one will work.

// Now, the bracket syntax worked, but the use can always type in a different property. even one that we don't have for the perons. and this will result in undefined.

// but we have handle it, as always.

if(person[interestedIn]){
    console.log(person[interestedIn])
} else {
    console.log("Wrong Request!! Choose betwen name, lastName, age, job, subjects, firends, experience, spouse");
}


// lets add new properties to the object.
// we can use either he dot notation or the bracket one.

person.location = 'Portugal';
person['twitter'] = '@tobeyM';

console.log(person);

// Template string litrals using object.
console.log(`${person.name} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`);
// please note lenght is just a proeprty available on all arrays.