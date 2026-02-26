//if 2 function have same name but different parameter then it is called function overloading

//overload signature 
function add(a:number , b:number) :number;
function add(a:number , b : number , c : number) :number;

//ye wala function signature ko dekh ke decide karega kis function ko call karna hai
//argument 2 hain tu pehla function call hoga aur agar 3 hain tu dusra function call hoga
function add(a:number , b:number , c ?: number ) : number {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
        return a + b + c;
    }
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
}

add(2, 3);
add(2, 3, 4);