/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
8 kyu How good are you really?
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript';
// Type your code:
function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a, b) => a + b, 0)
  sum = sum + yourPoints
  const average = Math.floor(sum / (classPoints.length + 1))

  return average < yourPoints
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true

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
