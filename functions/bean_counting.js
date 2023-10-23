/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted.

Rewrite countBs to make use of this new function
*/

// console.log("string"["string".length - 1]);

// 1. Create a binding for the amount of uppercase "B"s found in a string
// 2. Write a loop that iterates through the strings letters
// 3. Compare each letter to uppercase "B".
//    if it is a match increase counter binding by 1
// 4. Return amount found
const countBs = function(string) {
  let count = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count++;
    }
  }

  return count;
}

const countChar = function(string, char) {
  let count = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }

  return count;
}
