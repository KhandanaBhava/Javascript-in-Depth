function JustLoggedInUser(username){
    return `${username} has just logged in`
}

JustLoggedInUser("Aratrik") // Wont print anything

console.log(JustLoggedInUser("Aratrik"))

console.log(JustLoggedInUser("")) // empty string is the username

console.log(JustLoggedInUser()) // undefined has just logged in . When we do not pass anything undefined is taken as username

function myname(name){
    if(name===undefined) // This if condition can also be written as if(!name) which is same as if(name===undefined)
    {
        console.log("Enter username")
        return
    }
    return `My name is ${name}`
}

console.log(myname()) // First prints Enter username and then it will print undefined as it returns undefined

console.log(myname("")) // My name is

function user(name="Sam"){
    console.log(`User's name is ${name}`)
}

user() // By default name will always be Sam. Even if we do not pass any argument, value will be Sam and not undefined

user("Aratrik") // If we pass a value , then name will have that value and Sam will be overriden

function price(...num){ // Rest operator . Allows us to enter as many arguments while calling the function
    console.log(num)
}

price(200,400,600,800) // Returns an array

function add(val1,val2,...num){
    console.log(num)

    return val1,val2
}

add(3,4,5,6,7,8) //This will print [5,6,7,8] as val 1 =3 , val 2 = 4

const result=add(10,20,30,40)

console.log(result) // This will return 20 as return a,b always returns b ( the latter value )

// Thus we never return two comma separated values as only the last one is returned

const student1={
    name:"aratrik",
    roll_no:22
}

function studentDetails(object){
    console.log(`Name is ${object.name} and roll is ${object.roll}`) // The dot here is used to refer to the object that is being passed
    // object.name makes it dynamic as whatever object is passed as an argument its name will be printed
}

studentDetails(student1) // roll will be undefined as roll_no exists in the object but not roll

studentDetails({
    name:"jack",
    roll:24
}) // Here we are passing object directly as an argument instead of first creting it

const NewArray=[100,200,300,400]

function SecondElement(Arr){
    return Arr[1] // 0 based indexing so 2nd value is 1st array element
}

console.log(SecondElement(NewArray))

console.log(SecondElement([1,2,3,4])) // Here we are passing array directly as an argument instead of first creting it


