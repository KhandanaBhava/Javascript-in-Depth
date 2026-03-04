// Reduce always takes accumulator(initally the staring value) and current value as callback

const nums=[1,2,3,4,5]

const ans=nums.reduce((acc,item)=>{
    console.log(`Accumulator is ${acc} and Current Value is ${item}`)
    return acc+item
},0) // Here starting value is zero and then addition occurs. Accumulator keeps updating after each iteration and becomes acc+item

console.log(ans)

// Same example using Arrow Function

const result=nums.reduce((acc,item)=>acc+item,0) // Here 0 is the accumulator 

console.log(result) // This will print 15 i.e sum of all array elements

// Shopping Cart Example . Calculating total price to be paid for all the items ( object )

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "mobile dev course",
        price: 3000
    },
    {
        itemName: "data science course",
        price: 4000
    },
]

const totalToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0) 
// Here item is each object and hence we acces price of each object using item.price

console.log(totalToPay)