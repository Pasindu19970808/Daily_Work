//DOM
console.log(document.getElementById("my-form"))
//querySelecor works like jquery 
//it is a single element selector
//even if there is one, it will only select the first one
console.log(document.querySelector('h1'))

//multiple element selection
//for querySelectorAll you can pass in id,class etc.
console.log(document.querySelectorAll('.item')[0])

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hi'
ul.children[1].innerText = 'ABC'
//adding html dynamically
ul.children[2].innerHTML = '<h1>Hi</h1>'

const btn = document.querySelector('.btn')
btn.style.background = 'red' 
//adding an event for the button

//adding an event to the button



console.log(btn)



const myForm = document.querySelector("#my-form")


//queryselector,queryselectorAll produces the first match and all matches respectively
//query,queryselectorAll produce non live lists which are not updated if a change relevant to that
//is done in later line of code
//for live lists you need to use getelementbyID,getElementsByClassName
//querySelector is more flexible as you can pass it any CSS3 selector
//not just simple ones for id,tag or class


//returns an HTML collection
//chaining the getelementsbyclassname with getelementbyID will not work
const test = document.getElementsByClassName('item')
console.log(test)
//querySelector will return the first one and always needs a '.id/class_name'
const test1 = document.querySelectorAll('.item')
//test1[0].innerHTML = '<h1>YO</h1>'
console.log(test1)

const test2 = document.querySelector(".item")
console.log(test2)


btn.addEventListener('click',function()
{
    
    document.getElementById('my-form').style.background = '#ccc'
    document.querySelectorAll('.item')[0].innerHTML = '<h1>YO</h1>'
    
})