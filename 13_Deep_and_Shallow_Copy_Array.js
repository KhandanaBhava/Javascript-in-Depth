//SHALLOW COPY

//A shallow copy creates a new array, but the elements inside (especially if they are objects or other arrays) 
// still reference the same memory as the original(i.e they are shared).

// By default copies are shallow in js

const arr1 = [[1, 2], [3, 4]]

const arr2 = arr1.slice() // slice without any argument, copies entire array into a new one (i.e creates a new array object)

const arr3=arr1 // This does not create a new array ( hence no copy is done at all ).Instead arr3 & arr1 now point to the same memory.
//Thus to create a copy we use slice

// When we use slice , outer array is new , but the inner array/objects are still shared

console.log(arr3===arr1) // True as they point to same reference

console.log(arr1===arr2) // False as in js ,even though contetns of both arrays are same they point to different memory locations

//arr1 ──► [1, 2, 3]   (stored in memory location A)
//arr2 ──► [1, 2, 3]   (stored in memory location B)

console.log(arr2==arr1) //False  VVVI : For arrays & objects ( reference data types) == & === behave the same way as
//they check whether the two variables refer to the exact same object in memory.

console.log(arr1) // [[1, 2], [3, 4]]

console.log(arr2) // [[1, 2], [3, 4]]

arr2[0][0] = 99

console.log(arr1); // [[99, 2], [3, 4]] 

// In shallow copy , if we change arr2 , arr1 is also changed

//DEEP COPY

// An independent new clone is created and even nested objects and arrays are not shared unlike shallow copy

//1) structuredClone()----> Recommended Way

const prev_arr = [[1, 2], [3, 4]];
const curr_arr = structuredClone(arr1);

curr_arr[0][0] = 99;

console.log(prev_arr); // [[1, 2], [3, 4]] prev_arr is unchanged as it is deep copy
console.log(curr_arr); // [[99, 2], [3, 4]] 

//2) Using JSON ---> JSON cloning only works for simple data (no functions, undefined, Dates, etc.). Thus not recommended 

const arr4 = [[1, 2], [3, 4]];
const arr5 = JSON.parse(JSON.stringify(arr1));

arr5[0][0] = 99;

console.log(arr4); // [[1, 2], [3, 4]] arr5 is unchanged as it is deep copy
console.log(arr5); // [[99, 2], [3, 4]] 

