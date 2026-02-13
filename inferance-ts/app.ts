//inference-ts/app.ts
//inference
//guess the type of app
let app ;

app = 10; // app is now a number
app = "Hello"; // app is now a string
app = true;  //app is now a boolean

//type anotation
let app2 : number;
app2 = 10; // valid
//app2 = "Hello"; // invalid
//app2 = true;  //invalid