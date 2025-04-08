console.log("Countdown using Recursion:");
function countdown(n) {
    if (n == 1) {
        console.log("Boom!");
        return
    }
    console.log(n);
    return countdown(n - 1);
}

countdown(5)

console.log("Factorial ");

function fact(n) {
    if (n == 1) return n;
    return n * fact(n - 1);
}
console.log(fact(5));


// scope

{
    let a = 1;
    const b = 2;
    var c = 3;
}

console.log("Block scope variables:");
// console.log(a); // ReferenceError: a is not defined
// console.log(b);
console.log(c);


console.log("Function");

function simple() {
    var simple_a = 1;
    let simple_b = 2;
    const simple_c = 3;
    console.log(simple_a);
    console.log(simple_b);
    console.log(simple_c);
}

simple();

//closure
console.log("***Closure***");

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
const counter = outer()
counter();
counter();
counter();

// var;
console.log("***var***");
// var is function scoped
if (true) {
    var x = 10;
}
console.log(x); // var ignores the {} block. 

// hoisting
console.log("***Hoisting***");
console.log(a);
var a;

// Redeclaration
console.log("***Redeclaration***");
var num = 100;
var num = 200;
console.log(num);


//IIFE – Immediately Invoked Function Expression

console.log("***IIFE***");

(function () {
    console.log("Hello");
})();

console.log("***CounterModule***");

const counterModule = (function () {
    let counter = 0;
    return {
        increment: function () {
            counter++;
            console.log("Count:", counter);
        },
        reset: function () {
            counter = 0;
            console.log("Reset:", counter);
        }
    }
})();

counterModule.increment();
counterModule.increment();
counterModule.reset();
counterModule.increment();

//Global object
// console codes

/*
appVersion = "1.0.5";
function  showVersion() {
    console.log("App Version", globalThis.appVersion);
}
'1.0.5'
globalThis.appVersion = "1.0.5";
function  showVersion() {
    console.log("App Version", globalThis.appVersion);
}
'1.0.5'
appVersion = "1.0.5";
function  showVersion() {
    console.log("App Version", globalThis.appVersion);
}
showVersion()
VM362:3 App Version 1.0.5
undefined
globalThis.appVersion = "1.0.5";
function  showVersion() {
    console.log("App Version", globalThis.appVersion);
}
showVersion()
VM403:3 App Version 1.0.5
undefined
*/


// Function objects and NFE
console.log("***Function objects and NFE***");

let greet =function greeting(name) {
    console.log("Hello " + name);
}

console.log(typeof greet);
console.log(greet.name);
console.log(greet.length);

// add property
greet.lang = "English";
console.log(greet.lang);

//  new Function;
console.log("***new Function***");

let userInput = "a*b + 10";
let func = new Function("a", "b", `return ${userInput}`);

console.log(func(5, 10)); // Output: 60