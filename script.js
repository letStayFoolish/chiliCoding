/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Disemvowel Trolls
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
****************************************************************************************************************************************************
*/
// Type your code:
function disemvowel(str) {
  const strVowels = ['a','e','i','o','u'];

  return str.split('').map((letter) => {
    while(!strVowels.includes(letter.toLowerCase())) {
      return letter;
    }
  }).join('')
}
// Console Log:
console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!
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