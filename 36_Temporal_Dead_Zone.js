// Global scope hoisting

//Hoisting(moving all declarations to the top) for var (var can be accessed before the declaration)

console.log(coffe) 

var coffe="Latte" // declaration is hoisted to the top of the scope. So Js wrote this code behind the scene, with hoisting, as follows

//var coffe
//console.log(coffe)
//coffe="Latte"

//Thus it prints undefined (not error) as coffe has not been initialized yet (coffe has only been declared that too behind the scene)

// let and const are also hoisted , but they are kept in Temporal Dead Zone where they can't be accessed, but they exist

// Temporal dead zone is the area from the top of the scope to the declaration. In this zone, let and const can't be accessed

//console.log(tea)  Reference Error as let and const can't be accessed before declaration

let tea="Green Tea"

// Block scope hoisting (same as global scope hoisting)

{
    console.log(val)
    var val=5
}

// {
//     console.log(num) This gives reference error as const is used
//     const num=5 
// }
 
// Hoisting for functions

// functions(including arrow functions) are fully hoisted in javascript i.e they can always be called before declaration

greet()

function greet(){
    console.log("Hi")
}

//sayBye() This gives reference error because of the const keyword (as sayBye is in Temporal Dead Zone)

const sayBye=function(){ // This is a function expression
    console.log("Bye")
}

// Thus functions are fully hoisted but function expressions follow the hoisting rules of var, let and const

