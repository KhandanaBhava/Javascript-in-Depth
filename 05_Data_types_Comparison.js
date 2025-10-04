//console.log(2!=3)  False as 2 is not equal to 3

//Never compare two different data types in js. Tpescript does not allow comparison of different data types

// console.log("2">1) -> true ("2"converted to number)

// console.log("02">1) -> true ("02"converted to number)

//VVI Comaprison operator(>,<) converts null to number(i.e to zero). Equal to and not equal to (==,!=) operator does not.
//The above rule is applicable only for cases like null,undefined. For normal strings == converts to number(2=="2" is true)

// console.log(null>0) -> false (converted to zero)

// console.log(null!=0) -> true (not converted to zero)

// console.log(null==0) -> false (not converted to zero)

// console.log(null>=0) -> true (converted to zero)

//VVI All comparisons of undefined with 0 will be false(as undefined is converted to NaN) only udefined!=0 is true

console.log(null==undefined) //VVI This is true as both are treated equal due to absence of value

//All other comparisons of null with undefined are false

// Strict Chech(===) Comaprison of data types

console.log("2"==2) //True as "2" is converted to number. Loosely checked(data type conversion and not comparison)

console.log("2"===2) // False as strict check where data types are compared
