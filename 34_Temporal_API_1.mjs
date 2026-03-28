//Temporal API is used for working easily with dates

//1. Math is defined in the core ECMAScript spec and is implemented natively in every JS engine (like V8, SpiderMonkey, etc.).
// So you can just do: Math.random() . No install, no import.

// 2. Temporal is not fully built into all environments yet

// Temporal is a newer API designed to fix problems with Date. While it’s part of the evolving ECMAScript proposal
//  (specifically the Temporal API), most JavaScript runtimes haven’t shipped it natively yet.

// In modern or experimental environments, you might get a global Temporal Object ( like Math )
// In most real-world setups today → you don’t

//When you install it ,You’re getting a polyfill — basically a JavaScript implementation of the Temporal API.

//Then you import it:

import { Temporal } from "@js-temporal/polyfill";

const now = Temporal.Now.plainDateTimeISO() // Temporal.Now gives the current date & time

// For using Temporal.PlainDate() and ither methods of Temporal not (Temporal.Now) , new keyword is used

// Temporal.Now gives us many methods that allows us to get the object of the rquired type for the cuurent time

console.log(now.toString())

const current = Temporal.Now.zonedDateTimeISO() 

console.log(current.toString())

const date1 = Temporal.ZonedDateTime.from({ 
  year: 2021, 
  month: 1, 
  day: 6, 
  timeZone: Temporal.Now.timeZoneId() 
}); 
console.log(date1.toString());

const date2 = Temporal.PlainDateTime.from({ 
  year: 2020, 
  month: 10, 
  day: 3,
  hour: 14,    
  minute: 30, 
  second: 0 ,
});

console.log(date2.toString())

const date3=Temporal.Now.instant() // instant() gives date is in UTC format

console.log(date3.toString()) 

// With temporal a new date object is returned instead of modifying the old object

// HELPER METHODS

const currDate=Temporal.Now.plainDateISO()

const futureDate=currDate.subtract({days:2,months:2,years:1}).add({years:2}) // This also gives time in fraction of seconds

console.log(currDate.toString())

console.log(futureDate.toString())

const now1 = Temporal.Now.plainDateISO()

const now2 = Temporal.Now.plainDateISO()

console.log(now1 === now2) // This is false as now1 and now2 are two different references

console.log(now1.equals(now2)) // This is true

const now3 = new Temporal.PlainDate(2022,1,3) // PlainDate has to be invoked with 'new' keyword

const now4 = new Temporal.PlainDate(2023,1,3)

console.log(now4.since(now3).toString()) // how many days it has been for now4 since now3 (i.e 1 year = 365 days)

console.log(now4.since(now3)) // Without the .toString , it returns a Duration data type

console.log(now3.since(now4).toString()) // This gives -365 days

console.log(now4.until(now3).toString()) // This also gives -365 days ( opposite of since )

console.log(now1.toString())

console.log(now1.with({year:2025,month:8}).toString()) // Only changes the year and month of now1 keeping the date same







