//Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log (id === anotherID);  //false

//const bigNumber = 852147963984846816n  // use n at end for bigInt


//check javascript is statically typed or dynamically typed.

// Reference (Non primitive)

// Array, Objects, Functions
// To master javascript master objects and web based Events

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Chirag",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typepof heros); //use these to remember datatype of variable.

//learn about function object