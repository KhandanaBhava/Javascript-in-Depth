const User = {
    name: "Aratrik",
    age: 18,
    location: "Kolkata",
}

User.greeting = function() {
    console.log("Hello User")
}

console.log(User.greeting) // Function is not called. This returns [Function(anonymous)] . It returns reference to function

//In the above case, User.greeting is a function object

console.log(User.greeting()) // Function is called and prints Hello User

//After execution , the function returns nothing(undefined) which is stored in User.greeting and hence undefined is printed

User.greeting_Two = function() {
    console.log(`Hello User ${this.name}`) // this is used to access property of that object
}

console.log(User.greeting_Two()) // In this case also undefined will be printed

//const instaUser=new Object() singleton object

const instaUser={}

console.log(instaUser) // Prints empty object

instaUser.id="123abc"

instaUser.name="Aratrik"

console.log(instaUser) // Prints the object

const student={        // Nesting of objects
    roll : 20,
    username : {
        email:"aratrik@yahoo.com",
        name : {
            firstname:"Aratrik",
            lastname:"Mukherjee"
        }
    }
}

console.log(student.username.lastname) // undefined . lastname is property of name not username

console.log(student.username.name.lastname)





