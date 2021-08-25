//Write and test code which can print the following:
// create a function it should return the first 3 lines

// function square() {
//   const array = ['xxx', 'xox', 'xxx']
//   array.map((str, index) => {
//     return <p key={index}>{str}</p>
//   })
// }

//
// square()

const setAnswerOptionsCallback = (original, current) => {
  const originWithoutCurrent = original.filter((phr) => phr.id !== current.id)

  const phraseCategoryId = categories.find((cat) =>
    cat.phrasesIds.includes(current?.id)
  )

  const allNewPhrases = getPhrasesForCategoryId(phraseCategoryId?.id)
  const removeDuplicateItem = allNewPhrases.filter(
    (phr) => phr.id !== current.id
  )
  const randomFromAll = shuffleArray(
    seenPhrases || learntPhrases ? removeDuplicateItem : originWithoutCurrent
  ).slice(0, 3)

  let randomWithCorrect = shuffleArray([...randomFromAll, current])
  setAnswerOptions(randomWithCorrect)
}

function square() {
  return 'xxx' + '\n' + 'xxx' + '\n' + 'xxx'
}

console.log(square())

function unlimitedSquare(n, char, numOfLine) {
  for (var i = 1; i <= numOfLine; i++) {
    return char.repeat(n)
  }
}

console.log(unlimitedSquare(4, 'x', 5))

// xxx
// xxx
// xxx

// xxxxx
// xxxxx
// xxxxx
// xxxxx
// xxxxx

// xxxxx
// xooox
// xooox
// xooox
// xxxxx

// xxxxxxx
// xooooox
// xooooox
// xooooox
// xooooox
// xooooox
// xxxxxxx

class Rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.area = getArea
  }

  // Getter
  get area() {
    return this.calcArea()
  }
  // Method
  calcArea() {
    return this.height * this.width
  }
}

// const square2 = new Rectangle(10, 10)

// console.log(square2) // 100

// function Car(color) {
//   this.color = color
// }

// const redCar = new Car('red')
// console.log(redCar)
// // redCar instanceof Car; // => true

// function myFunction() {
//   console.log(arguments)
// }

// myFunction()

// function fetch() {
//   function daja() {}
// }

function unlimitedSquare(length) {
  let char = 'x'
  let arrOfMultipleChar = []
  // Generating the character
  for (let i = 0; i < length; i++) {
    arrOfMultipleChar.push(char.repeat(length))
  }
  const arrWithChangedInnerChar = arrOfMultipleChar.map((char, index) => {
    function changeStr() {
      const arrOfSingleChar = char.split('')
      const newArrOfSingleChar = arrOfSingleChar
        .map((str, index) => {
          //Change the middle str into 'o'
          return index === 0 || index === arrOfSingleChar.length - 1
            ? str
            : str.replace(char, 'o')
        })
        // join each string
        .join('')
      return newArrOfSingleChar
    }
    // Get the middle item and change them into 'o'by calling the function that's declared above
    return index === 0 || index === arrOfMultipleChar.length - 1
      ? char
      : changeStr()
  })
  // join the array with new lines
  return arrWithChangedInnerChar.join('\n')
}
console.log(unlimitedSquare(10))
//

function getSquare(size, borderChar, contentsChar) {
  let output = ''
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
        output += borderChar
      } else {
        output += contentsChar
      }
    }
    output += '\n'
  }
  return output
}

let o = getSquare(5, 'x', 'o')
console.log(o)
