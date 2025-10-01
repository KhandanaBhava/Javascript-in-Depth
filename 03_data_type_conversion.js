//CONVERSION TO NUMBER

let score ="33"

//console.log(typeof(score))  Sometimes the data comes from frontend in backend so we do not know type

//let number_value=Number(score)  Number always starts with capital 'N'

//console.log(typeof(number_value))

let age="33abc"

let val_in_num = Number(age)

console.log(typeof(val_in_num)) //It's type is Number although it has not been converted to a number

console.log(val_in_num) // It's value is NaN(Not a number)

// hitesh(string which can't be converted to number) => Value: NaN Type:Number
// null => Value:0 Type:Number
//undefined => Value:NaN Type:Number
// true = > Value:1 Type:Number
//false = > Value:0 Type:Number


//CONVERSION TO BOOLEAN ( 1 -> true, 0 -> false )

let num=1

let bool_val=Boolean(num)

console.log(bool_val) // True

console.log(typeof(bool_val)) // boolean.

let name1=""

let bool_name=Boolean(name1)

console.log(bool_name) // False. True if string is non empty

console.log(typeof(bool_name)) // Boolean , both when string is empty and non empty


//CONVERSION TO STRING

let int = 34

let string_int=String(int)

console.log(string_int) // 34 (in string)

console.log(typeof(string_int)) //string



