//Google Question: First Recuring Character
//Given an array = [2,5,1,2,3,5,1,2,4]
//should return 2 because this is the first recuring character
//if no recuring character return undefined

let thisArray = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function firstRecuringCharacter(array) {
  let map = {};

  for (let item of array) {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item]++;
    }
  }

  console.log(map, 'map');
}

firstRecuringCharacter(thisArray);

//First way to do this is with nested for loop BRUTE FORCE/ Naive way //
function firstRecuringCharacter(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //start j at i +1 so that the nested loop looks at the one index ahead of i
      if (array[i] === array[j]) {
        console.log(array[i], 'occurs first');
        return array[i];
      }
    }
  }
  return undefined;
} // O(n ^2) nested for loops
//O(1) space complexity

firstRecuringCharacter(thisArray);

// -------using hash table / object -------//

function firstRecuringCharacter2(thisArray) {
  let map = {};

  for (let i = 0; i < thisArray.length; i++) {
    if (map[thisArray[i]] !== undefined) {
      //if that character exists and it is not undefined, return it
      return thisArray[i];
    } else {
      map[thisArray[i]] = i;
      //else add it to the map .
      //else the item at that place in the map equals that item
    }
  }
  console.log(map);
  return undefined;
} //O(n) . We have to loop through once
