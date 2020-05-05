// Find the sum of all the multiples of 3 or 5 below the provided parameter value "

(function multiplesOf3or5(number){
  if (!Number.isInteger(number)) return;
    let sum = 0;
    for (let i = 3; i < number; i++){
      if ((i % 3) === 0 || (i % 5) === 0){
        sum+=i;
      }
    }
    return sum; 
})(1000); // 233168

// multiplesOf3or5(49) => 543
// multiplesOf3or5(19564) => 89301183


// Code needs refactoring