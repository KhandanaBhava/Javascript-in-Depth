//Arrays are resizable ( size can be increased and decreased ) and they are objects

const myArr=[0,1,2,3,4,5,true,'hitesh'] //Array can have different data types

console.log(myArr[2]) // Arrays have 0 based indexing and that is how they are accessed

const newArr = new Array(1,2,3,4) // Array as an object using new keyword. No suare brackets

//Arrays also have prototype access 

console.log(newArr[0])

newArr.push(5) // Adds element at last of array

// console.log(newArr)

console.log(newArr.length) // Length property of array

newArr.pop() //Removes last element of array

// console.log(newArr)

newArr.unshift(9) // 9 added at the start

console.log(newArr)

myArr.shift() // First element removed

console.log(myArr)

// console.log(myArr.includes(9))  Returns boolean ( whether present or not in array ). False in this case

// console.log(myArr.indexOf(10))  -1 as 10 does not exist

const arr1=newArr.join()

console.log(newArr)

console.log(arr1) // Returns string where elements are comma separated

console.log(typeof arr1)

 // SLICE VS SPLICE ( IMPORTANT )

 console.log(newArr)

 const sliceArr= newArr.slice(1,3) // From 1 (included) to 3 (excluded) 

 console.log(sliceArr)

 console.log(newArr) // Original array remains same after slicing

 const spliceArr=newArr.splice(1,3) // From 1 to 3 ( both inclusive )

 console.log(spliceArr)

 console.log(newArr) // The spliced elements are removed from the array after splicing

 //Slice - first argument inclusive , second exclusive . Original array remains same

 //Splice - both first & second argumnet inclusive . The spliced elements are removed from the array . Thus Original array is changed