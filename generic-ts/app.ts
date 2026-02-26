//generic 
//aese function , classes , intrerfaces jo dynamic data tyoe ke hisab se chale
//Generic Functions
//Generic Functions are functions that can work with any data type. 
// They are defined using angle brackets <> and a type parameter.

//single parameter\
//EXAMPLE 1
function a <T> (value: T ) : T{
    ///type narrowing
    if (typeof value === "string") {
        return value.toUpperCase() as T       //type assertion
    } else if (typeof value === "number") {
        return value * 2 as T
    }
    return value
}
console.log(a<string>("hello")) //HELLO
console.log(a<number>(123))  //246




//Generic Interfaces
//Generic Interfaces are interfaces that can work with any data type.
// They are defined using angle brackets <> and a type parameter.

interface User <T> {
    email : string
    password : string
    uid : T
}
function userMaker (u : User<number>){
    console.log(u)
}
userMaker({
    email:"ahahmi5401@gmail.com",
    password : "mkmiofdbmk#4321",
    uid : 12121212
})
//Generic Classes
//Generic Classes are classes that can work with any data type.
// They are defined using angle brackets <> and a type parameter.

class Student <T> {
    public name : T
    constructor(username  : T) {
        this.name = username 
    }
}

let s1 = new Student <string>("Muhammad Ayan Hashmi")
console.log(s1.name) //John



