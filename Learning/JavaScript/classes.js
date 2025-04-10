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

    static display() {
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