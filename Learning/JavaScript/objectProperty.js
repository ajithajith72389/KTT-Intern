/*
value	        The actual value of the property
writable	    If true, the value can be changed
enumerable	    If true, the property shows up in loops (like for...in)
configurable	If true, the property can be deleted or changed (flags)
*/

console.log("***Property flags and descriptors***");

let descriptor = {
    name: "Ajith",
    age: 21
}

console.log(Object.getOwnPropertyDescriptor(descriptor, "name"));
console.log(Object.defineProperty(descriptor, "name", {
    writable: false,
    enumerable: false,
    configurable: false
}));


// Property getters and setters
console.log("*** Property getters and setters***");

let person = {
    firstName: "Ajith",
    lastName: "V",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;

    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

console.log(person.fullName);
person.fullName = "Sudharshan K"
console.log(person.fullName);


// object -> defineProperty
const obj = {};

Object.defineProperty(obj, 'lang', {
    get() {
        return this._lang || "en";
    },
    set(val) {
        this._lang = val.toLowerCase();
    }
});

obj.lang = "FR";
console.log(obj.lang);


// prototypal Inheritance
console.log("***Prototypal Inheritance***");

let animal = {
    eat: true,
    walk() {
        console.log("Animal walk");
    }
}

let dog = {
    run: true,
    __proto__: animal
}

console.log(dog.eat);
dog.walk();


let team = {
    name: "Team A",
    celebrate() {
        console.log("Ee Saala cup Namdhe!!");

    }
}

// Object.create()
let rcb = Object.create(team)
rcb.celebrate()

// F.prototype;;

console.log("***F.prototype***");

function person1(name) {
    this.name = name;
}

person1.prototype.display = function () {
    console.log("Hi", this.name);
}

let p1 = new person1("Rahul");
p1.display();