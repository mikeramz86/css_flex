function sum(a,b) {
    return a + b
}


/* 
    1. remove function keyword
    2. Create own variable
    3. Add arrow
    4. Whatever comes after the arrow function is returned

*/
let sum2 = (a,b) => a + b

function isPostive(number) {
    return number >= 0
}

let isPostive2 = (number) => number >= 0

function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

document.addEventListener('click', function() {
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))

// BELOW IS HOW IT USED WITH THIS


class Person {
    constructor(name) {
        this.name = name
    }
// 
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        },100)
    }
// Defines 
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name )
        },100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()


// use arrow functions because it doesn't redefine the this scope