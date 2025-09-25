"use strict" // all the js code is treated according to new version

const name="Aatrik" // const always has to be initialized and cant be changed

console.log(a); //Hoisted to undefined by default

//console.log(b);  Error : Can't access b before initialization

var a =2;

//let a=2; Error : a has already been declared

let b =2; //b never ued but this won't cause any error

let age=12

age = 14 

//let age =10; Error as let can't be re-declared

var roll = 9

var roll =11 // No error as var can be re-declared 

console.log(roll)

{
    let age =15 // block scope

    var roll = 8 //function scope (In this case global as no function is there)
    
    console.log(age)
}

console.log(age)

console.log(roll)

console.table([age,roll]) // in tabular form with columns of index and values