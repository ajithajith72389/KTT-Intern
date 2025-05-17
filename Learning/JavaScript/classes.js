/*
Instance - An object that is created from a class using the new keyword.
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDiscount(discount) {
        return this.price - (this.price * discount / 100);
    }

    //static 
    display() {
        return `${this.name} costs ${this.price}`;
    }
}

// const mi = new Product("MI", 2025);
// console.log(mi.getDiscount(12));


class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }

    // static
    getWarranty() {
        console.log(`${this.name} has ${this.warranty} year(s) warranty`);
    }
}

const laptop = new Electronics("Asus", 55000, 1);
console.log(laptop.display());
laptop.getWarranty()

// Electronics.getWarranty()
// Product.display();


// Private and protected properties and methods

console.log("***Private***");

class user {
    #password;
    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    #encryptedPassword() {
        return this.#password + "encrypted";
    }

    getPassword() {
        return this.#encryptedPassword();
    }
}

const user1 = new user("Ajith", 12345);
// console.log(user1.#encryptedPassword());
console.log(user1.getPassword());
console.log(user1.name);
// console.log(user1.#password);



// try catch;;
console.log("***try...catch***");

class team {
    #captain
    constructor(name, captain) {
        this.name = name;
        this.#captain = captain;
    }

    #encryptedCaptain() {
        return this.#captain + "encrypted";
    }

    displayCaptain() {
        return this.#encryptedCaptain();
    }
}

const team1 = new team("RCB", "Rajat")
try {
    if (!team1.captain) throw new Error("Private key is not accessible");


} catch (err) {
    console.log("Error message", err.message);

}

//

function formValidation(name, email) {
    try {
        if (!name || !email) throw new Error("All fields are required");
        if (!email.includes("@")) throw new Error("Invalid email format");
        console.log("Form submitted:", { name, email });

    } catch (error) {
        console.log("Form error:", error.message);

    }
}

formValidation("Ajith", "ajith@gmail.com");
formValidation("", "ajith@gmail.com");
formValidation("Ajith", "ajithgmail.com")


//

try {
    const a = 20;
    // AjithKumar
    const b = 10;
} catch (error) {
    console.log("Error message:", error);

}

// json

let json = '{ bad json}'
try {
    let user = JSON.parse(json.bad);
    console.log(user);
} catch (err) {
    console.log("Error Message:", err.message);

}

let getUserProfile = async () => {
    try {
        const res = await fetch('https://dummyjson.com/test');
        if (!res) throw new Error("Invalid UserId");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err.message);

    }
}
getUserProfile()