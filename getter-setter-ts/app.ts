console.log("GETTER & SETTER");


//getter setter
class Person {
    constructor(public name : string , private age : number) {
    }
    get getName() : string {
        return this.name;
    }
    set setName(name :string){
        this.name = name 
    }
}

let p1 = new Person ("Ayan ", 19);
console.log(p1.getName);
p1.setName = "Muhammad Ayan Hashmi"
console.log(p1.getName);