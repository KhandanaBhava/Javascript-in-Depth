//Map vs Filter: 

// Map() method: 1) It is used for transforming each element in an array
//               2) The callback function should return the new value for each element

//Filter Method: 1) It is used for selecting a subset of elements based on a condition
//               2) The callback function should return a boolean value (true to keep the element, false to remove it)

//Both methods are higher-order functions that create a new array without modifying the original array. 

const nums=[1,2,3,4,5]

const result=nums.map((item)=>item*10)

console.log(result)

const ans=nums.map((item)=>{
    item+5 // This returns undefined whereas without return in a scope filter returns an empty array
})

console.log(ans) 

// Same Example using for each

const arr=[]

nums.forEach((item)=>{
    arr.push(item*10)
})

console.log(arr)

// Chaining of methods

const newNums=nums.map((item)=>{
return item+5 // [6,7,8,9,10]
}).map((item)=>{
    return item*10 //[60,70,80,90,100]
}).filter((item)=>item>80) // [90,100]

console.log(newNums)
