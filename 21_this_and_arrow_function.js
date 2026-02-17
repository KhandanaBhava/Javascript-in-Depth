const user = {
    username : "Aratrik",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`) // this refers to current context. In this case, it only refers to user
        console.log(this) // References the current context i.e user
    }
}

user.welcomeMessage()

user.username="Rohit"

user.welcomeMessage()

console.log(this) // In Node when this is used globally inside objects , it refers to an empty object whereas in browser it refers to Window Object

// VVVI : In Browser global object is Window Object ( to which this refers ). It has events like click , form submit

function name(){
    const username="Tim"
    console.log(this) // this keyword here prints a large object(which is the global object)...For functions this behaves differently
    console.log(this.username) // undefined. In functions, we cannot access the variables inside, using this keyword, like in objects
}

name()

const sport=()=>{
    const name="Chess"
    console.log(this) // In arrow functions , this keyword refers to empty object unlike global object as in normal function
    console.log(this.name) // undefined ( same as normal functions )
}

sport()

// VVVI: Behavior of this keyword in Normal and Arrow Functions in Node environment only

// For normal functions, this keyword refers to a large global object (having setInterval,setTimeout etc)
// For arrow functions, this keyword refers to an empty object

const addOne =(num1,num2)=>{
    return num1+num2
}

console.log(addOne(2,3))

const addTwo = (num1,num2)=> num1+num2 // Implicit return. Whenever one line is there , we can omit the return and curly bracket

console.log(addTwo(4,5))

const addThree = (num1,num2)=> (num1+num2) // Implicit return but with normal brackets

//const addFour = (num1,num2) => {username:"aratrik"}  undefined as we can't return an object without using normal brackets

const addFour = (num1,num2) => ({username:"aratrik"}) // this is the right way to implicitly return an object 

// The above function takes 2 numbers as arguments but returns an object

console.log(addFour(1,2))