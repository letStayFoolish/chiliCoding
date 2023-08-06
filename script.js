/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
7 kyu Summing a number's digits
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/52f3149496de55aded000410/solutions/javascript';
// Type your code:
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a, b) => +a + +b, 0)
}


console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) // 18
console.log(sumDigits(0)) // 0

/*********************************************************************************************************/

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
  // Solution 1 (slower one):

  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);

  // Solution 2 (speed):

  function fib(n) {
    let a = 0, b = 1, c = n

    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
}
}

console.log(fib(7)) // 13
*/
const heading = document.querySelector('h1');
const headingLink = heading.querySelector('a');
heading.addEventListener('click', () => {
  headingLink.setAttribute('href', kataLink);
  headingLink.setAttribute('target', '_blank');
});
const subheading = document.querySelector('h2');
const subheadingLink = subheading.querySelector('a');
subheading.addEventListener('click', () => {
  subheadingLink.setAttribute('href', 'https://www.codewars.com/dashboard');
  subheadingLink.setAttribute('target', '_blank');
});

window.addEventListener('DOMContentLoaded', () => {
  headingLink.removeEventListener('click', () => {
    headingLink.setAttribute('href', kataLink);
    headingLink.setAttribute('target', '_blank');
  });
  subheading.removeEventListener('click', () => {
    subheadingLink.setAttribute('href', 'https://www.codewars.com/dashboard');
    subheadingLink.setAttribute('target', '_blank');
  });
});
