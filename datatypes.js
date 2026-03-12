// Primitive Data Types

//1. Number

let x = 10;
let y = 5.5;
console.log(typeof x); // number


// 2. String

let city = "Kolkata";
console.log(typeof city); // string

// 3. Boolean

let result = 1 > 2;

console.log(result)


//4. Undefined

//A variable declared but not assigned a value.

let t;
console.log(t); // undefined


//5. Null

let user = null;



/**6. Symbol 

Used to create unique identifiers. */

let id = Symbol("id");

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); // false



//BigInt 

//Used for very large integers beyond Number limit.

let bigNumber = 123456789012345678901234567890n;







//Non-Primitive (Reference) Data Types


// 1. Object


let student = {

    name : " rajib",
    age : 22,
    course : "BCA"
}


console.log(student)


//2. Array


let numbers = [10, 20, 30, 40];


console.log(numbers)



//3.  function


function greet() {
  console.log("Hello");
}


let sum = function add (a,b){

    return a + b
}


console.log(sum(2,3))