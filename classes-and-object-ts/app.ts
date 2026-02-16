type str = string 
class Student  {
    public name
    public email
    public password

    constructor(name:str , email:str , password:str){
        this.name = name 
        this.email = email
        this.password = password
        console.log( name  , email  ,  password)
    }
}

let s1 = new Student("ayan", "ahashmi@gmail.com","mkmiofdbmk4231")
console.log(s1)


// 
class bottle {
    constructor(private name : string , public material : string){

    }
}
let newPiece = new bottle("Aquafina", "Plastic")

// bottle.name = "ayan" can't access outside bottle class because of private


// we change in private in classs
class example {
    constructor(private name : str){
        this.name = "hashmi"
    }
}
let ans = new example("ayan")
console.log(ans)


//protected
//apni class mai accesiable hoga or jaha isse inherit krta hoga waha bhi access hoga but outside of the class and its child class it is not accessible

class parent {
    constructor(protected name : str = `ayan`){
    }
}

class childern extends parent {
    constructor(name : string){
        super(name)
    }

}
let child1 = new childern ("ayan hashmi")
console.log(child1)


//example 2
class parents {
    constructor(protected name : str){
    }
}

class childerns extends parents {
    constructor(name : str){
        super(name)
    }
    getName(){
        return this.name
    }   
}
let childs1 = new childerns ("ayan hashmi")
console.log(childs1.getName())



//readonly
class bottleMaker {
   constructor(readonly name : string ){
    this.name = name
    this.name = "hashmi"
   }
   }
let bottle1 = new bottleMaker ("ayan")
console.log(bottle1);
