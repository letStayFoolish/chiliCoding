/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
6 kyu Who likes it?
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript';
// Type your code:
function likes(names) {
  const likes = names.length;

  if (likes !== undefined) {
    switch (likes) {
      case 0:
        return 'no one likes this';
        break;
      case 1:
        return `${names[0]} likes this`;
        break;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
        break;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        break;
      default:
        return `${names[0]}, ${names[1]} and ${likes - 2} others like this`;
    }
  } else {
    return 'no one likes this';
  }
}
// Console Log:
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // "Alex, Jacob and 2 others like this"
likes(['Alex', 'Jacob', 'Mark', 'Max', 'Chili', 'Irina', 'Damjan', 'Tamara']); // "Alex, Jacob and 6 others like this"
likes(['Alex', 'Jacob', 'Mark', 'Max']); // "Alex, Jacob and 2 others like this"
likes(['Alex', 'Jacob', 'Mark']); // "Alex, Jacob and Mark like this"
// likes(['Alex', 'Jacob']); // "Alex and Jacob like this"
// likes(['Alex']); // "Alex likes this"
// likes([]); // "no one likes this"
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
