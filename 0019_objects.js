// Objects

// Another extensively used data structure in JavaScript.

// Let's first understand the need for objects.
// Arrays can be used to store multiple pieces of information about one entity.
// Let's say you have an array representing a person:

const person1 = ['Toby', 23, 'teacher', ['english', 'math', 'science'], ['Mark', 'Steve', 'Jonas', 'Peter'], 3, 'Michellle'];

// Let's understand this. It's basic information about a person — probably someone named Toby.
// We might be able to guess that:
// - 23 is his age,
// - 'teacher' is his profession,
// - the array of subjects are the ones he teaches.

// But what about the next array of names?
// What does the number 3 represent?
// And who is Michellle ?
// Is Michellle the name of the person or is Toby?

// Even if we sort all of this out and agree that:
// - name is at index 0,
// - age is at index 1, and so on...

// It quickly becomes confusing, and there’s still no guarantee that the information for another person would follow the same order.
// Also, it's very hard for anyone to remember what each index represents just by looking at the array.
// This approach lacks clarity and flexibility. It's error-prone, hard to read, and hard to maintain.

// Now imagine having to manage dozens or hundreds of such people with this method. A small change in the structure would break everything.

// Arrays are great for storing lists or collections of data. But they fall short when we need to represent structured information about a specific entity — like a person.

// ==================================
// Objects --------------------
// Hence, we introduce **Objects**:
// A key-value pair data structure.
// - Keys represent the type/name of the information.
// - Values represent the specific data for that key.

// Using an object, we can rewrite the same information in a much more meaningful and self-explanatory way:
const person = {
  name: 'Toby', // key is name and value is Toby
  age: 23, // key (property) is age and value is 23
  profession: 'teacher',
  subjects: ['english', 'math', 'science'],
  friends: ['Mark', 'Steve', 'Jonas', 'Peter'],
  experience: 3,
  spouse: 'Michellle'
}; // Object literal syntax

// keys are also called as properties.
// we can say that person has 7 keys or 7 properties.

// Now it's instantly clear what each piece of data represents.
// - No guessing,
// - No memorizing index positions,
// - And much easier to update, read, and work with.

// Please note : order of placement doesn't matter in objects unlike arrays.

// Array are used for more ordered data.
// Objects are used for more unordered data.
