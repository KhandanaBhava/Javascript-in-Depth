//Maths is an object is js

console.log(Math) 

console.log(Math.PI) // PI is a property of Math Object

// console.log(Math.abs(-8)) --> Returns positive value

// console.log(Math.round(4.5)) --> 5

// console.log(Math.floor(4.9))-->  4

// console.log(Math.ceil(4.01)) --> 5

// console.log(Math.min(1,2,3,4,5)) --> 1

console.log(Math.random()) // Always returns a random number between 0 and 1 ( both inclusive )

console.log(Math.floor((Math.random()*10)+1)) // * 10 + 1 is done as the value can be 0.04 . In that case * 10 will give 

// value less than 0 but we want value from 1 to 10 ( both inclusive ). If we do not put floor , we will get value from 
// 1 to 11 ( where 1 is inclusive and 11 is exclusive) 

// FORMULA FOR GENERATING ANY NUMBER IN A GIVEN RANGE

const min = 20

const max = 30

console.log(Math.floor((Math.random()*(max-min))+1)+min) // This will give value from 21 to 30 ( both inclusive )

// If we want value from 20 to 30 we should omit the +1

