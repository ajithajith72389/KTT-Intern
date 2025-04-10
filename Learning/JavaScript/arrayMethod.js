const students = [
    { name: "Ajith", marks: 85 },
    { name: "Sudharshan", marks: 92 },
    { name: "Sahith", marks: 78 },
    { name: "Abishek", marks: 67 },
    { name: "Sesanth", marks: 59 }
];

// map

const grades = students.map(s => {
    if (s.marks >= 90) return `${s.name}: A+`;
    else if (s.marks >= 75) return `${s.name}: A`;
    else if (s.marks >= 60) return `${s.name}: B`;
    else return `${s.name}: C`;
});
console.log("Map", grades);


// filter

const passedStudents = students.filter(s => s.marks >= 60);
console.log("Filter", passedStudents);


// find

const topper = students.find(s => s.marks === 78);
console.log("Find", topper);


//sort

const rankList = [...students].sort((a, b) => b.marks - a.marks);
console.log("Sort", rankList);


//reduce

const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log(`Average Marks: ${avg}`);


//foreach

students.forEach((s, index) => {
    const status = s.marks >= 60 ? "Pass" : "Fail";
    console.log(`${index + 1} ${s.name} - ${s.marks} - ${status}`);
});


//for...of

for (const s of students) {
    console.log(s.name.toUpperCase());
}


//for loop

let gradeACount = 0;
for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 75) gradeACount++;
}
console.log(`Students with A or A+: ${gradeACount}`);


// for...in
const item = { id: 10, name: "Tablet", price: 30000 };
for (const key in item) {
    console.log(`${key}: ${item[key]}`);
}


// 

const products = [
    {
        id: 1,
        name: "Apple iPhone 15 Pro",
        category: "Mobile",
        price: 129999,
        inStock: true,
        rating: 4.8,
        tags: ["apple", "smartphone", "ios"]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "Mobile",
        price: 119999,
        inStock: true,
        rating: 4.7,
        tags: ["samsung", "android", "smartphone"]
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 29999,
        inStock: false,
        rating: 4.5,
        tags: ["sony", "headphones", "audio"]
    },
    {
        id: 4,
        name: "HP Pavilion x360 Laptop",
        category: "Laptop",
        price: 69999,
        inStock: true,
        rating: 4.3,
        tags: ["hp", "laptop", "windows"]
    },
    {
        id: 5,
        name: "Apple MacBook Air M2",
        category: "Laptop",
        price: 104999,
        inStock: true,
        rating: 4.9,
        tags: ["apple", "mac", "laptop"]
    },
    {
        id: 6,
        name: "boAt Airdopes 441",
        category: "Electronics",
        price: 1999,
        inStock: true,
        rating: 4.2,
        tags: ["boat", "earbuds", "bluetooth"]
    },
    {
        id: 7,
        name: "Nike Air Max 270",
        category: "Footwear",
        price: 9999,
        inStock: true,
        rating: 4.6,
        tags: ["nike", "shoes", "sportswear"]
    },
    {
        id: 8,
        name: "Adidas Ultraboost 22",
        category: "Footwear",
        price: 12999,
        inStock: false,
        rating: 4.4,
        tags: ["adidas", "running", "shoes"]
    },
    {
        id: 9,
        name: "OnePlus Nord CE 3 Lite",
        category: "Mobile",
        price: 21999,
        inStock: true,
        rating: 4.3,
        tags: ["oneplus", "smartphone", "android"]
    },
    {
        id: 10,
        name: "Dell Inspiron 15",
        category: "Laptop",
        price: 54999,
        inStock: false,
        rating: 4.1,
        tags: ["dell", "laptop", "windows"]
    },
    {
        id: 11,
        name: "Canon EOS 1500D DSLR Camera",
        category: "Electronics",
        price: 42999,
        inStock: true,
        rating: 4.6,
        tags: ["canon", "camera", "dslr"]
    },
    {
        id: 12,
        name: "Apple AirPods Pro 2nd Gen",
        category: "Electronics",
        price: 24999,
        inStock: true,
        rating: 4.7,
        tags: ["apple", "airpods", "audio"]
    },
    {
        id: 13,
        name: "Realme Narzo 60",
        category: "Mobile",
        price: 17999,
        inStock: true,
        rating: 4.2,
        tags: ["realme", "smartphone", "android"]
    },
    {
        id: 14,
        name: "Lenovo Legion 5 Pro",
        category: "Laptop",
        price: 124999,
        inStock: true,
        rating: 4.8,
        tags: ["lenovo", "gaming", "laptop"]
    },
    {
        id: 15,
        name: "Puma RS-X",
        category: "Footwear",
        price: 7999,
        inStock: false,
        rating: 4.0,
        tags: ["puma", "shoes", "sportswear"]
    }
];


// map
console.log("***Map***");

const mappedData = products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    inStock: product.inStock
}))

console.log(mappedData);


//filter;
console.log("***Filter***");

const filterData = mappedData.filter(filter => filter.inStock === true);
console.log(filterData);

// find

console.log("***Find***");
const findData = mappedData.find(find => find.id === 14);
console.log(findData);

// sort

console.log("***Sort***");
const sortData = mappedData.sort((a, b) => a.price - b.price);
console.log(sortData);

// reduce

console.log("***Reduce***");
const reduceData = filterData.reduce((sum, price) => sum + price.price, 0);
console.log(reduceData);

const reduceStockData = products.reduce((count, item) => item.inStock ? count + 1 : count, 0);
console.log(reduceStockData);

const expensiveProduct = products.reduce((prev, cur) => prev.price > cur.price ? prev : cur);
console.log("Expensive Product",expensiveProduct);

const cheapProduct = products.reduce((prev, cur) => prev.price < cur.price ? prev : cur);
console.log("Product with lowest price", cheapProduct);

// forEach

console.log("***ForEach***");
const forEachData = products.forEach((product, index) => {
    // console.log(product);
    console.log(index + 1, product);

})

// for of

console.log("***For...of***");
for (let product of products) {
    console.log(product);
}


//for 

console.log("***For Loop***");

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    if (products[i].inStock === false) {
        console.log("Out of stock");
    }
}


/*

map - use when you need to transform data
filter - use when you need to filter data
find - use when you need to find a specific item in data
sort - use when you need to sort data
reduce - use when you need to reduce data to a single value
forEach - use when you need to perform an action on each item in data 
for...of - use when you need to loop over data
for - use when you need to loop over data and have more control over the loop

*/


// reduce

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const reduceArr = [arr1, arr2, arr3].reduce((prev, cur) => prev.concat(cur), []);
console.log(reduceArr); 


// // include;

// console.log("***Include***");
// const laptopProduct = products.some(product => product.tags.includes("laptop"));
// console.log(laptopProduct);
