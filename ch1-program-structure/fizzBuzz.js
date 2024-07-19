/*
Write a program that uses console.log to print all numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisble by 5 (and not 3), print "Buzz" instead

When that is working, modify the program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print 'Fizz" or "Buzz" for numbers divisble by only one of those).
*/

for (i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    // Check if both 5 and 3 have a remainder of 0 then log "FizzBuzz"
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // Check if a number has a remainder of 0 after being divided by 3. If yes, log "Fizz"
    console.log("Fizz");
  } else if ((i % 5 === 0) && !(i % 3 === 0)) {
    // Check if a number has a remainder of 0 after being divided by 5 and is not also divisible by 3. If yes, log "Buzz"
    console.log("Buzz");
  } else {
    // if conditions above are not met then log the number
    console.log(i);
  }
}
