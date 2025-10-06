// In js no need to allocate and free memory manually ( garbage collection )

//Two tyypes of Memory - Stack( Primitive data types ) and Heap ( Non primitive data types)

// Stack - We get a copy , no change in original

// Heap - We get reference of original value , change in original

let name ="Aratrik"

let anotherName = name

console.log(anotherName);

anotherName="Babi" // A copy of name is stored in another name which gets changed. So name remains the same

console.log(name)

console.log(anotherName)

let studentOne={
    name:"Arartrik",
    roll:23
}
let studentTwo = studentOne

studentTwo.roll=25

console.log(studentOne.roll)

console.log(studentTwo.roll) // Both point to same reference in heap memory, change in original value

// STRING IMMUTABILITY - Once a string object is created in memory , it can't be changed. Any change to a string creates a new string
//object in memory , while the previous remains unchanged

let str="Rohan" // String object "Rohan" created. str points to it

str="Ram" // New string object "Ram" created. str now points to it

// Since no variable points to "Rohan" it's memory will be freed later ( garbage collection )

// Variables store pointers to objects, not the actual objects

console.log(str) 

str[0]='J'

console.log(str) // No change as existing string object can't be changed


