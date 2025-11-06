//Objects ( key & values) can be created as constructor and literals

// VVVI : When thery are created as literals , singleton (design pattern) is not created . 
// Singleton is created when object is created as a constructor

//Object constructor --> Object.create()

//Object literals --> obj user={}

const mySym= Symbol("key1") // Interview - Add symbol as a key in object

const newSym = Symbol("key2")

const User = {
    name: "Aratrik", // By default it is treated as "name" : "Aratrik" name is treated as string
    "full name": "Aratrik Mukherjee",
    [mySym]: "mykey1", // This is how symbol is used as a key
    newSym: "mykey2" , // Symbol not used as a key
    age: 18,
    location: "Kolkata",
    email: "aratrik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(User.email) // Most common way to access object member but not recommended

console.log(User["full name"]) // This is how full name can be accessed since it has been declared as a string

// VVVI : We can't access full name as User.full name . So it is recommended to access object members with [""]

console.log(User[newSym]) // undefined as it is being treated as a string . So in ["newSym"]

console.log(User.newSym) // No error as newSym is treated as a string

console.log(typeof(User[newSym])) //This will give string as we are accessing value inside newSym which is "mykey1" (string)

console.log(User.mySym) // Undefined as we cant access symbol with dot

console.log(User[mySym]) 

console.log(typeof(User[mySym])) // This will give string as we are accessing value inside mySym which is "mykey1" (string)

console.log(typeof newSym) // newSym is a symbol

console.log(typeof mySym) // mySym is a symbol

console.log(User) // newSym treated as a string & mySym treated as a symbol

User.name="Ram"

console.log(User.name)

Object.freeze(User) // This freezes the object . After this no changes can be made to the object

User.name="John"

User.email="john@gmail.com"

console.log(User.name)

console.log(User.email)












