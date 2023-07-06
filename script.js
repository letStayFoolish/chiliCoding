/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
6 kyu Two Sum
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript';
// Type your code:
// write the function isAnagram
function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

console.log(twoSum([1, 2, 3], 4)) // [0, 2] or [2, 0] => 1 + 3 = 4 or 3 + 1 = 4
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([-370, -545, -687, -450, -450, -770, 407, -849, -531, -549, 874, 839, 10, 36, -41, -454, -589, 520, 391, -204, -926, 402, -152, -360, 497, -1000, 366, -247, -116, 879, 658, -453, 596, -94, -285, 892, -747, -193, -614, -45, -724, 64, -727, -625, 363, 782, 802, -609, -805, 789, -275, -810, -291, 359, 797, -958, 897, 673, -249, -181, 589, -981, -282, -520, -751, 809, 980, 344, 747, -230, -887, 95, 52, -693, 708], 88)) // [0, 1]
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
