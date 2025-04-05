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
console.log(`${prb1} trailing zeros removed:`, Number(prb1));

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
    ["2025-04-04", "Milk", 5, true, { addedBy: "Ajith", shift: "Morning" }],
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

console.log("using slice:", dailySupplyLogs.slice(0, 1));
console.log("using splice:", dailySupplyLogs.splice(0, 1));

// concat
let cc = [1, 2];

console.log(cc.concat([3, 4])); // 1,2,3,4
console.log(cc.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
console.log(cc.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

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

// filter;
let topper = students.filter(mark => mark.marks >= 75).map(mark => mark.name);
console.log("student more than 75 using Filter:", topper);


// find;
console.log("Sahith mark using find method: ", students.find(n => n.name == "Sahith"));

console.log("Map all the students data:", students.map((item, index) => `${index + 1}. ${item.name} ${item.marks}`));

// sorting;;
let s = [1, 2, 14, 23]
console.log("Sorting: ", s.sort());

console.log("sorting students based on marks: ", students.sort((a, b) => a.marks - b.marks));

let r = [1, 2, 14, 23];
console.log("Reversed array:", r.reverse());


// Map

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
console.log("Vegetable Names: ");

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

console.log("Vegetables price: ");
for (let price of recipeMap.values()) {
    console.log(price);
}

console.log("Key and value:")
for (let item of recipeMap) {
    console.log(item);
}

//foreach

recipeMap.forEach((value, key) => {
    console.log(` ${key} ${value}`);
})


// set

let mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
console.log("mySet:", mySet);
console.log("checking with has: ", mySet.has("apple"));
console.log("delete: ", mySet.delete("banana"));
console.log("size: ", mySet.size);
console.log("clear the set; ", mySet.clear());

// Map;
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
console.log("myMap: ", myMap);

console.log("get values: ", myMap.get("name"));

console.log("Check if key exists:", myMap.has("age"));

console.log("Remove a key: ", myMap.delete("age"));

console.log("after deleting age in myMap: ", myMap);

console.log("Get number of entries: ", myMap.size);

console.log("Remove all entries: ", myMap.clear());



let stud = new Set(["ajith", "sudharshan", "ajith"]);
console.log("Students set:", stud);

let marks = new Map();
marks.set("ajith", 90);
marks.set("sudharshan", 85);

console.log("get mark of a student:", marks.get("ajith")); // 90

// student reportcard using Map

let studentt = new Map();
studentt.set("Ajith", new Map([
    ["Maths", 90],
    ["English", 80],
    ["Science", 85],
]));
studentt.set("Sahith", new Map([
    ["Maths", 99],
    ["English", 95],
    ["Science", 92],
]))
studentt.set("Sudharshan", new Map([
    ["Maths", 83],
    ["English", 78],
    ["Science", 85],
]))

let printReport = (student) => {
    if (!(studentt.has(student))) {
        console.log(`Student ${student} not found`);
        return;
    }
    let subjects = studentt.get(student);
    let total = 0
    let count = 0;
    console.log(`Report Card for ${student}`);
    for (let [subject, marks] of subjects) {
        console.log(`${subject}: ${marks}`);
        total = total + marks;
        count = count + 1;
    }
    console.log(`Total: ${total}`);
    console.log(`Percentage: ${(total / count)}%`);
    console.log("\n");

}

for (let student of studentt.keys()) {
    printReport(student);
}

let mark = studentt.get("Sahith") //.get("Maths");
// console.log("Mark of the student",mark); // 99

for (let [subject, marks] of mark) {
    console.log(`${subject}: ${marks}`);

}