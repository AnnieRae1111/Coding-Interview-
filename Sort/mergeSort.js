const array = [99, 44, 6, 2, 1, 6, 63, 87, 283, 4, 0];
const letters = ['a', 'c', 'e', 'f', 'g', 'h'];
//uses recursion

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  //split array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  //the left hand side are the values starting at 0 index and ending at the middle which is half of the length
  const right = array.slice(middle);
  //the right hand side is the other end. starting at the middle

  return merge(mergeSort(right), mergeSort(left));
}

function merge

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// delcare new variable
// let slice = letters.slice(3, 'slice');
console.log(letters.slice(2));
console.log(array.slice(2));
//first paremeter is the index or position you want to start slicing at
//want to slice at number 6 until 283 so it returns 6,63,87 and 283
//the end is not inclusive with slice
//6 is index of 5 and 283 is index of 8. In order to include 283 need to go one over to index 9, since it is non inclusive
//you don't have to include a second index of where to end.
//if you want to slice off the first 3 numberes you would slice at the second index.
