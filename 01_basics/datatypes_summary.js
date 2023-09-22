// JavaScript is dynamically typed language

/*
datatypes are mostly two types based on how data is stored in memory and accessed from memory
1) primitive (call by value)
2) non-primitive (reference) (non-primitive data is stored in heap memory) (it refers to a memory location where an object is placed) (call by reference)
*/

// primitive => 7 categories  => String, Number, Boolean, Null, Undefined, Symbol, BigInt


// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

// const bigNumber = 6236135273981n;
// console.log(bigNumber);
// console.log(typeof bigNumber);

// Non-primitive (reference) => Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doraemon"]
let myObj={
    name : "Sunanda",
    age : 20,
}
const myFunction=function(){
    console.log("Hello World !!!");
}
console.log(typeof myFunction); 
console.log(typeof myObj);
console.log(typeof heros);
//basically, all the non-primitive datatypes are of object type