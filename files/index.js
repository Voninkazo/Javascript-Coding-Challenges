function descendingOrder(n) {
  let array = n.toString().split('')
  let highestNumber = array
    .map((num) => Number(num))
    .sort((a, b) => b - a)
    .join('')
  return highestNumber
}

console.log(descendingOrder(42145))
// let sheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]

// function countSheeps(arrayOfSheep) {
//   // your code here
//   let trueArray = []
//   for (var i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       trueArray.push(arrayOfSheep[i])
//     }
//   }
//   console.log(trueArray.length)
//   return trueArray.length
// }

// countSheeps(sheep)

// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   return l.filter((item) => typeof item === 'number')
// }

// function check(a, x) {
//   // your code here
//   if (a.includes(x)) {
//     return true
//   } else {
//     return false
//   }
// }

// function greaterThanLessThan(a, b, c) {
//   //write your code here!
//   if (a < b < c && c > b > a) {
//     return true
//   } else {
//     return false
//   }
// }

function isDigit(s) {
  return !isNaN(s) && parseFloat(s) ? true : false
}

console.log(isDigit('4 3 '))

// function problem(x) {
//   //your code here
//   if (typeof x === 'number') {
//     return x * 50 + 6
//   } else if (typeof x === 'string') {
//     return 'Error'
//   }
// }

// function boolToWord(bool) {
//   //...
//   if (bool) {
//     return 'Yes'
//   } else {
//     return 'No'
//   }
// }
// // Write the "square"-function here

// const square = (number) => number ** 2
// function makeNegative(num) {
//   // Code?
//   if (num >= 0) {
//     return -num
//   } else {
//     return num
//   }
// }

// function calculateAge(birthYear, year) {
//   let age = year - birthYear
//   if (age === 1) {
//     return console.log(`You are 1 year old.`)
//   } else if (age > 1) {
//     return console.log(`You will be born in ${age} years.`)
//   } else {
//     return console.log('You were born this very year!')
//   }
// }

// calculateAge(2001, 2099)

function openOrSenior(data) {
  // ...
  //console.log(data)
  return data.map((i) => (i[0] >= 55 && i[1] > 7 ? 'Senior' : 'Open'))
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
)

function nbYear(p0, percent, aug, p) {
  // your code
  let count = 0
  while (p0 < p) {
    p0 = p0 + (p0 * percent) / 100 + aug
    count++
  }
  console.log(count)
  return count
}

nbYear(1500, 5, 100, 5000)

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function findMissingLetter(array) {
  const start = alphabet.indexOf(array[0])
  //console.log(start)
  const end = alphabet.indexOf(array[array.length - 1])
  let sliced = alphabet.slice(start, end + 1)
  let miss = sliced.filter((letter) => !array.includes(letter))
  console.log(miss)
  return miss.join('')
  // return sliced.join()
}

findMissingLetter(['A', 'B', 'C', 'D', 'F'])

function longest(s1, s2) {
  // your code
  const array = [...new Set(s1 + s2)]
  console.log(array)
  return array.sort().join('')
}

console.log(longest('aretheyhere', 'yestheyarehere'))

// function accum(s) {}

// console.log(accum('ZpglnRxqenU'))

function narcissistic(value) {
  // Code me to return true or false
  let digit = value.toString().split('')
  let map = digit.map((num) => num ** digit.length)
  let sum = map.reduce((a, b) => a + b)
  return sum === value ? true : false
}

//console.log(narcissistic(153))

const directions = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']
const dir = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']

function isValidWalk(walk) {
  //insert brilliant code here
  for (var i = 0; i < walk.length; i++) {
    if (walk.legnth === 10 && walk[i] !== walk[i + 1]) {
      return true
    } else {
      return false
    }
  }
}

console.log(isValidWalk(directions))
//console.log(isValidWalk(dir))

function cleanString(s) {
  const result = []
  for (const char of s) {
    if (char === '#') {
      console.log(result.pop)
      result.pop()
    } else {
      result.push(char)
    }
  }
  return result.join('')
}

cleanString('abc#d##c')
