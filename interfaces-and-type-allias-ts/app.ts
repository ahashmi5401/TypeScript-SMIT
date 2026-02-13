//interface 
//if both interface have same name so both are add in one 

interface User {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}   
let user: User = {
    name: "John Doe",
    age: 30,
    email: "ahashmi@gmail.com",
    isAdmin: true
};

//example of interface with function
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}
let calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

//Extending Interface
interface user {
    email : "string",
    name : "string",
    number : number
}
interface admin extends user {
    admin : boolean
}
let obj : admin  = {
    email:"a@gmail.com",
    name:"m ayan hashmi",
    number : 34567890,
    admin : true
}
function nameAdmin(objs : admin) {
    console.log('hey')
}
nameAdmin(obj)


//type alias
type ginti = number

let num:ginti = 10;


type Person = {
    firstName: string;
    lastName: string;
    age: number;
};
let person: Person = {
    firstName: "Ayan ",
    lastName: "Hashmi",
    age: 18
}