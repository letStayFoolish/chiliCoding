/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Jaden Casing Strings
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
****************************************************************************************************************************************************
*/
// Type your code:
function toJadenCase(str1) {
  const str2 = str1.split(' ');
  
  for(let i = 0; i < str2.length; i++) {
    str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1)
  }
  return str2.join(' ')
};
// Console Log:
console.log(toJadenCase('How can mirrors be real if our eyes aren\'t real')); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
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