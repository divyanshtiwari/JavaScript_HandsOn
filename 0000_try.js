let num = 20; // Primitive value assignment
let j = { num: 20 }; // Object with a property num
let n = num; // n is assigned the value of num (primitive value, so n is 20)
let p = j; // p is assigned the reference to the object j

num += 10; // num changes to 30, but n (which was assigned the primitive value 20) remains unchanged
console.log(num); // 30
console.log(n); // 20 (because n is a primitive value, it does not change)

j.num += 10; // j.num changes to 30 because j is an object, and the property of an object is mutable
console.log(j); // { num: 30 }
console.log(p); // { num: 30 } (p references the same object as j, so p also reflects the change)
