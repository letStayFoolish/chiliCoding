/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
6 kyu Give me a Diamond
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Jamie is a programmer, and James' girlfriend. She likes diamonds and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
* Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript';
// Type your code:
function diamond(n){
  if(n % 2 === 0 || n < 1) {
    return null
  }
  let dFirstHalf = []
  // First half of a diamond:
  for(let i = 0; i < (n - 1)/2; i++) {
    dFirstHalf.push(' '.repeat(((n - 1)/2) - i) + '*'.repeat(i * 2 + 1) + '\n')
  }
  // Second half of a diamond:
  return ([...dFirstHalf, "*".repeat(n) + '\n', ...dFirstHalf.reverse()].join(''))


  // Solution 2:
  // function diamond (n) {
  //   if (n <= 0 || n % 2 === 0) return null
  //   str = ''
  //   for (let i = 0; i < n; i++) {
  //     let len = Math.abs((n-2*i-1)/2)
  //     str += ' '.repeat(len)
  //     str += '*'.repeat(n-2*len)
  //     str += '\n'
  //   }
  //   return str
  // }
}

console.log(diamond(3)) // " *\n***\n *\n"
console.log(diamond(5)) // "  *\n ***\n*****\n ***\n  *\n"
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
  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
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
