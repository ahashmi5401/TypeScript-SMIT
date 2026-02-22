"use strict";
// Output: "Hello, I'm a static property!"
//static property direct class name se acess hti hai 
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    static myStaticProperty = "Hello, I'm a static property!";
    static getRandomNumber() {
        return Math.random();
    }
}
console.log(MyClass.myStaticProperty);
console.log(MyClass.getRandomNumber);
// Output: Hello, I'm a static property!
