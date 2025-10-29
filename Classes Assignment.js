"use strict";

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    displayInfo() {
        console.log(this.make + " " + this.model);
    }
}

let myCar = new Car("Toyota", "Corolla");
// myCar.displayInfo();

class Phone {
    static phoneTypes = ["android", "iphone"]
    constructor(type) {
        if(type == "android" || type == "iphone") {
            this.type = type;
        } else {
            throw Error(type + " is a bad phone type");
        }
    }
    static logPhoneTypes() {
        for(let type of this.phoneTypes) {
            console.log(type)
        } 
    }
}

let myPhone = new Phone("iphone");
console.log(myPhone.type)
Phone.logPhoneTypes()


