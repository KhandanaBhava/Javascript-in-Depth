let name="George "

let age=60

// console.log(name + age + " Value" )  Not recommended for concatenation

console.log(`${name}${age} Value`) // Bac-tics. String Interpolation(recommended as it allows to do things like upper,slice on the go)
//between two consecutive $ , one space automatically exists and no need to give it manually

console.log(`My name is ${name}and my age is ${age}`); // Space automatically after name

const subjectName = new String ("Maths")  //string is a js object ( key-value pair ) not an array. Maths is passed inside the constructor

//console.log(name[0])  0 here is not array index . It is the key whose value is 'G'

// All string methods are inside the String Prototype

//console.log(name.__proto__) This returns prototype of name ( string ) , which is an object

//console.log(name.length) 7(not 6) as space after George is also counted . length is not a function(no parenthesis) , but a property 
//associated directly with the string object

// console.log(name.toUpperCase())  Original name is unchanged ( new string object created , immutability maintained )

// console.log(name.charAt(2))

// console.log(name.indexOf('e'))

const newName = name.substring(0,4) // 0 to 3 i.e 0 is included and 4 is excluded

console.log(newName)

const anotherName=name.slice(0,4) // slice() can have negative values unlike substring() 

console.log(anotherName); // Same as substring()

const myName=name.slice(-6,3) // George has length = 7 (including space) . So 7+(-6) = 1. Thus it becomes substting(1,3)

console.log(myName) // returns index 1 and 2

const oldName=name.slice(-11,4) // 7+(-11) = -4. Negative is not valid , so it treated as 0

console.log(oldName) // index from 0 to 3

const currentName=name.substring(-5,2) // Substring() treats negative index as zero unlike slice ( difference btw the two )

console.log(currentName) // index 0 and 1

const pastName=name.substring(10,2) // start index > end index . So indices are swapped . It becomes substring(2,10)

console.log(pastName) // 10 does not exist. So it prints everyting frm index 2 to the end of string

const newString = "    rohan.   "

console.log(newString)

console.log(newString.trim()) // trim() shortens the whitespace charachter and /n (i.e new line characters)

const url ="https://aratrik.com/aratrik%20mukherjee"

console.log(url.replace("%20","-")) //%20 is replaced with -

console.log(url.includes('t')) // It includes 't'. So true is returned

const senetnce="I-am-fit-and-fine"

console.log(senetnce.split("-")) // Converts string into array based on thr separator provided. Takes 2 arguments- separator & limit

console.log(senetnce.split("-",2)) // New array created but with only 2 elements ( as 2 is the limit )




