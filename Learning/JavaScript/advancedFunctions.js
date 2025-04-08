console.log("Countdown using Recursion:");
function countdown(n){
    if (n == 1) {
    console.log("Boom!");
    return
}
    console.log(n);
    return countdown(n - 1);
}

countdown(5)

console.log("Factorial ");

function fact(n){
    if (n == 1) return n;
    return n * fact(n-1);
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

function simple(){
    var simple_a= 1;
    let simple_b = 2;
    const simple_c = 3;
    console.log(simple_a);
    console.log(simple_b);
    console.log(simple_c);
}

simple();

//closure
console.log("***Closure***");

function outer(){
    let count = 0;
    return function inner(){
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
    var x= 10;
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
