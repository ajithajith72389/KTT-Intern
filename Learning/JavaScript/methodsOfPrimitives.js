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
