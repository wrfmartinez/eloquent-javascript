/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
*/

let num = 1;
let shape = "";

while (num < 8) {
  shape += "#";
  console.log(shape);
  num++;
}
