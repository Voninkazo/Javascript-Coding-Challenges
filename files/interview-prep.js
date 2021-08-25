// takes 2 numbers and returns the sum of those 2 numbers
// create a function
// 2 numbers as params
// return the sum o those numbers

function sumNumbers(num1, num2) {
  return num1 + num2
}

const sumNumbers = (num1, num2) => num1 + num2

//console.log(sumNumbers(12, 30))

function sum(...args) {
  return args.reduce((acc, value) => {
    return acc + value
  })
}

console.log(sum(332, 32432, 23432, 23432, 323))

// funct takes 2 str as params
// true if second is in the first str

function boolean(str1, str2) {
  if (str2.includes(str1)) {
    return true
  } else {
    return false
  }
}

const boolean = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase())

//console.log(boolean('This is really fast', 'fast'))

// filter
// loop
// push

function arrOfObj(array) {
  let arr = []
  array.forEach((obj) => {
    if (obj.name) {
      arr.push(obj.name)
    }
  })
  return arr
}

//console.log(arrOfObj([{ name: 'sandy' }, { name: 'soa' }, { id: '1' }]))

function usReduce(array) {
  let newArr = array.reduce((arr, obj) => {
    if (obj.hasOwnProperty('name')) {
      arr.push(obj.name)
    }
    return arr
  }, [])
  return newArr
}
//console.log(usReduce([{ name: 'sandy' }, { name: 'soa' }, { id: '1' }]))

function stringToJadenCase(str) {
  //...
  return str
    .split(' ')
    .map((arr) => {
      let mapNewArr = arr
        .split('')
        .map((ar, index) => (index === 0 ? ar.toUpperCase() : ar))
        .join('')
      return mapNewArr
    })
    .join(' ')
}

console.log(stringToJadenCase('min max width you'))

String.prototype.toJadenCase = function (str) {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

// find the square
// find the next square
// use Math.sqrt()
// find the next next number => + 1
// then we will power the num by the num
// if that num is not decimal => perfect
// else => - 1

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let square = Math.sqrt(sq)
  let nextNum = square + 1
  let nextSquare = nextNum * nextNum
  return Number.isInteger(Math.sqrt(nextSquare)) ? nextSquare : -1
}

console.log(findNextSquare(114))

// funct takes a num as a params
// create an array of numbers from the given number
// repeat each num according to its index
//
function pattern(n) {
  let array = []
  for (let i = 1; i <= n; i++) {
    array.push(i)
  }
  let newArr = array.map((num, index) => num.toString().repeat(index + 1))
  return newArr.join('\n')
}

console.log(pattern(11))

// create a function that takes a number as a param
//
function descendingOrder(n) {
  //...
  let array = n.toString().split('')
  let newArr = array.sort((a, b) => Number(b) - Number(a))
  return Number(newArr.join(''))
}

console.log(descendingOrder(123456789))

// split the string to get an array of words
// then create a regex that express numbers
// sort the array according to the digits inside of each string
//
//
function order(words) {
  // ...
  let arr = words.split(' ')
  let regex = /\d+/g
  return arr
    .sort((a, b) => Number(a.match(regex) - Number(b.match(regex))))
    .join(' ')
}
console.log(order('is2 Thi1s T4est 3a'))

//
// Let's create an object o from function F with its own properties a and b:
let Numbers = function () {
  this.a = 1
  this.b = 2
}
let o = new Numbers() // {a: 1, b: 2}
console.log(o)
// add properties in F function's prototype
Numbers.prototype.b = 3
Numbers.prototype.c = 4

console.log(o.b)

function returnSpecifics(obj) {
  let array = []
  let allValues = Object.values(obj)
  let allKeys = Object.keys(obj)

  if (allKeys.length === 0) return ['The Object is Empty']

  let numbers = allValues.filter((item) => typeof item === 'number')
  console.log({}.toString)
  let methods = allKeys.filter(
    (key) => obj[key] && {}.toString.call(obj[key]) === '[object Function]'
  )
  array = [...numbers, ...methods]

  return array
}

// take the String by using the this
// compare if itequals to String.toUpperCase();
// return true
// else return false
//
// your code here
//return this.toString() == this.toUpperCase()
//
console.log(hoisting(2323))

function hoisting(num) {
  return num * num
}

// create a loop
// create an array that contains the numb between the two given num
// sum the numbers in the array up
// return the sum
// if the two numbers are the same => return a || b

function getSum(a, b) {
  //Good luck!
  if (a === b) {
    return a || b
  }
  const array = []

  const start = a < b ? a : b
  const end = a < b ? b : a
  console.log(start, end)

  for (var num = start; num <= end; num++) {
    //console.log(num)
    array.push(num)
    //console.log(array)
  }

  console.log(array)
  return array.reduce((acc, currentVal) => {
    const result = acc + currentVal
    console.log(result)
    return result
  }, 0)
}
console.log(getSum(0, -1))

function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) return 'now'
  let h = 0
  let min = 0
  let sec = 0
  if (seconds === 60) {
    return '1 minute'
  }
  if (seconds < 60) {
    return `${seconds} ${seconds > 1 ? 'seconds' : 'second'}`
  }
  if (seconds > 60) {
    h = Math.floor(seconds / 60 / 60)

    let remainder = seconds > 120 ? seconds % 120 : 120

    min = Math.floor(remainder / 60)

    let mins = min * 60
    sec = remainder - mins
  }
  return `${h !== 0 ? `${h} ${h === 1 ? 'hour' : 'hours'}` : ''} ${
    min !== 0 ? `${min} ${min === 1 ? 'minute,' : 'minutes'}` : ''
  } ${sec !== 0 ? `${sec} ${sec === 1 ? 'second' : 'seconds'}` : ''}`
}

console.log(formatDuration(122134))

function getNearestGreaterNum(array, target) {
  for (let i = target; i !== 0; i--) {
    if (array[i] > array[target]) {
      return i
    }
  }
}

console.log(
  getNearestGreaterNum([3, 4, 65, 2, 3, 63, 44, 6, 5, 8, 6, 8, 9, 4, 2], 5)
)

function getUsers(users, fetchMethod) {
  const userDetails = await fetchMethod(users)

  return userDetails
}

// getUsers([], fetchMethod)

// find the used towels from the given array of weeklyusedTowels
// return the left of the items in the array
// sort the washed towels to get the blue on top
// put those usedTowels back on the right part the array
// repeat the method until we finished looping through the array

function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // Your code here
  let currentPileOfTowels = [...pileOfTowels]

  for (let week = 0; week < weeklyUsedTowels.length; week++) {
    console.log({ week })
    let arrayOfUsedTowels = currentPileOfTowels.slice(
      weeklyUsedTowels[week] * -1
    )
    let leftOfTowels = currentPileOfTowels.slice(
      0,
      currentPileOfTowels.length - weeklyUsedTowels[week]
    )
    console.log({ currentPileOfTowels })
    console.log({ arrayOfUsedTowels })
    console.log({ leftOfTowels })
    // sort the array
    const sortedArr = [...arrayOfUsedTowels].sort().reverse()
    console.log(sortedArr)
    currentPileOfTowels = [...leftOfTowels, ...sortedArr]
    console.log({ currentPileOfTowels })
  }
  return currentPileOfTowels
}
const weeklyUsedTowels = [2, 1, 4, 2]
const pileOfTowels = ['blue', 'red', 'blue', 'red', 'blue']
console.log(sortThePile(pileOfTowels, [3]))
const expected = ['blue', 'red', 'red', 'blue', 'blue']
