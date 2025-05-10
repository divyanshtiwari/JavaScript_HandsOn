// JavaScript

// What is JavaScript and how does it fits in the world of web-development or programming in general ?

// JavaScript officially know as ECMAScript is a high-level, interpreted, dynamically typed, multi-paradigm, object-oriented programming language.

// let's understand this bit by bit : 

// =======================================
// What is a high-level language:
// A programming language is considered high-level if, as a programmer, you're not required to manage memory directly or deal with low-level system operations.
// These languages provide abstractions that make development faster and more intuitive.
// For example, C is sometimes viewed as low-level compared to languages like Python or Java — and honestly, I love C for that exact reason.
// Please note: While C was considered high-level in its time, it's often seen as low-level today due to how close it is to the hardware compared to modern languages.

// =======================================
// What does interpreted mean ?
// A programming language is said to be interpreted if the translation to machine code and execution happen at runtime, usually line by line. 
// That means one line of code would be read, translated, and executed immediately before moving on the next line, repeating the process until the program ends. 
// ||=> Please note: In compiled languages (like C, C++, and Go), the translation doesn't happen at runtime. There's a separate step that produces a standalone machine code file before execution; this translation happens at build time in complied languages.

// ========================================
// What is dynamically typed?
// A dynamically typed language is one where data types are associated with values, not variables.
// A real world example here can be that a bucket can be used to hold water and sometime latter cricket balls. the fact that water is liqud and cricket balls are solid doesn't have a effect on the bucket itself.
// Think of a variable as a bucket. In a dynamically typed language, the bucket doesn't care what you put in it — water one moment, cricket balls the next.
// The type belongs to the contents, not the container.

// ========================================
// What is multi-paradigm?
// A multi-paradigm language supports more than one programming style. JavaScript allows procedural, functional, and object-oriented approaches — giving developers flexibility based on the task at hand.


// =========================================
// What are Object-oriented languages?
// Object-oriented programming (OOP) arose as both a necessity and a beneficial paradigm. It was designed to tightly couple data with its related functionality while also allowing certain data to remain hidden (encapsulation).
// This approach helps in organizing and managing complex software systems by representing real-world entities as objects that can interact with each other.



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// We have understood what, now lets dig into how does it fit.
// JavaScript is offten know as the third pillar of web-development with HTML and CSS.
// Where HTML is responsible for the structure and CSS for its presentation, JS if the engine that makes it all interavtive and alive.
// In Simpler words, if HTML is skeleton, CSS is the skin, then JS is the muscle that moves it all.

// Example : Form validation with real-time feedback before submitting the data to the server
// HTML can define the structure of a form, and CSS can style it, but neither can check if the user has entered the correct data (e.g., valid email, password length) in real time. JavaScript is necessary to provide immediate feedback, guiding users to correct mistakes as they fill out the form.

// HTML builds the form, CSS makes it look nice, but none of them can tell the user that you have entered a duplicate email, here you’ll need JavaScript. It adds the brains to the form—handling things like validation, interactivity, and talking to the server if needed.

// JavaScript Releases :
// ES5 -> ES6 (ES2015) -> ES7 (ES2016) -> ES8 (ES2017) -> ES9 (ES2018) -> ES10 (ES2019) -> ES11 (ES2020) -> ES12 (ES2021) -> ES13 (ES2022) -> ES14 (ES2023) -> ES15 (ES2024)

// ES6 was the biggest updated and all version after and including this are know as morden javascript



// +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
// Please Skip this part if youa are a beginner, this is only for expirenced Software Developers.
// +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
// OOP encompasses a variety of concepts such as classes, objects, encapsulation, inheritance, polymorphism, abstraction, method overloading (Compile-Time Polymorphism), method overriding (Runtime Polymorphism), access modifiers, and constructors/destructors.
// Please note, Js might not support all the concepts of OOP in its entity, concepts like encapsulation, abstration, access modifiers are partially supported, while method overloading can be simulated, and concepts like destructors are not at all supported. (In js one can use cleanup patterns)
// cleanup patterns are manual strategies to free up memory/resources and to avoid memory leaks in long-running application like browsers or servers.

// Wait Wait Wati, didn't we say JS is a high-level language, and doesn't that mean we need not to think about memory ?
// Introduction => ⚠️ Garbage Collector.
// Yes memory release is handled automatically in high-level languages like JavaScript, thanks to garbage collection.
// ⚠️ but that doesn't mean you are totally safe from memory issues.
// What Garbage Collection (GC) Actually Does
// Garbage collectors automatically free memory when an object is no longer reachable - meaning there are no more references to it in your code.
// 🤯 BUT: GC Only Works If You Let It
// If you keep references alive (even unintentionally), GC can't clean them up.

/* Common "Hidden" Memory Leaks:
Event listeners not removed from DOM elements
Intervals or timeouts still running
Closures holding onto data longer than needed
Detached DOM nodes (still referenced in JS)
Global variables accidentally holding data 
*/

/*  So What’s the Role of Cleanup Patterns?
Garbage Collection ≠ Resource Management
GC only handles memory.
You still need to manually clean up:
Timers
Event listeners
WebSocket or DB connections
DOM references
Large data inside closures

Think of cleanup patterns as being a good citizen in a high-level world — even if the language is watching your back, you still lock your own door.
*/
// +=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=
