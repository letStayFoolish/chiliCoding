/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Mexican Wave
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
****************************************************************************************************************************************************
*/
// Type your code:
function wave(str){
  let newArr = []
  for(let i = 0; i < str.length; i++) {
    const splitStr = str.split('');
    if(splitStr[i] !== ' ') {
      splitStr[i] = splitStr[i].toUpperCase();
      newArr.push(splitStr.join(''))
    }
    
  }
  return newArr;
}
// Console Log:
console.log(wave('hello')); // 
/****************************************************************************************************************************************************/

// Using loop:
/*
function sumTo(n) {
  let sum = 0;

  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));
*/

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1:
/*
function sumTo(n) {
  if(n === 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(100));
*/

// Fibonacci numbers
/*
function fib(n) {
  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(7)) // 13
*/