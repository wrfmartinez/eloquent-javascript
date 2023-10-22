/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
*/

// Create a binding for the number of iteration
let num = 1;
// Create a binding for the developing shape being created
let shape = "";
// Write a loop that will add a "#" to the shape binding for a total of seven iterations
while (num < 8) {
  shape += "#";
  // Log the shape on each iteration
  console.log(shape);
  num++;
}
