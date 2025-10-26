const score = 400

const newScore =new Number(400)

console.log(score) // 400

console.log(newScore) // [Number : 400] Specifically casts into a number

console.log(score.toString().length)

console.log(score.toFixed(2))

// toPrecision() --> Always returns a string

let otherNumber = 23.896

console.log(otherNumber.toPrecision(3)) // 23.9

otherNumber = 123.896

console.log(otherNumber.toPrecision(3)) // 124

otherNumber = 1123.896

console.log(otherNumber.toPrecision(3)) // 1.12e + 3

const hundreds= 100000

console.log(hundreds.toLocaleString()) // Default convention commas

console.log(hundreds.toLocaleString("en-IN")) // Indian convention commas

console.log(score.length) // returns undefined as length is not a valid property of number

console.log(score.MIN_VALUE)

// Note - Min Value , Max Value etc are all static properties of the Number object. We cant use them with the instance of an object
// For example, we cant use score.MIN_VALUE as this will return undefined

console.log(Number.MIN_VALUE)

console.log(Number.MAX_VALUE)

console.log(Number.MAX_SAFE_INTEGER)
