import { Temporal } from "@js-temporal/polyfill";

const now=Temporal.Now.plainDateTimeISO()

console.log(now.toString())

console.log(now.round("hour").toString()) // rounded to hour

console.log(now.round({smallestUnit:"hour", roundingMode:"ceil"}).toString()) // ceil rounds to upper value

console.log(now.round({smallestUnit:"hour", roundingIncrement:6, roundingMode:"floor"}).toString()) // floor rounds to lower value ,
// rounding increment 6 means 6 , 12 , 18 , 24 ---- So this rounds to 12 as floor is used with rounding increment of 6

// Sorting of Dates Example

const today=Temporal.Now.plainDateISO()

const yesterday = today.subtract({days:1})

const tomorrow = today.add({days:1})

const days= [yesterday,today,tomorrow]

const sortedDays = days.sort(Temporal.PlainDate.compare)

console.log(sortedDays.map(d=>d.toString())) // For converting each date to a string we use a map

// Duration Type

const duration = Temporal.Duration.from({days:3})

console.log(duration.toString()) // This gives 3 days.

// With duraton we can add , subtract , round in the same way we did before

const current =  Temporal.Now.plainDateISO()

console.log(current.add(duration).toString()) // adding duration i.e 3 days

// Additional duration methods

console.log(duration.negated().toString()) // Negative value

console.log(duration.negated().abs().toString()) // Absolute value

console.log(duration.total("minutes")) // 24*60*3 minutes in 3 days

const duration1 = Temporal.Duration.from({days : 3, months : 4})

//console.log(duration1.total("minutes")) This will give error as a starting point is required from where counting will start

const duration2 = Temporal.Duration.from({days : 1 , months : 1})

console.log(duration2.toString())

console.log(duration2.total({unit : "minutes" , relativeTo : "2026-03-28"})) 

// The above line prints 46080 beacuse the starting point is 28-0302026 

//Add 1 month → 2026-04-28

//Add 1 day → 2026-04-29 ( as in duration from days:1 , month : 1)

//Now calculate the difference:

//From March 28 → April 29

//That’s 32 days (since March → April has 31 days)

//Then:

//32 days × 24 hours × 60 minutes = 46,080 minutes







