// kopiuje tablice i tworzy nową tablicę 
// slice oprócz kopiowania tablicy tnie też tablice 

const numbers = [1,2,3,4,5,6,7,8,9]

const newNumbers = numbers 

//numbers === newNumbers // true 

const copyOfNumbers = numbers.slice()

//numbers === copyOfNumbers // false

// const people = [
//     { name: 'Ola'},
//     { name: 'Ala'}
// ]

const person1 = [ {name: 'Ola' } ]
const person2 = [ {name: 'Ala' } ]

const people = [person1, person2]
const newPeople = people

console.log(newPeople === people)

const copyOfPeople = people.slice()

console.log(copyOfPeople === people) // false

// THIS IS A SHALLOW COPY - płytka referencja 
console.log(copyOfPeople[0] === people[0]) //true

const copyOfPeopleSimulated = [person1, person2]

console.log(copyOfPeopleSimulated[0] === person1) // true

const firstThreeNumbers = numbers.slice(0,3)
const lastThreeNumbers = numbers.slice(numbers.length -3, numbers.length)
const lastThreeNumbers2 = numbers.slice(-3)

const removeElement = function(array, indexToRemove){
    const head = array.slice(0, indexToRemove)
    const tail = array.slice(indexToRemove + 1)

    const newArray = head.concat(tail)

    console.log(head)
    console.log(tail)

    return newArray
}

const numbersWithout4 = removeElement(numbers, 4)
console.log(numbersWithout4)