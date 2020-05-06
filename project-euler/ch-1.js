// Find the sum of all the multiples of 3 or 5 
// below the provided parameter value

// finds the sequence of a value 
// below a provided parameter value
// (finalValue - 1) stops at the value one less
// of the given parameter value
function range(initialValue, finalValue) {
  return Array.from({ length: ((finalValue - 1) - initialValue) + 1}, (_,index) => initialValue + index);
}

// Is multiple of 3 or 5 ?
function isMultiple(num){
  if (!Number.isInteger(num)) return;
  if (!(num % 3) || !(num % 5)) return true;
  return false;
}

// filters only truthy value 
function multiplesOnly(array){
  return array.filter(el => isMultiple(el));
}

function sumAll(array){
 return array.reduce((acc,next) => acc + next,0);
}

const sum = sumAll(multiplesOnly(range(0,1000))); 

