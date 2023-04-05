/*
****************************************************************************************************************************************************
TITLE:
****************************************************************************************************************************************************
Remove exclamation marks
****************************************************************************************************************************************************
DESCRIPTION:
****************************************************************************************************************************************************
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
****************************************************************************************************************************************************
*/
// Type your code:
function removeExclamationMarks(s) {
  return Array.from(s).filter((letter) => {
    return !letter.includes('!');
  }).join('')
}

// Console Log:
console.log(removeExclamationMarks("Hello World!"));