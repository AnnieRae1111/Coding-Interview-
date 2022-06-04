//cache
function addTo80(n) {
  return n + 80;
  //but what if this takes to long?
}

addTo80(5);
addTo80(5);
addTo80(5);

//can optimize the above cache using memoizatoin
let cache = {
  5: 85,
  //the first time, it will skip if statement and go to else staement and add n or 5 to  80
  //then the second tiem functino is called, it will check for n in the cache and see that it is there, wil return 85 still
}; //not ideal to have cache as global scope variable
//can use closures in javascript to avoid this
//how to bring this in the function?
//everytime it will reset though ... so use closures
function memoizatoinAddTo80() {
  let cache = {};
  //since this will reset with every function run, we can use closures.
  //returnign another function below with the logic in it, seperates the cache from the logic. this is called a closure.
  return function (n) {
    if (n in cache) {
      //check if property exists //sor tof like looping through
      return cache[n];
      //return that value
      //this is the first time around so there is noting in cache yet, so need an else statement
    } else {
      console.log('long time');
      cache[n] = n + 80;
    }
  };
}

const memoized = memoizatoinAddTo80();
//this is now how to call the function?
//this is very poweful and allows us to very effecient.

memoizatoinAddTo80(5);
memoizatoinAddTo80(5);

//accessing n in cache = O(1)

//**memoization:** specific form of caching that involves caching the return value or function based on it’s parameters. If the parameter of the function doesn’t change, then it’s memoized. It uses the cache, because it has already calculated the same thing before . ti will return the cached version. If the parameter changes, it is not memoized yet.
// a way to remember a solution to a subproblem so you don’t have to calculate it again
