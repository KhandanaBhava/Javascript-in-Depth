// for in loops - used mainly for objects . Can also be used for others

const obj={
    js : "Javascript",
    py : "Python",
    cpp : "C++"
}

for (const key in obj) {
  console.log(key) // This only prints the keys not the values
}

for (const key in obj) {
  console.log(`For ${obj[key]} file name is ${key}`) // This is how we can extract key and value of objects using for in loop
}

const arr=[11,21,31,41,51]
for (const num in arr) {  // This only gives the indices of the array and not the values, as the keys in an array are the indices
    console.log(num)
}

const arr1=[10,20,30,40,50]
for (const num in arr1) {  // This prints the values
    console.log(arr1[num])
}

// As maps are not iterable by default, both for in and for of loops can't be used to iterate over them

