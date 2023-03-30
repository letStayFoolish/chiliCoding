/*
Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/
// Type your code:
function maps(x){
  return x.map(number => Math.pow(number, 2))
}
// Console Log:
console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]
