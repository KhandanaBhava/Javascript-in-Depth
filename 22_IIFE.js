// IIE - Immediately Invoked Function Expression

// Whenever we write a function , we want it to execute immediately . Below are examples when we want functions to execute immediately

// 1.Sometimes, we write a file which only has DB connection and we want whenever our application starts,immediately the DB connection
// is established in that file

//2.When we declare some variables globally and we don't want those variables to cause any problem in our function . Thus we do want
// the code inside our function to get polluted by global scope. So we make our own scope using IIFE

(function DB(){ // This is a NAMED IIFIE .... The name is DB
    console.log("DB connected") // This is syntax of IIFE where we wrap the function in brackets and then immediately invoke 
}) () ;                        // the function ( call the function ) using brackets

// VVVI: If we want to execute two IIFIE one after another we must put semi colon after the first IIFIE like we put above
//With the semi colon we need to end the context

(()=>{
    console.log("Hi")
}) () ; // Unnamed IIFIE (written with arrow function )

((name)=>{ // This IIFIE takes name as an argument
    console.log(`${name} , is a genius`)
}) ("Aratrik"); // Here we pass "Aratrik" as an argument like we do for normal functions

// With IIFIE we can make unnamed function by using arrow functions and by wrapping the function inside brackets