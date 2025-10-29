const marvel_heroes =["thor","hulk","ironman"]

const dc_heroes = ["batman","superman"]

console.log(marvel_heroes.push(dc_heroes)) // push always returns the length of the array and not an array.

// Here 4 is printed as the entire dc_heroes is treated as a single element( nested array)

console.log(marvel_heroes) // This returns the appeneded array with length 4

console.log(marvel_heroes[3][1]) // Superman. This is how to access array inside array

const hindi_names=["ram","sham","madhu"]

const eng_names =["John","Paul"]

const names=hindi_names.concat(eng_names) // Concat returns a new array & does not push in the existing array. So we always have to store
// the reylt of concat in a variable and then print the variable

console.log(names)

const all_names =[...eng_names,...hindi_names] // Spread operator

console.log(all_names)

const numbers =[1,2,3,[4,5,6],7,[8,[9,10]]] // Array inside array

const result = numbers.flat(1) // Takes depth as an argument . This will remove single nested

const result1 = numbers.flat(2) // This will remove double nested

const result2= numbers.flat(Infinity) // This flattens everything and gives all elements in the array. 'I' capital in infinity

console.log(result)

console.log(result1)

console.log(result2)

console.log(Array.isArray("Hitesh")) // False

console.log(Array.from("Hitesh")) // Converts into array

// Unique Case for interviews

console.log(Array.from({name : "hitesh" })) // Returns empty array . For objects we need to specify either values or keys

console.log(Array.from(Object.values({ name: "hitesh" })))

console.log(Array.from(Object.keys({ name: "hitesh" })))

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1,score2,score3)) // To make an array from a set of variables. from works for only 1 variable at a time

// Rest Operator ( Interview rest vs spread )

let nums1 = [1,2,3]

let nums2 = [4,5,6]

let nums3 = [7,8,9]

function sum(...nums) // Rest operator --> enables it to take all the arrays as an input and return a single array as a result
{
    return nums
}

console.log(sum(nums1,nums2,nums3))

function add(nums)

{
    return nums
}

console.log(add(nums1,nums2,nums3)) // This will return [1,2,3] . It will only take nums1 as input as rest operator is not used


