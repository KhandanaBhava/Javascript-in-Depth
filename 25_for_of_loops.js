// for of loops - Can be used on strings,arrays,maps and not on objects

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const greeting="Hello"
for (const greet of greeting){
console.log(`Each char is ${greet}`)
}

//Maps - Objects that hold key value pair, have unique keys,values associated with those keys can be same
// Maps store data according to the order mentioned

const map = new Map()

map.set("IND","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("UK","UNITED KINGDOM")
map.set("IND","INDIA") // India is inserted only once 

console.log(map)

for (const element of map) {
    console.log(element) // This prints the entire map but in the form of separate arrays
}

for (const [key,value] of map) { // This is how we can access the keys and values separately using for of loop
    console.log(key,'- ',value) 
}

const myObj={
    hero1 : "batman",
    hero2: "superman"
}

//VVVI Object are not iterable by default in javascript

// for (const [key,value] of myObj) { This gives error as for of loops can't be used on objects
//     console.log(key,value)    For objects , we use for in loops
// }

