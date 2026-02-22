 // Output: "Hello, I'm a static property!"
//static property direct class name se acess hti hai 

class MyClass {
  static myStaticProperty: string = "Hello, I'm a static property!";
  static getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }
}

console.log(MyClass.myStaticProperty);
console.log("kiya ho tum ", MyClass.getRandomNumber());

// Output: Hello, I'm a static property!

