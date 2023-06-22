/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
6 kyu Simple Encryption #1 - Alternating Split
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Implement a pseudo-encryption algorithm which given a string text and an integer n concatenates all the odd-indexed characters of S with all the even-indexed characters of text, this process should be repeated n times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string text is an empty value or the integer n is not positive, return the first argument without changes.
*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript';
// Type your code:
function encrypt(text, n) {
  if (n <= 0 || !text) {
    return text
  }
  let second = text.split('').filter((item, index) => index % 2 === 1)
  let rest = text.split('').filter((item, index) => index % 2 === 0)
  return encrypt(second.concat(rest).join(''), n-1)
}

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText) {
    return encryptedText
  }
  let mid = Math.floor(encryptedText.length / 2)
  let first = encryptedText.split('').slice(mid)
  let second = encryptedText.split('').slice(0, mid)
  console.log(first, second)
  let arr = []
  for(let i = 0; i < encryptedText.length; i++) {
    if (i % 2 === i - 1) {
      arr.push(second[i])
      arr.push(first[i])
    } else {
      arr.push(first[i])
      arr.push(second[i])
    }
  }
  return decrypt(arr.join(''), n-1)
}
console.log(decrypt('135024', 1)) // "012345"

console.log(encrypt('012345', 1)) // "135024"
console.log(encrypt('01234', 2)) // "13024"  ->  "32104"
console.log(encrypt('012345', 3)) // "135024"  ->  "304152"  ->  "012345"
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
