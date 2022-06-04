function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(7);
//this function is not very effecient
//the larger the input the larger the calculations. has to do alot of calculations to get the index
//fibonacci(20) = 6765 calculations
//fibonacci(60) will make your brower crash
//O(2^n ) == really bad time complexity , we would never want to do an operatoin that costs this much in real life.

///memoized fibonacci
function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      //is there anything in the cache?
      //first time will be false so goes to else conditoin
      return cache[n];
    } else if (n < 2) {
      return n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const fasterFib = fibonacciMaster();
console.log(fasterFib(10));
