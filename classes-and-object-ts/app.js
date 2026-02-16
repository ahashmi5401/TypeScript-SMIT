// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        console.log(name, email, password);
    }
}
let s1 = new Student("ayan", "ahashmi@gmail.com", "mkmiofdbmk4231");
console.log(s1);
// 
class bottle {
    name;
    material;
    constructor(name, material) {
        this.name = name;
        this.material = material;
    }
}
let newPiece = new bottle("Aquafina", "Plastic");
// bottle.name = "ayan" can't access outside bottle class because of private
// we change in private in classs
class example {
    name;
    constructor(name) {
        this.name = name;
        this.name = "hashmi";
    }
}
let ans = new example("ayan");
console.log(ans);
//# sourceMappingURL=app.js.map


