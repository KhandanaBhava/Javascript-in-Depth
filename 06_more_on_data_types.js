//JS is dynmically typed language as 
// 1) type-checking occurs at runtime.let score=100(not necessary to mention integer or number),
// let name="Ram" (not necessary to mention string)

// 2)  A single variable can hold values of different types throughout the program's execution.
// let myVal=10 (number) myVal="Jon"(string) myVal={key : "value"} (object)

// Data Types - Primitive and Non_-Primitive (classification on basis of how data is stored and accessed in memory)

// Primitive ( Call by value.Whenever they are copied,their reference is not given and a copy is given.Changes are done on the copy)

// 7 types: String , Number(includes decimal, no float or double) , Boolean , undefined(declared but not used) , null , BigInt , Symbol

const id=Symbol('123') //Returns a symmbol data type

const anotherId=Symbol('123') // Even though values passed in symbol for both is same, it is different (unique)

console.log(id===anotherId); // False as return value of both are not the same

let bigNumber = 874897483849595n // n at the end of a number means js treats it as bigInt


//Non Primitive ( Reference Type) : Refernce in the memory can be directly accessed 

// 3 types : Arrays , Objects , Functions

const heroes =["batman","hulk","flash"] //array

let Obj={
    name: "Aratrik",
    age:25,
}

const myFunction = function(){
    console.log("Hello World")
} //Function is treated as a variable

myFunction() // Function Called

// Data Type of all data types using typeof

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes (All have data types objects)
//        Arrays  =>  object
//        Function  =>  function (Object Function)
//        Object  =>  object 

