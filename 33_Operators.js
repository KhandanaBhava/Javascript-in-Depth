//1) AND Operator - &&

const isLoggedIn = true

const hasBalance = true

if(isLoggedIn && hasBalance) console.log("Allow to purchase") // prints

if(isLoggedIn && hasBalance && 2==3) console.log("Hi") // doesn't print 

//2) OR Opearor - || (pipe)

if(isLoggedIn || hasBalance) console.log("Can purchase") // prints

if(isLoggedIn || !hasBalance || 2==3) console.log("Good Night") // prints. ! operator makes hasBalance value false

if(!isLoggedIn || !hasBalance || 2==3) console.log("Good Morning") // doesn't print

//3) Nullish Coalescing Operator - ?? (used for null and undefined)

let val= 5 ?? 10

console.log(val) // If first value is not null or undefined , assigns the first value

let val1= null ?? undefined

console.log(val1) // assigns undefined as it is later

let num= undefined ?? null // assigns null as it is later

console.log(num)

let val2= null ?? 3

console.log(val2)

let val3 = undefined ?? 10

console.log(val3)

let val4 = null ?? 30 ?? 20

console.log(val4) // Assigns the first non null or non undefined value that it gets

//4)Ternary Operator - ? and : (shorthand syntax for if-else )

let balance = 80

balance>=100 ? console.log("Greater than 100") : console.log("Less than 100")

// The above statement means if balance is greater than 100 print "Greater than 100" else print "Less than 100"


