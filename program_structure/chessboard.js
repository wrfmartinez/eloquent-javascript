/*
Write a program that creates a string that represents an 8×8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// 1. Create a binding for the grid
let board = "";
let size = 8;
// 2. Write a loop for the y axis or rows
for (let y = 0; y < size; y++) {
  // 3. Write a second loop for the x axis or columns
  for (let x = 0; x < size; x++) {
    // 4. If the sum of the x axis and y axis is even then add a space, if not add a "#"
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  // 5. After each y axis iteration add a new-line
  board += "\n";
}

console.log(board);
