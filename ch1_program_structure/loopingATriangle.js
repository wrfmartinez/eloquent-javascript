/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (let i = 1; i <= 7; i++) {
  // Check the index for the current iteration then console.log() the appopriate amount of '#'s
  if (i === 1) {
    console.log('#');
  } else if (i === 2) {
    console.log('##');
  } else if (i === 3) {
    console.log('###');
  } else if (i === 4) {
    console.log('####');
  } else if (i === 5) {
    console.log('#####');
  } else if (i === 6) {
    console.log('######');
  } else if (i === 7) {
    console.log('#######');
  }
}
