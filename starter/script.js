//'use strict'//

function logger(){
  console.log('Stef')
}

logger()

function fruitProcessor(apples, oranges){
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5,0)
console.log(appleJuice)
console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)

const num = Number('23')

//Function Declaration
function calcAge1(birthYear){
  return 2021-birthYear
}

const age1 = calcAge1(1991)
console.log(age1)
//Function Expression
const calcAge2 = function (birthYear){
  return 2021-birthYear
}
const age2 = calcAge2(1991)
console.log(age1,age2)

//Arrow Functions
const calcAge3 = birthYear => 2021-birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsRetirement = (birthYear,firstName) => {
  const age = 2021 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsRetirement(1991, 'Jonas'))
console.log(yearsRetirement(1981, 'Bob'))

//Function inside a function
function cutFruit(fruit){
  return fruit * 4
}

function fruitProcessor(apples, oranges){
  const applePieces = cutFruit(apples)
  const orangePieces = cutFruit(oranges)

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`
  return juice
}
fruitProcessor(2,3)
Juice with 8 pieces of apple and 12 pieces of oranges.

//
const calcAge = function(birthYear){
  return 2021 - birthYear
}


const yearsRetirement = function (birthYear,firstName){
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`)
    return(retirement)
  }else{
    console.log(`${firstName} has already retired`)
    return -1
  }
}
console.log(yearsRetirement(1991, Jonas)) //=19
