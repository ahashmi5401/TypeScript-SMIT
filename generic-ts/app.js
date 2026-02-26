"use strict";
//generic 
//aese function , classes , intrerfaces jo dynamic data tyoe ke hisab se chale
//Generic Functions
//Generic Functions are functions that can work with any data type. 
// They are defined using angle brackets <> and a type parameter.
Object.defineProperty(exports, "__esModule", { value: true });
//single parameter\
//EXAMPLE 1
function a(value) {
    ///type narrowing
    if (typeof value === "string") {
        return value.toUpperCase(); //type assertion
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    return value;
}
console.log(a("hello")); //HELLO
console.log(a(123)); //246
function userMaker(u) {
    console.log(u);
}
userMaker({
    email: "ahahmi5401@gmail.com",
    password: "mkmiofdbmk#4321",
    uid: 12121212
});
//Generic Classes
//Generic Classes are classes that can work with any data type.
// They are defined using angle brackets <> and a type parameter.
class Student {
    name;
    constructor(username) {
        this.name = username;
    }
}
let s1 = new Student("Muhammad Ayan Hashmi");
console.log(s1.name); //John
//# sourceMappingURL=app.js.map