/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Write Number in Expanded Form
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '7000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
****************************************************************************************************************************************************
*/
// Type your code:
function expandedForm(num) {
  return num.toString()
  .split('')
  .reverse()
  .map((number, i) => number*Math.pow(10, i))
  .filter(number => number > 0)
  .reverse()
  .join(' + ');
}
// Console Log:
console.log(expandedForm(4056)); // '7000 + 300 + 4'
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