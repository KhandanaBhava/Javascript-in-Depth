const course={
    name:"Physics",
    price:999,
    teacher:"aratrik"
}

//Object destructuring is done using curly braces {} . Whenever we see {} , we know it's destructuring

// Both dot and destructuring can be used to access properties of object

//Destructuring is done as it makes code cleaner for many properties as we do not need to use dot every time

const {name:N} = course // Now we can directly use N instead of course.name

console.log(N)

const {price} = course

console.log(price) // Now we can directly use price instead of course.price

// API's return value in the form of JSON ( Javascript Object Notation ) . JSON is just a format

// {
//     "name" : "ram" ,
//     "age" : 32
// } This is a JSON object returned as a response from an API ( Example )

// APIs often return a single JSON object or a single JSON array as a response

function myname(){
    console.log("J")
    console.log("O")
    console.log("H")
    console.log("N")
}

myname // This is reference to function . Doesnt print anything

myname() // This is function execute ( function call )

function add(num1,num2){  // num 1 and num 2 are parameters ( mentioned in function definition )
    console.log(num1+num2)
}

add() // NaN ( No argument given )

add(3,4) // 3 and 4 are arguments ( mentioned while calling function )

add(3,"4") // 34 converted to string

add(3,"a") // 3a - converted to string and concatenated

add(3,null) // 3

const result = add(5,6) // This will print 11 as function is executed

console.log(result) // This will give undefined as function does not return anything

function sum(num1,num2){
    return num1+num2
}

sum(2,3) // Function executed but not printed

console.log(sum(2,3)) // This will return 5