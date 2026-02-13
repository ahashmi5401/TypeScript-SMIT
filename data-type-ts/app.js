"use strict";
//premitive data types
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
let b = "Hello";
let c = true;
let d = null;
let e = undefined;
//non-premitive data types
let f = [1, 2, 3, 4, 5];
let g = ["Hello", "World"];
let h = [true, false, true];
let i = [1, "Hello", true, null, undefined];
//enum data type
var Color;
(function (Color) {
    Color["red"] = "Red";
    Color["green"] = "Green";
    Color["blue"] = "Blue";
})(Color || (Color = {}));
let j = Color.red;
//tuple data type
let k = [1, "Hello"];
//void 
function add(n, n2) {
    console.log(n + n2);
    //return; // valid
    //return null; // invalid
    //return undefined; // invalid
}
add(2, 2);
//
//# sourceMappingURL=app.js.map