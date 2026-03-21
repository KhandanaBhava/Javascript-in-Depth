if(2!="2")
{
    console.log("Hi") // This will not print as 2!="2" is False as there is no strict check. So it thinks that 2 is equal to "2"
}

if(2!=="2")
{
    console.log("Hello") // Strict check . So it is false and hence it will print
}

let balance = 1000

if(balance<500) console.log("Less than 500")

else if(balance<750) console.log("Less than 750")

else if(balance<1000) console.log("Less than 1000")

else console.log(`Balance is ${balance}`) 

const month = 2

switch(month) {  // Here month is the key
    case 1:
        console.log("January")
    case 2:
        console.log("February") // By default if no break is provided then once the case matches, all other subsequent cases are printed
    case 3:                     // So February , March and Default Case will be printed but not January as it is before case match
        console.log("March")    // To avoid this we use break. If we put a break after case 3, then February and March will be printed
    default:                    // Whenever a break is found , nothing is printed after it
        console.log("Default Case ")
}

// Switch Case using break and string as key

const day="Wed"

switch(day){
    case "Mon" :
        console.log("Monday")
        break
    case "Tue" :
        console.log("Tuesday")
        break
    case "Wed" :
        console.log("Wednesday")
        break
    default:
        console.log("Get out")
}

