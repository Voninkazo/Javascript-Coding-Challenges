// function getLengthOfMissingArray(arrayOfArrays) {
//   let newArr = []
//   let missingNum = 0

//   arrayOfArrays.forEach((arr) => {
//     newArr.push(arr.length)
//   })
//   newArr.sort((a, b) => a - b)
//   for (var i = 0; i < newArr.length; i++) {
//     //missingNum = missingNum + 1
//     if (newArr[i] + 1 != missingNum[i + 1]) {
//       return missingNum[i] + 1
//     }
//   }
//   console.log(missingNum)
//   return missingNum
// }

// getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])

// function fridayTheThirteenths(start, end) {
//   let allFridayTheThirteenths = []

//   if (end !== 0) {
//     start = start
//     end = end
//   } else {
//     end = start
//   }

//   for (let startYear = start; startYear <= end; startYear++) {
//     for (let month = 1; month <= 12; month++) {
//       let date = `${month}/13/${startYear}`

//       if (new Date(date).getDay() == 5) {
//         allFridayTheThirteenths.push(date)
//       }
//     }
//   }
//   console.log(allFridayTheThirteenths)
//   return allFridayTheThirteenths.join(' ')
// }
// fridayTheThirteenths(2014, 2015)

function findNegative(n) {
  return n * -1
}

console.log(findNegative(5))

// function that takes a param as a array of integers
// it returns the result of multiplying the values together in order
// use for loop
// multiply each item by the item that is in the next index

function multiply(array) {
  const sum = array.reduce((prevValue, curValue) => {
    return prevValue * curValue
  }, 1)
  return sum
}
console.log(multiply([1, 2, 3, 4]))

function accum(s) {
  // your code
  s = s.split('')
  return s
    .map(
      (letter, index) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(index)
    )
    .join('-')
}

console.log(accum('ZpglnRxqenU'))

// create a func takes a str as a param
// it return the middle char
// if the length of the str is even => return 2 middle chars
// else return the middle char
// split to get an array os str
// if statement to check the length of the arr to see if odd or even
// use slice

function getMiddle(s) {
  //Code goes here!
  let arr = s.split('')
  let middleChar = ''
  // return two middle char
  for (var i = 0; i < arr.length; i++) {
    middleChar =
      arr.length % 2 === 0
        ? arr[arr.length / 2 - 1] + arr[arr.length / 2]
        : arr[Math.ceil(arr.length / 2 - 1)]
  }
  return middleChar
}

console.log(getMiddle('tesdpasding'))

// create a func that takes 2 numbers as params
// then return the sum of the all intergers between
// if the 2 numbers are equal => a or b
// get all intergers between the two
// sum them up

function getSum(a, b) {
  //Good luck!
  let arr = []
  let sum = 0
  let start = a > b ? b : a
  let end = a > b ? a : b

  if (start === end) {
    return start || end
  } else {
    // return the sum of the integers
    for (var i = start; i <= end; i++) {
      sum = arr.push(i)
      sum = arr.reduce((acc, curValue) => acc + curValue)
    }
  }
  return sum
}

console.log(getSum(0, -1))

// create a func takes a string as a prams
// return the number of vowels in the str
// split to get an array
// use for loop
// filter out all vowels
// store them in anarray

function getCount(str) {
  var vowelsCount = 0
  let arr = str.split('')
  // enter your majic here
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] === 'a' ||
      arr[i] == 'e' ||
      arr[i] == 'i' ||
      arr[i] == 'o' ||
      arr[i] === 'u'
    ) {
      vowelsCount++
    }
  }

  return vowelsCount
}
console.log(getCount('abracadabra'))

function stringToJadenCase(str) {
  //...
  let array = str.split('')
  //console.log(array)
  let newStr = ''
  for (var i = 0; i < array.length; i++) {
    return array[i].split('')[0].toUpperCase()
  }
  return array
}

console.log(
  stringToJadenCase("How can mirrors be real if our eyes aren't real")
)
