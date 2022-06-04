//Find the fibonacci number at the nth term.
//so if n = 8  , it will return 21.
//n is the index or nth term

// 0,1,1,2,3,5,8,13,21,34,55,89,144...
//the pattern of the sequencde is that each value is the sum of the 2 previous values, that means for N=5 -> 2+3
//the previous two numbers always equals N

function fibonacciIterative(n) {
  let arr = [0, 1];
  //this array has initial items of the section
  // if the n = 0 or 1 , it will return 0 or 1 becase we have that set in the arr
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
    //starting at 2 because the first two indexes return the n .
    //saying i < n +1
  }
  return arr[n];
  //return the index
} //O(n)linear time, looping through n-2 times becuase we are skipping the first two indexes

function fibonacciIterativeRecursive(n) {
  if (n < 2) {
    return n;
    //this is the base case
    //if the index is 0 or 1, n is the same as the index
    //once the index gets to 2, that changes
  }
  return fibonacciIterativeRecursive(n - 1) + fibonacciIterative(n - 2);
  // the number n is always the sum of the two numbers before it
  //we are returning n-1 + n-2
  //index n = 8
  //n-1 = index 7 value which is 13
  //n -2 = index 6 value which is 8
  //added together = 21
  //should give 21
}

fibonacciIterativeRecursive(8);

//recursive approach is actually easier than iterative
//recursion is exponential time : O(2^n), this is bad.
//the bigger the n input is, the longer this takes
//it may be more readable but this is not an ideal solution
//big O time complexity is too big
// its 2 of ^ n because the function is calling itself twice and then n is whatever input .

//tree traversal with recursion :
//very hard to do with loops. adds so much complexity

//     9
//  4     20
//1  6  15  170

function travers(node) {}
