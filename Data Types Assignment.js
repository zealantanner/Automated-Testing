class Person { // class
    constructor(name, age, isStudent=false) {
        this.name = name // string
        this.age = age // int
        this.isStudent = isStudent // bool
    }
}

let milesAToyotaCouldLast = 100000 // int
let gasGallonsForElectric = 0 // int
let gasTypeForElectric = null // null

let carInfo = { // object
    year: 2007, // int
    make: "Toyota", // string
    model: "Corolla", // string
}

let myHouse = Symbol("home");
let yourHouse = Symbol("home");
console.log(myHouse === yourHouse);