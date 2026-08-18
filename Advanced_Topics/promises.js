//Promise means loaded in queue and it will eventually be resolved (completed) or rejected (not completed)

// promise is an object

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.

//fulfilled: meaning that the operation was completed successfully.

//rejected: meaning that the operation failed.

//earlier there was no native support for promises so libraries like bluebird wa used but now we can use native nodejs promises

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task like DB calls, crypto calls, network calls
    setTimeout(function(){

        console.log("Task1 executed")

        resolve() // resolve needs to be called for the promise to get connected to .then

    },1000)
})

// .then is connected to resolve only

promiseOne.then(function(){
    console.log("Promise1 is consumed")
})

// Alternate way of writing the above thing ( without storing in variable )

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task 2 executed")
        resolve()
    },100)
}).then(function(){
    console.log("Promoise2 is consumed")
})

//In this case Task 2 executed prints first because its setTimeout delay is 100ms, whereas promiseOne's delay is 1000ms (1 second).

// If both were 1000 ms then Task1 executed would print first

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai", email : "kk@email.com"})
    },1000)
}).then(function(user){ // whateverwe pass in resolve, we can access it in .then
    console.log(user) 
})

const promiseFour = new Promise(function(resolve,reject){
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

//Chaining of .then....whatever is returned by the first .then , is available and accesible only in the second .then

promiseFour.then(function(user){
    return user.username
}).then(function(username){ // Chaining example
    console.log(username)
}).catch(function(error){ //.catch is for resolve and similarly .catch is for reject
    console.log(error)
}).finally(function(){
    console.log("Promise rejected or resolved")  // finally is always executed
})


