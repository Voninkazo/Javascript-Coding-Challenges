function generateFibonacci(numberOfSequenceItems) {
  //returns array of items
}

function fib(n) {
  if (n === 0 || n === 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

console.log(fib(8))

function digital_root(n) {
  if (n < 10) {
    return n
  } else {
    n = n.toString().split('')
    const sum = n.reduce((a, b) => Number(a) + Number(b))
    return digital_root(sum)
  }
}
digital_root(942)
