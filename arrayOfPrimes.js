//This function will return all the prime numbers up to the count of n

let primeNumbers = [2];

function allPrimes(n) {
  for (let i = 2; i < n; i++) {
    if ( Math.pow(2, i - 1) % i == 1 ) { 
        primeNumbers.push(i)
  }
}
  return primeNumbers;
}

console.log(allPrimes(50)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] 
