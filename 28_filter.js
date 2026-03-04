const coding=["java","python","cpp"]

const value=coding.forEach((item)=>{  
    console.log(item)
    return item  // For reach doesn't return any value. For returning values only(not printing), we use filter
})

console.log(value)

const nums=[1,2,3,4,5]

const result=nums.filter((item)=>item>2) // No return keyword needed as no scope(curly bracket) has been started

console.log(result)

const solution=nums.filter((item)=>{
     item>2; // This returns an empty array as there is no return , even though a scope has been started
})
console.log(solution)

const ans=nums.filter((item)=>{
    return item>2; // This returns the numbers greater than 2. Whenever we use a scope we need to explicitly mention return
})

console.log(ans)

// Same example using for each

const newNums=[] // We declare a new array and then use for each to push every element in the new array

nums.forEach((item)=>{
    if(item>2){
        newNums.push(item)
    }
})

console.log(newNums)

// Real Life example of filter where we get these values from database and user wants to filter values according to his choice

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // For books having genre History

let userBooks=books.filter((item)=>item.genre==='History')

console.log(userBooks)

  // For history books published after 1995
  
userBooks = books.filter( (item) => item.publish > 1995 && item.genre === "History") // userBooks value has been overriden

console.log(userBooks)

