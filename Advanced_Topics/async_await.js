// Creating a promise 

const promiseOne = new Promise(function(resolve,reject){ 
    setTimeout(function(){
        let error = false // if true then "Error detected" will be printed
        if(!error){
            resolve({username:"aratrik", password:"123"}) //.then will be triggered
        }
        else{
            reject("Error detected") //.catch will be triggered
        }
    },1000)
})

// async await doesn't handle catch ..... so explicit catch needs to be added

// All the functions that return a promise need to be awaited or .then needs to be used

// Consuming the created promise

async function consumePromiseOne(){

    try{
        const response = await promiseOne // Syntax
        console.log(response)
    }

    catch(error){
        console.log(error)
    }

} // without the catch block , if error was true , then it would throw exception as reject would not find catch
// No such problem with resolve as it would work even if it did not get try

consumePromiseOne() // the function needs to be called

// Only consuming a promise using async await

async function consume(){
    try{
        const response = await fetch("https://api.github.com/users/hiteshchoudhary") // fetch returns a promise, so it is awaited

        //fetch() returns a Response object containing an unread readable stream, not a plain JavaScript string.
        //response.json() parses that stream into a JavaScript object

       // const result = response.json() 
       // this will not work because reading the response stream to completion is an asynchronous process that returns a Promise
       // hence it needs to be awaited

       //If you do not await a Promise, JavaScript returns the Promise object itself in a pending state, 
       // rather than the data inside it

       const data = await response.json() 

       console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

consume()

console.log("Consumtion using .then")

// Consuming the promise usig .then

fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(object){
    return object.json() // Needs to be converted to json
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

//VVVI : Because all 3 tasks here are asynchronous and run in parallel , their completion order is nondeterministic
// It depends entirely on how fast each asynchronous operation finishes, not the order you called them in your code.