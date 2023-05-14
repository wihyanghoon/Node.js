
const min = 2;
let primes = [];

function findPrimes(start, range) {
  let isPrime = true;
  for (let i = start; i < range; i++) {
    for (let j = min; j < Math.sqrt(range); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time()
findPrimes(2, 10000000)
console.timeEnd()

console.log(primes.length)
