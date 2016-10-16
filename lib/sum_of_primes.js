// Sums the Primes munbers less than or equal to the supplied integer
'use strict'

module.exports = {
  sumOfPrimes: function sumOfPrimes(N) {
  var result = 0;

  function getPrimes(max) {
    var sift = [];
    var x;
    var y;
    var primeArray = [];
    for (x = 2; x <= max; ++x) {
      if (!sift[x]) {
        // x has not been marked -- it is prime
        primeArray.push(x);
        for (y = x << 1; y <= max; y += x) {
          sift[y] = true;
        }
      }
    }

    return primeArray;
  }
  if((typeof N == "number") && (N > 0)){
    // Sum of primes
    var primeNum = getPrimes(N);
    for (var p = 0; p < primeNum.length; p++) {
    result += primeNum[p];
  }}
  else {
    if(typeof N != "number" || N < 0){
        return "Number is not an integer";
    }
    if(N < 0){
      return "Invalid arguments";
      
    }
    }
 return result;
}}