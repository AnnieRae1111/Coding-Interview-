//Write two functions that finds the factorial of any number.
//Factorial is: 5! = 5*4*3*2*1
//5! = 5 * 4! or //5! = 5 * 4 * 3!

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
    //this is the base case and how we stop
  }

  return number * findFactorialRecursive(number - 1);
  // key is to add -1 so we are going down in the number until we get to the base case
} //O(n)

function findFactorialItertive(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    //we are starting at 2 because 1 factorial is just 1
    //2 factorial is 2 * 1 which is just 2
    // can just return 1 or 2
    //it's shortcut to avoid extra loops
    answer = answer * i;
  }

  return answer;
} //O(n)
