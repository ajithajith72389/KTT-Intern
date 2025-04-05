"use strict"

const { use } = require("react");

//console.log("Aj");

// Variables
/*
let message;
message = "RCB";
let team;
team = message
console.log(message);
console.log(team);

// value change

let name;
name = "Aj";
name = "Ajith";
console.log(name);

let $ = 3;
let _ = 15;
console.log($ + _);

//Case matters
let a = "apple";
let A = "Apple";
console.log(a +" "+ A);

// An assignment without use strict

num = 5;
console.log(num);

// const - unchanging variable;;

const myteam = "RCB";
// const myteam = "CSK";
console.log(myteam)

*/

/*

// Data Types - 8


number - pow(2, 53) -1
bigint 
string
boolean
null
undefined
symbol

object


// Bigint

const bigint = 1234567890123456789012345678901234567890n
console.log(bigint);

// String

let str = "Aj"
let str2 = "str2"
console.log(`My name is ${str}`);

// Boolean

let nameFieldChecked = true; 
let ageFieldChecked = false;

// null

let age = null;
console.log(age)
// undefined

let ag;
console.log(ag);


*/


// Type Conversion

// string conversion

// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(value);

// // Numeric Conversion

// let str = "123";
// console.log(str);
// str = Number(str);
// console.log(str);

// Operators
// let - keyword
// let x= 1
// x = -x
// console.log(x)

// String Concatenation

// let s = "Ajith" + " " + "Kumar";
// console.log(s);

// Note:: that if any of the operands is a string, then the other one is converted to a string too.

// console.log("1" + 2);
// console.log(1 + "3");
// //  1+4 = 5 + str 5 = 55 str
// console.log(1 + 4 + "5");
// // str 1 + 5 = str 15 + 6 = 156 str
// console.log("1" + 5 + 6);

// console.log(6 - '2');
// console.log('6' / '2');
// console.log(6 / 2);
// console.log("6" - 2);

// Numeric conversion
// unary +
// let apples = "2";
// let oranges = "3";
// console.log(apples+oranges);
// console.log(+apples + +oranges);
// console.log(Number(apples) + Number(oranges));


// let n = 2;
// n *= 3 + 5; // right part evaluated first, same as n *= 8
// alert(n); // 16

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// conditional branching: if, ?

// closure

// function outer() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// let text1 = "551";
// let text2 = "55";
// let result = text1 < text2;
// console.log(result);

// use strict ;;
// num = 5;
// console.log(num);


// num = 21; // Error: num is not defined
// age;      // Error: age is not defined
// age = 22; // Error: age is not defined
// console.log(age);


// console.log(typeof undefined) // "undefined"

// console.log(typeof 0) // "number"

// console.log(typeof 10n) // "bigint"

// console.log(typeof true) // "boolean"

// console.log(typeof "foo") // "string"

// console.log(typeof Symbol("id")) // "symbol"

// console.log(typeof Math) // "object"  (1)

// console.log(typeof null) // "object"  (2)

// console.log("while loop")
// let a = 5;
// while (a){
//     console.log(a);
//     a--;
// }

// console.log("Do while loop");
// let a =5;
// do {
//     console.log(a);
// } while(a != 5);

// console.log("For loop");

// for (let i=0; i<5; i++){
//     console.log(i);
// }


// breaking loop
// outer: for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         let input = prompt("Enter any number: ");
//         if (!input || input == 0) break outer;
//     }

// }
// alert("Done");

//Write a program to print numbers from 1 to 10 using a for loop.

// for (let i=1; i<=10; i++){
//     console.log(i);
// }


//Use a while loop to print all odd numbers between 1 and 20

// let i = 20;
// while (i) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i = i - 1;
// }

// Use a do while loop to prompt the user to enter a number until they input a positive value.

// do {
//     let input = prompt("Enter a number:", 0);
// } while (input <= 0);

// for in

// const user = {name : "Ajith", age : 21, Location : "Namakkal"}

// for (let keys in user) {
//     console.log(keys);
//     console.log(user[keys]);
// }

// for each;;

// const arr = [1, 2, 3, 4, 5, 6, 7]

// for (let index in arr){
//     console.log(index);
//     console.log(arr[index]);
// }

// switch

// let num = 20;

// switch (true) {
//     case num < 0:
//         console.log("Negative Number");
//         break;
//     case num == 0:
//         console.log("The number is zero");
//         break;
//     case num > 1:
//         console.log("Positive Number");
//         break;
//     default:
//         console.log("This is not a number");
// }

// let day = 3;

// switch (day) {
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Number must be between 1 and 7");
// }


// functions

// function ajith() {
//     console.log("Hello ajith");
// }
// ajith();
// ajith();

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// console.log(message);

// let username = "Ajith";

// function greet() {
//     username = "Aj";
// }

// console.log("Hello " + username);
// greet();
// console.log("Hello " + username);

//Parameters

// function greet(text, name) {
//     console.log(text, name)
// }

// greet("Hello", "Ajith");
// greet("Goodmorning", "Ajith");


// function showMessage(count) {
//     console.log(count ?? "unknown");
// }

// showMessage(0);
// showMessage(null);
// showMessage(undefined);
// showMessage();
// showMessage("Ajith");


// returning a value;;

// function sum (a, b, c) {
//     return a+b-c;
// }

// let result = sum(10, 330, 90);
// console.log(result);


// function sayHi() {   // (1) create
//     console.log("Hello");
// }

// let func = sayHi;    // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)

// Call back function;;

// function ask (question, yes, no) {
//     if (confirm(question)) showok();
//     else showcancel();
// }
// function showok(){
//     console.log("You love JavaScript!");
// }
// function showcancel(){
//     console.log("No do not love JavaScript");
// }
// ask("Do you like JavaScript?", showok, showcancel)


// Arrow function;;

// let sum = (a, b) => {
//     return a + b
// }

// let result = sum(18, 17)
// console.log(result)

// let sum = (a, b) => {
//     let result = a + b
//     return result
// }

// let result = sum(18, 17)
// console.log(result)

// Readable Version
// const nums = [1, 2, 3, 4, 5];

// // Double the numbers
// const doubled = nums.map(n => n * 2);
// console.log(doubled);

// // Keep numbers greater than 5
// const filtered = doubled.filter(n => n > 5);
// console.log(filtered);

// // Add the remaining numbers
// const result = filtered.reduce((a, b) => a + b);
// console.log(result);

// Ninja code

// const nums = [1, 2, 3, 4, 5];

// const result = nums.map(num => num * 2).filter(num => num > 5).reduce((a, b) => a + b);
// console.log(result);

// objects

// creating an object;;
// let obj = new Object();

// let user = {}

// let user ={
//     "name": "Ajith",
//     "email": "ajithajith72389@gmail.com",
//     "Age": 21,
// }
// delete user.location;

// console.log(user)

// let user = {
//     "name": "Ajith",
//     "email": "ajithajith72389@gmail.com",
//     "Age": 21,
//     "Full Name": "Ajith Kumar",
// }

// console.log(user["Full Name"])
// console.log( "Age" in user);
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }


// let key = "Full Name"
// let user ={
//     "name": "Ajith",
//     "email": "ajithajith72389@gmail.com",
//     "Age": 21,
//     key : "Ajith Kumar",
// }

// console.log(user.key)

// copying object references

// let message = "Hello";
// let phrase = message;
// console.log(phrase);

// let user = {
//     name: "Ajith",
// };
// let admin = user;
// //console.log(admin);
// // console.log(admin.name);
// admin.name = "Aj";
// console.log(admin);

// let a = {} // "1"
// //let b = a // 1
// let b = {}

// console.log(a == b); // true
// console.log(a === b); // false

// Assign ->

// let college = { id: "7376212AD104" }
// let student = { Name: "Ajith" }
// let location = { city: "Bangalore" }

// Object.assign(student, college, location);

// console.log(student.id);
// console.log(student.Name);
// console.log(student.city);


// nested cloning;;

// let user = {
//     name   : "Ajith",
//     college : {
//         college: "BIT",
//         location : "Sathy"
//     }
// }

// console.log(user)
// console.log(user.college.college)



//structuredClone
// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = structuredClone(user);
// console.log(clone);

// this keyword -> this method

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         console.log(this.name);
//     }

// };

// user.sayHi();

// let college ={
//     name :"BIT",
//     location :"Sathy",

//     showMessage(){
//         console.log(this.name);
//     }
// }
// college.showMessage();


// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//     console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f()
// admin.f()


// arrow function ;; 
// let user = {
//     firstName: "Mandhana",
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     }
// };

// user.sayHi();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const ajith = new Person("Ajith", 21);
// console.log(ajith);


// let user = { name : "Aj" , age:21,

//     Person(){
//         console.log(this.name);
// }

// }

// user.Person();


// let fav = {team: "RCB", color: "Blue", player: "Virat"}

// Object.assign(fav,{ number : 18});
// console.log(fav.number);


// let number ={ one : 1, two : 2, three : 3, four : 4}

// Object.assign(number, {five: 5, six: 6})
// console.log(number["six"])
// console.log(number.two);

// constructor;;

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let person = [new Person("Ajith", 21),
//     new Person("Swetha", 22),
//     new Person("Virat", 34)
// ]
// // let person1 = new Person("Ajith", 21);
// // let person = new Object();
// // person.name = "ajith";
// // person.age = 20;
// // person.name="Swetha";

// console.log(person);

// // map
// let names = person.map(person => person.name);
// console.log(names);


// symbol

// let id = Symbol("id");
// let name = Symbol("id");
// console.log(id);
// console.log(id.toString());
// console.log(name.toString());
// console.log(id.description);
// console.log(name.description);
// console.log(Boolean (id == name))   ; // false

// let id = Symbol("id");
// let user = { name  : 'Ajith', [id] : 104 };
// console.log(user[id]);


// let id = Symbol.for("id");
// let name = Symbol.for("id");
// console.log(Boolean(id == name)); // true


// let id = Symbol("id");
// console.log(Symbol.keyFor(id));

// let name = Symbol.for("name");
// console.log(Symbol.keyFor(name));

// Object to primitive datatypes

// console.log(obj);
// anotherObj[obj] = 123;





// objects

// Login system

let user = {
    name : "Ajith",
    age : 21,
    email: "ajithajith72389@gmail.com",
    login : function (){
        console.log(`${this.name} has logged in`);
    }
}

console.log("username: ", user.name);
user.login();

// E-commerce site;;

let product = {
    id: 101,
    name : "Bag",
    price : 500,
    discount: 10,
    // get finalPrice()
    finalPrice: function ()
    {
        return this.price - (this.price * this.discount) / 100;
    }
}
product.finalPriceValue = product.finalPrice()
delete product.finalPrice
console.log("Product: ",product); // 450
// let productDetails = {
//     ...product,
//     finalPrice:product.finalPrice
// }


// console.log("Product Details: ",productDetails);
// product.finalPrice = product.price - (product.price * product.discount) / 100;

// console.log("Product final price: ", product.finalPrice());
// console.log("Product: ",product);

// Bank Transaction

let transaction = {
    id: "TXN12345",
    amount: 5000,
    type: "Credit",
    date: "2025-04-04",
    getTransactionDetails: function () {
        return `Transaction ${this.id}: ${this.type} of ₹${this.amount} on ${this.date}`;
    },
};

console.log(transaction.getTransactionDetails());

// object with 10+ properties and nested objects,

let employee = {
    id: "EMP614",
    name: "Ajith V",
    age: 21,
    department: "Software Engineering",
    position: "Backend Developer",
    salary: 5000,
    experience: 1, // in years
    skills: ["JavaScript", "Node.js", "PostgreSQL", "HTML", "CSS"],
    address: {
        city: "Namakkal",
        state: "Tamil Nadu",
        country: "India",
    },
    contact: {
        email: "ajith@example.com",
        phone: "+91 9876543210",
    },
    projects: [
        { name: "Traffic Management", role: "Frontend Lead", year: 2024 },
        { name: "Finance Tracker", role: "Full Stack Developer", year: 2025 },
    ],
    isActive: true,
    calculateAnnualSalary: function () {
        return this.salary * 12;
    },
    displayInfo: function () {
        return `${this.name}, working as ${this.position} in ${this.department}, earns ₹${this.salary} per month.`;
    },
};

//  Accessing Data
console.log(employee.displayInfo());
// Output: "Ajith V, working as Backend Developer in Software Engineering, earns ₹75000 per month."

console.log("Annual Salary: ₹" + employee.calculateAnnualSalary());
// Output: "Annual Salary: ₹900000"

console.log("Skills:", employee.skills.join(", "));
// Output: "Skills: JavaScript, Node.js, PostgreSQL, Docker"

console.log("Projects:", employee.projects.map(project => project.name).join(", "));
// Output: "Projects: Traffic Management, Finance Tracker"

