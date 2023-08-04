/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
6 kyu Your order, please
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript';
// Type your code:
function order(words){
  if (words === '') return ''

  // Solution 1:
  // const findNumber = words.match(/[1-9]/g) // 2, 1, 4, 3
  // const arrayWords = words.split(' ')
  // let result = []
  //
  // arrayWords.map((item, i) => {
  //   let counter = (i+1).toString()
  //   const index = findNumber.indexOf(counter);
  //   result.push(arrayWords[index]);
  // });
  // return result.join(' ')

  // Solution 2:
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/)
  }).join(' ')

}


console.log(order('is2 Thi1s T4est 3a')) // "Thi1s is2 3a T4est"
console.log(order('')) // ""

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
