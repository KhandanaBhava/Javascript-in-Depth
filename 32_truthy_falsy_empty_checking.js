// Falsy Values

// false , 0 , -0 (negative zero) , 0n (Big Int) , null , undefined , NaN , "" (empty string)

// Truthy Values Examples 

//Any value in string is truthy - Examples :  "0", 'false' , " " (space added in string)

// Empty arrays,objects and functions are truthy - [] , {} , function(){}

const name="" // Falsy

if(name) console.log("Name exists")

else console.log("Name doesn't exist")

const email=[] // Truthy

if(email) console.log("Email exists")

else console.log("Email does not exist")

// Empty Array checking

if(email.length===0) console.log("Array is empty")

else console.log("Array not empty")

//Empty Object Checking

const obj={}

if(Object.keys(obj).length===0) console.log("Empty Object")

//  Object.keys(obj) returns an array of the keys of the object. So we can use the length property of array on it for empty checking

else console.log("Not empty object")

// Some Condition Checking

console.log(false == 0)

console.log(false === 0)

console.log(false == '')

console.log(false === '')

console.log(0 == '') 

console.log(0 === '')