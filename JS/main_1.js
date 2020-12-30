//OOP

function Person(firstName, lastName, dob)
{

    this.firstName - firstName;
    this.lastName = lastName;
    //we make it into a date object
    this.dob = new Date(dob);
    //setting functions of the object
  


 
}

Person.prototype.getyear = function()
{
    return this.dob.getFullYear()
}


//creating class

class Person
{
    constructor(firstName, lastName, dob)
    {
        this.firstName - firstName;
        this.lastName = lastName;
        //we make it into a date object
        this.dob = new Date(dob);
    }

    getyear()
    {
        return this.dob.getFullYear()
    }
} 


//rather than including the function in the main object, we can 
//instead put it to the prototype



//const person1 = new Person('A','B', new Date().toLocaleString())
const person1 = new Person('A','B', '8-8-1997')
console.log(person1)