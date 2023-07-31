/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
5 kyu Extract the domain name from a URL
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript';
// Type your code:
function domainName(url){
  // Solution 1:
  // let domain = new URL(url)
  // return domain.hostname.split('.')[0]

  // Solution 2:
  const src = url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')
  const domain = src[0]
  return domain
}

console.log(domainName('http://github.com/carbonfive/raygun')) // 'github'
console.log(domainName('http://www.zombie-bites.com')) // "zombie-bites"
console.log(domainName('https://www.cnet.com')) // 'cnet'

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
