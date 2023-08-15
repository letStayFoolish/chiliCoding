/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
7 kyu Dropcaps
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   "
Note: you will be provided atleast one word and should take string as input and return string as output.


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript';
// Type your code:
function dropCap(n) {
  return n.split(' ').map((item) => {
    if (item.length > 2) {
      return item[0].toUpperCase() + item.slice(1).toLowerCase()
    } else {
      return item
    }
  }).join(' ')
}
// item.length > 2 && item[0].toUpperCase()
console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate')) // "Revelation of The Contents Outraged American Public Opinion, And Helped Generate"

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
