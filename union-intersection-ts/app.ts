type numbers = number


// inme se koi aik hgi union operator 
type shakoor = numbers | string
let names : shakoor = "ayan"

//intersection  dono correct
type inter = number & {
    oold():void
}