// for loops

for(let i=0;i<6;i++){ // If i++ or i-- is not used and we write only i , then it becomes an ifinite loop as i value never changed 
    
    if(i==5){
        console.log("5 is best number")
    }

    console.log(i)
}

// Printing Tables from 1 to 3 using nested for loops

for(let i=1;i<=3;i++){
    console.log(`The Table of ${i} is`)
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

// For loops on arrays

let arr=["Rohit","Virat","Dhoni"] 

for(let i=0;i<=arr.length;i++){ // Array has zero based inedxing so it should be < and not <=arr.length
    console.log(arr[i])         // In js there is not index out of bound error but it will print undefined
}

// Break 

for(let i=1;i<=3;i++){
    if(i==3){
        console.log("Value of i is 3")
        break; // break means  control goes out of loop . Once 3 is detected , control goes out of loop and next line is never executed
    }
    console.log(i)
}

// Continue

for(let i=1;i<=4;i++){
    if(i==3){
        console.log("Value of i is 3")
        continue; // continue meanns one execution is skipped and the rest of the loop runs as it is. So 3 is not printed but 4 is
    }
    console.log(`${i} is printed`)
}