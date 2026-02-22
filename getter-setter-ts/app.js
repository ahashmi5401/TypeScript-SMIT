"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("GETTER & SETTER");
//getter setter
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
let p1 = new Person("Ayan ", 19);
console.log(p1.getName);
p1.setName = "Muhammad Ayan Hashmi";
console.log(p1.getName);
