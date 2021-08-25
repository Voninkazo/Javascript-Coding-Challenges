// create a function accepts 2 strings as params
// first param is word/ setence
// second param is a letter
// count how many times is the letter repeated in the string
// for loop
// check if the letter exists in the  given string
// increase count

function countLetters(string, letter) {
  let counter = 0

  for (var i = 0; i < string.length; string++) {
    if (string.includes(letter)) {
      counter++
    }
  }
  return counter
}

console.log(countLetters('hello', 'o'))

// create a function removes the 1st and the last char in a str
// it takes a string as apram
// find the 1st char and the last char
// the remove each one of them
// split method
// pop

function removeFirstAndLastCahr(string) {
  let arr = string.split('')
  let firstChar = arr.shift()
  let lastChar = arr.pop()

  return arr.filter((char) => char !== firstChar && char !== lastChar).join('')
}

console.log(removeFirstAndLastCahr('split'))

// function that repeats the given string according a given num
// it takes the 2 params
// take the str
// then repeat it n times

function repeatStr(n, string) {
  const arr = []

  for (var num = 0; num < n; n++) {
    // push the arr here
    arr.push(string)
  }
}

console.log(repeatStr(7, 'i'))
