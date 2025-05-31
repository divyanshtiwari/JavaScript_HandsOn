// Object methods.

const jonas = {
    firstName : 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriverslicense: true,
    // function is also a value in js.
    // so using function expression we can say.
    // utility method/function
    calcAgeUtil : function (birthYear){
        return 2037 - birthYear;
    },

    // tightly coupled method with object
    calcAge : function (){
        console.log(this); // this will print the jonas object as this belogs to jonas object inside it.
        return 2037 - this.birthYear;
    }
}

// both are calls to property caclAge which essentially a function expression.
console.log("calcAgeUtil=========");
console.log(jonas.calcAgeUtil(1991)); 
console.log(jonas["calcAgeUtil"](1991));
console.log("=====================");
// caclAge is now a method, but its working as a standalone utility function not as a method, I mean methods are essentially tightly coupled with objects meaning, they are applied on an object to do something with or around that object it-self. where as in this example we can see that you can pass any birthYear, not necessarily jonas's birhtYear and the method will calculate the age accordingly.

// Ideally, it should always be Jonas's age if it's Jonas's method. There are exceptions to that rule — meaning, there can be some methods that are not directly working on the object itself, but those are relatively few.

// Now lets tightly couple the object and the method.
// if you have a method inside an object and you would like to use the birthYear of that same object, inside your method you will say something like this objects birthYear. 
// introducing this keyword.
// it have the same behaviour, it suggest the same object its used in.
// so in your method the birthYear can now be this.birthYear instead of birthyear.
console.log("calcAge============");
console.log(jonas.calcAge());

// some of you can also think, of 2 other implimentation here.
// 1. why didn't we used jonas.birthYear in the function call.
// like : 
console.log("jonas.calcAgeUtil(jonas.birthYear)");
console.log(jonas.calcAgeUtil(jonas.birthYear));
// this would also be only for jonas. right ?
// yes in this case it would be, but its still a utility function meaning any one can pass any value, not just jonas.birthYear.

// 2. instead of this.birthYear in the method calcAge, can't we say jonas.birthYear ?
// Yes you can.
const jonas2 = {
    firstName : 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    // tightly coupled method with object
    calcAge : function (){
        return 2037 - jonas2.birthYear;
    }
}
// here you can see that I have created a similar object, jonas2 . but we are not using the this keyword.
// this will work 
console.log("return 2037 - jonas2.birthYear;");
console.log(jonas2.calcAge());

//The issue is that you are hardcoding the object name (jonas2) inside its own method, which breaks flexibility and reusability.
//Tight coupling to a specific variable name
//If the object is later assigned to new variable name or copied, the method will still refer to jonas2, not to the object it's actually called on.
// like : 
const jonas3 = {
    firstName : 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1981,
    // tightly coupled method with object
    calcAge : function (){
        return 2037 - jonas2.birthYear; // still pointing to jonas2
    }
}
console.log("jonas3's age should be 56");
console.log(jonas3.calcAge());
console.log("Not 56");

// please note I am not talking about the below code.
// you not creating a new object — you're simply creating a new reference to the same object in memory. So any changes made via jonas4 will also affect jonas2, and vice versa.

// INVQ ---------------------
const jonas4 = jonas2;
jonas4.birthYear = 1980;
console.log(jonas2.birthYear);
console.log(jonas4.birthYear);

console.log("jonas4's age");
console.log(jonas4.calcAge()); // Even though calcAge uses jonas2.birthYear, the value has been updated through jonas4, because they both point to the same object.

// So I am not talking about that exmpale.

// I am talking about have different people with diffrent data but same schema.

// So a right exmaple would be.
// I bit more advance exmple : 
console.log("============================");
console.log("better exmpale");

const jonas5 = {
  birthYear: 1991,
  calcAge: function () {
    return 2037 - jonas5.birthYear; // ❌ hardcoded
  }
};

const mike = {
  birthYear: 1985,
  calcAge: jonas5.calcAge // to reduce redundancy we used the function of jonas5 for mike here.
  // assuming it would take mike's birhYear
};

console.log(mike.calcAge()); // ❌ Still returns 46 (based on jonas5.birthYear), not 52

const mike2 = {
  birthYear: 1985,
  calcAge: jonas.calcAge // to reduce redundancy we used the function of jonas for mike here.
  // and jonas's function internally is using this keyword hence this should work as expected.
};

console.log(mike2.calcAge());

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// lets learn more here : 
// lets take the jonas object from top and name it jonasX to learn more, with that.
const jonasX = {
    firstName : 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriverslicense: true,
    // function is also a value in js.
    // so using function expression we can say.
    // utility method/function
    calcAgeUtil : function (birthYear){
        return 2037 - birthYear;
    },

    // tightly coupled method with object
    calcAge : function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    }
}

console.log("JonasX================>");

// lets say we need to access the age of jonas or jonasX multiple time.
console.log(jonasX.calcAge());
console.log(jonasX.calcAge());
console.log(jonasX.calcAge());
console.log(jonasX.calcAge());
// to calculate the age multiple times you had to do the same computation/calculation mutiple time.
// in this case the computation was less but there can be cases where large computation might be requried.
// there we can't keep calling compute function to get simple data.

// We can solve this with this keyword, by creating new properties and storing the value in that once its calcualted for the first time.
// like this.age = 2037 - this.birthYear;
// this will create a new property named as age in jonasX object.
// and now we can access it with out needing compute everytime.
console.log("JonasX.age property retrival");
console.log(jonasX.age);
console.log(jonasX.age);

// please note.
console.log(this.age); // is nothing out of the object.
// if you are trying to get this, you will get undefined.
console.log(this); // please note out of the object, this in global scope points to the Window object, so avoid using it outside, if you don't know what you are doing.

// lets do one more thig ;
// as we know we can define properties to an object after initialization,
console.log(jonasX.spouse);
jonasX.spouse = 'Michelle';
console.log(jonasX.spouse);

// let try to do that with a method.
jonasX.getSummary = function () {
    let summary = `${jonasX.firstName} ${jonasX.lastName} is a ${jonasX.age} years old ${jonasX.job}`
    summary += this.hasDriverslicense?`, and he has a driver's license`:`, and he has no driver's license`;
    if(this.spouse){
        summary += ` and is married to ${this.spouse}`;
    }  
    return summary;
}

console.log(jonasX.getSummary());

console.log(jonasX);




// NTM ----------------------
// INVQ ---------------------
// Note to Myself : 
// One thing that I saw, was function declared in the object had the function.name property filled, where as the getSummary function didn't have the name proeprty value.
// it was an empty string. meaning this function is created anonymously.
// read more on : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

// while digging a bit, more, I got to know anonymous function can't do recursive calls.
// will check this, and will see if it is true in the case of getSummary function.


// read more on : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#:~:text=anonymous%20functions%2C%20which%20means%20they%20can%27t%20easily%20call%20themselves%20recursively.


