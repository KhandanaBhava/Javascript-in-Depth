// forEach() is a built-in array method in JavaScript that executes a provided callback function once for each element in an array
// It is used for iterating over arrays and does not return a new array. forEach() is a higher order function

const languages=["java","python","cpp"]

languages.forEach(function (item){  // Call back functions have no name
console.log(item)
})

languages.forEach((item)=>{  // Call back using arrow functions
console.log(`Languages are ${item}`)
})

function print(item){
    console.log(item)
}

print(3)

languages.forEach(print) // We can also pass the reference of a function directly in callback
// Here we are not calling print() inside callback but are passing it as a reference and everything inside the function is executed

languages.forEach((item,index,array)=>{
    console.log(item,index,array) // For each can accept the element,index and the entire array as parameter
})

const students=[ // array of objects
    {
        name:"ram", // name is property and ram is value
        roll:1
    },
    {
        name:"shyam",
        roll:2
    },
    {
        name:"madhu",
        roll:3
    }
]

students.forEach((item)=>{ // using for each to access values of each property of each object present in an array
    console.log(item.name)
    console.log(item.roll)
})