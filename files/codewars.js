function getLengthOfMissingArray(arrayOfArrays) {
  let newArr = []
  let missingNum = 0

  arrayOfArrays.forEach((arr) => {
    newArr.push(arr.length)
  })
  newArr.sort((a, b) => a - b)
  for (var i = 0; i < newArr.length; i++) {
    //missingNum = missingNum + 1
    if (newArr[i] + 1 != missingNum[i + 1]) {
      return missingNum[i] + 1
    }
  }
  console.log(missingNum)
  return missingNum
}

getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])

function fridayTheThirteenths(start, end) {
  let allFridayTheThirteenths = []

  if (end !== 0) {
    start = start
    end = end
  } else {
    end = start
  }
  //
  for (let startYear = start; startYear <= end; startYear++) {
    for (let month = 1; month <= 12; month++) {
      let date = `${month}/13/${startYear}`

      if (new Date(date).getDay() == 5) {
        allFridayTheThirteenths.push(date)
      }
    }
  }
  console.log(allFridayTheThirteenths)
  return allFridayTheThirteenths.join(' ')
}
fridayTheThirteenths(2014, 2015)

function findNegative(n) {
  return n * -1
}

console.log(findNegative(5))

// function that takes a param as a array of integers
// it returns the result of multiplying the values together in order
// use for loop
// multiply each item by the item that is in the next index
//

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

function pattern(n) {
  var output = ''
  let array = []
  // Happy Coding ^_^
  if (n < 1) {
    return ''
  } else {
    for (let i = 1; i <= n; i++) {
      array.push(i)
      for (let j = 1; j < array.length; j++) {
        output = array[j].repeat(i).join('\n')
      }
    }

    console.log(array)
    output = array.map((num, index) => {
      console.log(num, index)
      console.log('1'.repeat(0))
      if (index === 0 && num === 1) {
        return num
      } else {
        console.log(num)
        for (let i = 1; i < array.length; i++) {
          return i.repeat(i).join('\n')
        }
      }
    })
  }
  return output
}
console.log(pattern(11))

const pattern = (n) => {
  let out = []
  for (let i = 1; i <= n; i++) {
    out.push(i.toString().repeat(i))
  }
  return out.join('\n')
}

function pattern(n) {
  let array = []
  // Happy Coding ^_^
  for (let i = 1; i <= n; i++) {
    array.push(i.toString().repeat(i))
  }
  return array.join('\n')
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  if (fac1 < fac2) {
    return fighter2.name
  } else if (fac2 < fac1) {
    return fighter1.name
  } else {
    return firstAttacker
  }
}
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
  //your code here
  if (array1 == null || array2 === null) {
    return false
  }

  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  return array1
    .map((num) => num * num)
    .every((num, index) => num == array2[index])
}

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  return array1.map((v) => v * v).every((v, i) => v == array2[i])
}

function sumOfParts(num) {
  return num.split('').reduce((a, b) => a + +b, 0)
}

function orderWeight(strng) {
  // your code
  let arr = strng.split(' ')
  return arr
    .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
    .join(' ') // predicate
}

console.log(orderWeight('56 65 74 100 99 68 86 180 90'))

// explain the task
// deconstrcutoring
//
