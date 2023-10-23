/*
Define a recursive function isEven. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Formula:
- Zero is even
- One is odd
- For any other number "n", its evenness is the same as n - 2
*/

const isEven = function(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(4));
