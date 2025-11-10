const obj1 ={1:"a",2:"b"} // Key value pairs

const obj2={3:"c",4:"d"} 

const obj3={obj1,obj2}

console.log(obj3) // Gives a new object with obj1 and obj2 inside it as objects

const obj4=Object.assign({},obj1,obj2) //Object.assign returns an object so it must be stored.{} is the target and all others are source

console.log(obj4) // Object returned with all keys and values of obj1 & obj2

// Spread operator is used to combine objects insted of Object.assign

const obj5={...obj1,...obj2}

console.log(obj5)

// Below is the case when data comes from database in form of array of objects

const users=[
    {
        id:22,
        email:"google.com"
    },

    {
        age:30
    },

    {
        isEmployed: false
    }
]

console.log(users[1].isEmployed) // undefined as isEmployed is present in 2nd object(0 based indexing )not in first

console.log(users[1].id) // Undefined as id is present in 0th object

console.log(users[0].id)

const hero={name:"Hulk",comic:"Marvel"}

console.log(Object.keys(hero)) // To access all keys of hero object. Useful while working with database. Returns an array

console.log(Object.values(hero)) // Returns an array

console.log(Object.entries(hero)) // Returns an array and within the array gives each key-value pair as a separate array

console.log(hero.hasOwnProperty("comic")) // Shows whether an object has a property or not