//Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970

// Date is a global object in js like String, Number, Math . In future Temporal API , will make date handling easy

const newDate= new Date()

console.log(newDate) // Not readable format

console.log(newDate.getMonth()) // 9 as here month starts from zero

console.log(newDate.getDay()) // 1 as it is a Monday

console.log(newDate.toDateString())

console.log(newDate.toLocaleString("default",{
    weekday : "long", //Monday
    timeZoneName : "long" // India Standard Time . if short then IST
})) //LocaleString also returns a string but in this method we can define an object

console.log(newDate.toJSON()) // toJSON() method of a Date instance returns a string representation of the date in ISO format, 
// specifically UTC time. This method is automatically called by JSON.stringify() when a Date object is being serialized
// into a JSON string.

console.log(newDate.toISOString()) // convert a Date object to an ISO 8601 formatted string using the built-in toISOString() method

let myDate = new Date(2023,0,23) // Month starts from 0

console.log(myDate.toDateString()) 

let oldDate=new Date(2023,0,23,5,23)

console.log(oldDate.toLocaleString()) // Locale string converts to the date format in the system

let indianDate= new Date ( "10-27-2023") 

console.log(indianDate.toLocaleString())

let foreignDate=new Date ("2023-01-27") // when month is in 2 digits it is 01 & not 00 , while it starts from 0 when in 1 digit

console.log(foreignDate.toLocaleString()) 

let sysdate=new Date ("27-10-2023")

//console.log(sysdate.toLocaleString()) -->  Invalid Date . This date format is not allowed

//TIMESTAMP

let myTimestamp = Date.now()

console.log(myTimestamp) // Gives timestamp in millisecond

console.log(Math.floor(myTimestamp/1000)) // time in seconds . floor done to avoid seconds

console.log(indianDate.getTime()) // We can also get time like this to compare time 

