/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

*/
// Type your code:
function validatePIN (pin) {
  
  const onlyNumbers = pin.match(pin.match(/^\d+$/));
  const pinLength = (pin.length == 4 || pin.length == 6);
  
  if(onlyNumbers && pinLength) {
    return true;
  } return false;
};
// Console Log:
console.log(validatePIN('2341'));
