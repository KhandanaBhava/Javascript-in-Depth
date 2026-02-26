//while loop

let i=2 // in while loop , variable can't be declared inside bracket like in for loop, and have to declared outside
while(i<=10)
{
    console.log(`Value of i is ${i}`)
    i=i+2
}

let arr =['cricket','football','hockey']

let j=0
while(j<arr.length){
    console.log(`The game is ${arr[j]}`)
    j++
}


// Do while loop

let score=1
do{
    console.log(`${score}`)
    score++
} while(score<5)

// Do while loop is always executed once , as the condition is checked only after 1 execution

let num = 11
do{
    console.log(`${num}`)
    score++
} while(num<5) // even though num is greater than 5 (11) but still gets printed once and then condition is false and hence exits loop