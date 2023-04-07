/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Find the stray number
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
****************************************************************************************************************************************************
*/
// Type your code:
function stray(numbers) {
  // First make your array sorted so you can easily find the one item taht is different from others within array:
  const arraySorted = numbers.sort();

  if(arraySorted[0] !== arraySorted[1]) {
    return arraySorted[0];
  } return arraySorted[arraySorted.length - 1]
};
// Console Log:
console.log(stray([17, 17, 3, 17, 17, 17, 17]));