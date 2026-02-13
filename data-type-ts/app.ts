

//premitive data types

let a: number = 10;
let b: string = "Hello";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;


//non-premitive data types
let f: number[] = [1, 2, 3, 4, 5];
let g: string[] = ["Hello", "World"];
let h: boolean[] = [true, false, true];
let i: any[] = [1, "Hello", true, null, undefined];

//enum data type
enum Color {
    red = "Red",
    green = "Green",
    blue = "Blue"
}
let j: Color = Color.red;

//tuple data type
let k: [number, string] = [1, "Hello"];

//void 
function add(n:number , n2 : number) : void {
    console.log(n + n2);
    //return; // valid
    //return null; // invalid
    //return undefined; // invalid
 }
add(2,2)

//