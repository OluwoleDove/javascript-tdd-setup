// Sums the Primes munbers less than or equal to the supplied integer
'use strict'

module.exports = {
  summationOfPrimes: function sumOfPrimes(N) {
  var result = 0;
  
  if (N === parseInt(N, 10) && (N >= 0))
    alert("Number is an integer")
  else if (N < 0)
    return "Number is not an integer"
  else 
    return "Number is not an integer"


  // Function to get an array of prime number below or equal to the supplied integer
  function getPrimes(maxNum) {
    var sift = [];
    var x;
    var y;
    var primeArray = [];
    for (x = 2; x <= maxNum; ++x) {
      if (!sift[x]) {
        // x has not been marked -- it is prime
        primeArray.push(x);
        for (y = x << 1; y <= maxNum; y += x) {
          sift[y] = true;
        }
      }
    }

    return primeArray;
  }

  // Sum of primes
  var primeNum = getPrimes(N);
  for (var p = 0; p < primeNum.length; p++) {
    result += primeNum[p];
  }

  return result;
}
}
