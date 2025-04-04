// String method

console.log("String method");
let str = "Ajith ";
console.log("toUpperCase(): ", str.toUpperCase());
console.log("toLowerCase(): ", str.toLowerCase());
console.log("charAt(index - 1): ", str.charAt(1));
console.log("includes(substring): ", str.includes("th"));
console.log("slice(start, end): ", str.slice(1, 3));
console.log("replace(search, replace): ", str.replace("h", ""));
console.log("split(separate): ", str.split("t"));
console.log("trim(): ", str.trim());


// Number method

console.log("Number method")
let num = 549.36;
console.log("toFixed: ", num.toFixed(3));
console.log("toExponential: ", num.toExponential(2));
console.log("toString: ", num.toString());
console.log("valueOf: ", num.valueOf());

// Boolean method

console.log("Boolean method");
let bool = true;
console.log("valueOf: ", bool.valueOf());
console.log("toString: ", bool.toString());


// Symbol method

console.log("Symbol method");
let sym = Symbol("id");
console.log("toString: ", sym.toString());
console.log("valueof: ", sym.valueOf());

// BigInt method

console.log("BigInt method");
let big = 9000000000000000000n;
console.log("toString: ", big.toString());
console.log("valueOf: ", big.valueOf());


//  null and undefined don't have methods.
console.log("null and undefined don't have methods.")


// problems

let prb1 = "0030";
console.log(`${prb1} trailing zeros removed:`,Number(prb1));

let prb2 = 3.19;
// prb2 = 4.68;
// prb2 = 44;
console.log(`${prb2} converted to nearest Half:`, Math.floor(prb2) + 0.5);

// Numbers

let billion = 1000000000;
let billion2 = 1_000_000_000;
console.log(`${billion} and ${billion2} are equal:`, billion === billion2);

// string
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

let msg = "Hi";
msg[0] = "h";
console.log(msg);
msg = 'h' + msg[1];
console.log(msg);


// Array
let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
console.log("Original Fruits array ", fruits);

fruits[2] = "Pear";
console.log("Fruits after the update ", fruits)
fruits[3] = "Lemon";
console.log("Fruits after adding new element ", fruits)
console.log("Accessing fruits based on index:", fruits[1])
console.log("Accessing fruits based on index:", fruits.at(1));

// push and pop - > add / remove from then end

console.log("pop method:", fruits.pop());
console.log("push method:", fruits.push("Mango"));
console.log("Fruits after the push: ", fruits);

// unshift and shift -> add / remove from the start

console.log("shift method: ", fruits.shift());
console.log("Fruits after shift: ", fruits);
console.log("Unshift method: ", fruits.unshift("Apple"));
console.log("Fruits after unshift: ", fruits);

let dailySupplyLogs = [
    ["2025-04-04", "Milk", 5, true, {addedBy: "Ajith", shift:"Morning"}],
    ["2025-04-04", "Water Can", 2, true, { addedBy: "Aji", shift: "Evening" }],
    ["2025-04-04", "Snacks", 25, false, { addedBy: "AK", shift: "Night" }]
];

dailySupplyLogs.forEach(log => console.log(`
    Date: ${log[0]},
    Item: ${log[1]},
    Quantity: ${log[2]},
    IsAvailable: ${log[3]},
    AddedBy: ${log[4].addedBy} (${log[4].shift} shift)
    `
));

console.log("using slice:",dailySupplyLogs.slice(0, 1));
console.log("using splice:", dailySupplyLogs.splice(0, 1));

// filter;
let students = [
    { name: "Ajith", marks: 85 },
    { name: "Sundar", marks: 72 },
    { name: "Sahith", marks: 90 },
    { name: "Ravi", marks: 66 },
    { name: "Karthik", marks: 49 },
    { name: "Deepak", marks: 93 },
    { name: "Gokul", marks: 77 },
    { name: "Mani", marks: 58 },
    { name: "Naveen", marks: 80 },
    { name: "Rahul", marks: 69 }
];
let topper = students.filter(mark => mark.marks >= 75).map(mark => mark.name);
console.log("student more than 75 using Filter:", topper);
