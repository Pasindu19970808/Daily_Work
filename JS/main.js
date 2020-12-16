//var, let, const
//var is globally scoped
//let allows your to reassign values
//const only allows you to assign a value once
//and never reassign it again
//All ways use const unless you know you will
//reassign
//for arrays you can use const and change items
//in the array but not reassign the entire thing

//Datatypes: String. Numbers, Boolean, null, undefined
const name = 'Pasindu';
const age = 23;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined; //this is undefined now//still cannot be defined later
let z; //also undefined

//console.log(typeof x)

//Template string/template literals

//console.log(`My name is ${name} and I am ${age}`);

//console.log(name.substring(2,5))
//console.log(name.length)
//console.log(name.split(''))
//console.log(name.split('')[4])

//Arrays - variables that hold multiple values
//making a new array
const numbers = new Array(1,2,3,4,5);
const letters = ['A','B','C','D'];
//JS also allows to have multiple datatypes in the array like in python

const listoflists = [['A','B'],['C','D']]
//arrays are mutable
letters[3] = 'AA'
//Append a value to the end of the array
letters.push('BB')
//Append to the beginning of the array
letters.unshift(0)
console.log(listoflists[0][1])
console.log(letters)
//getting the index of the values
console.log(letters.indexOf('B'))

//Object literals (These are key value pairs)
//these are like objects with attributes
const person = {
    firstName: 'John',
    lastName : 'Doe',
    age: 30,
    //can put arrays in too
    hobbies:['A','B','C'],
    //can also put in object inside an object
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'

    }
}
console.log(person["address"])
//We can also access using dot syntax
console.log(person.age)

//we can pull out information of the Object Literal and assign it to 
//other variables
const {firstName,lastName,address:{city}} = person;
//we can also add new properties to the object
person.email = 'abc@gmail.com'

//arrays of objects
//each item is an object
const todos = [
    {
        id:1,
        text:'ABC',   
    },
    {
        id:2,
        text:'DEF',   
    },
    {
        id:3,
        text:'GHI',   
    }
]
console.log(typeof letters)
console.log(todos[0])


//JSON format is very similar to an object in JS but the keys have double 
//quotes and all strings are in double quotes

//CONVERTING THE JS OBJECT TO JSON FORMAT
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//LOOPS
for(let i = 0;i<todos.length;i++)
{
    console.log(todos[i])


}

todos.forEach(element => {
   console.log(element.text)
});