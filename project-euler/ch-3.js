/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number ?
*/

// isPrime ?
// 0 - N
// 1 - N
// 2 - Y
// 3 - Y

// A prime number that can only be divisible by itself & 1
// e.g. 2, 3, 5, 7, 11, 13, 17 ...

// ONLY 2 is a prime even number; all other even numbers are not prime

//  A prime factor is a factor that is a prime no i.e. any of the prime numbers
// that can be multiplied to give the original number

// check if a number is prime
function isPrime(number){
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i < number; i++){
     if (number % i === 0){
        return false;
     }
  }
  return true;
}

// check the largest prime factor
(function(number){
  let largestPrimeFactor = 2;
  for (let i = 3; i <= number; i++){
     if (isPrime(i) && (number % i === 0)){
       largestPrimeFactor = i;
     }
  }
  return largestPrimeFactor;
})(13195); // 29



// N/B: Code needs refactoring