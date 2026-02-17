function one(){
    const username="aratrik"

    function two(){
        const website="google"
        console.log(username) // username can be accessed
    }
    //console.log(website) .... Can't access website as it is out of scope of 

    two() // When two () is called , it prints username i.e aratrik
}

one() // one does not print anything as it doesn't have a console.log ( even though it calls two() which has a console.log)

if(true){
    const name1="Aratrik"
    
    if(name1=="Aratrik")
    {
        const surname=" Mukherjee"
        console.log(name1+surname)
    }
    //console.log(surname) surname can't be accessed as it is out of scope
}
//console.log(name1) name1 can't be accessed as it is out of scope

// INTERESTING EXAMPLE //

console.log(addOne(5)) // This is allowed . In this case we can access addOne berofore declaration

function addOne(num){ // This is a normal function

    return num+1
}

// console.log(addTwo(5))  Not allowed . In this case we can't access addTwo berofore declaration as it is tored in a variable

const addTwo=function(num){ // Here we a variable is holding the value of a function . It is also called an expression
    return num+2
}

