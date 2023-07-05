/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
7 kyu Anagram Detection
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript';
// Type your code:
// write the function isAnagram
function isAnagram(test, original) {
  // check letters matching in both strings:
  const arrTest = test.toLowerCase().split("").sort().join("")
  const arrOriginal = original.toLowerCase().split("").sort().join("")

  if(arrTest.length === arrOriginal.length) {
    return arrTest === arrOriginal
  } else {
    return false
  }

};

console.log(isAnagram('foefet', 'toffee')) // true
console.log(isAnagram('DeathCubeK', 'Buckethead')) // true
console.log(isAnagram('Twoo', 'WooT')) // true
console.log('False results: ')
console.log(isAnagram('dumble', 'bumble')) // false
console.log(isAnagram('apple', 'pale')) // false
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
