//jab apko typee ka typescript me pata nahi hota hai to aap type assertion ka use kar sakte ho
//type assertion me aapko type ko manually specify karna hota hai


let someValue: any = "this is a string";
//type assertion ka use karte hue
let strLength: number = (someValue as string).length;
console.log(strLength); //output: 16

//example 2
let someValue2: any = 12345;
//type assertion ka use karte hue
(<string>someValue2).length; 


// TYPE CASTING  #data type dossri data type me convert karna hota hai usko type casting kehte hai
//type casting me aapko type ko manually specify karna hota hai
//  lekin type assertion se thoda alag hota hai


let n1 : number = 10;
console.log(typeof String(n1)); //string 


//NON NULL ASSERTION OPERATOR
//jab apko pata hota hai ki koi variable null ya undefined nahi hoga to aap non null assertion operator ka use kar sakte ho
//non null assertion operator me aapko variable ke aage exclamation mark (!) lagana hota hai

let value : null | undefined | string ;
//non null assertion operator ka use karte hue
//value!.length; error nahi aayega kyunki humne non null assertion operator ka use kiya hai
value = "Hello World";




