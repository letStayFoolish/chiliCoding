/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Two to One
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
****************************************************************************************************************************************************
*/
// Type your code:
function longest(s1, s2) {
  return Array.from(new Set(s1.toLowerCase() + s2.toLowerCase())).sort().join('');
}
// Console Log:
console.log(longest('Nemanja', 'Karaklajic'));