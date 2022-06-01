//Given 2 arrays, create a function
// that let’s a user know true/false
// whether these two arrays contain
// common items:

// const array1 = ['a','b','c','d','e']
// const array2 = ['a','f','g','h','l']

// //2 parameters - arrays - no size limit
// //return true or false

// function commonItem(arr1,arry2){
// 	for(let i = 0; i < arr1.lenght; i++){
// 		for(let j = 0; j < arr2.length; j++){
// 				if(arr1[1] === arr2[j])
// 						return true
// 			}
// 		}
// 		return false
// 	}

// this is the brute force solution. It may not be effecient enough.
// It's time complexity may not be what we are looking for.

// time complexity is O(a * b) because the arrays are two different inputs
// if array sizes are the same it would be O(n^2) but we don't know if they are
// same size.

// //Better Solution// :
// const array1 = ['a','b','c','d','e']
// const array2 = ['a','f','g','h','l']

// array = > obj {
//  a:true,
//  b:true,
//  c:true,
//  x:true,
// }

// does array2[index] === obj.properties?
// turn the array into a hash table
// now we are just looping through second array and comparing
// to object/ hash table we created

// function CommonItem(arr1,arr2){
// //loop through first array and create object where properties === items in the array
// //loop through second array and check if item in second array exists on created object.

// }

// instead of having a nested for loop, we will just have two for loops which is better runtime
// would be O(a + b) instead of O(a*b)

// Better Solution by creating hash table/object and having two un-nested for loops

const array1 = ['b', 'c', 'd', 'e'];
const array2 = ['a', 'f', 'g', 'h', 'l'];

function commonItem(array1, array2) {
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
    // console.log(map);
  }

  //loop through second array and check if item in second array exists on the map we created

  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      //if that item exists in the map
      // return true;
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

commonItem(array1, array2);

//We can tell the interviewer/ make a comment: if the arrays are substainally large, this solution when it comes to time complexity is better

//now we want to think about how we can break this and account for errors
//does the array only contain strings? What if we have empty array or what if the array has numbers ?

//want to ask if we will always have the same number of parameters
//what if null is added as a value to array
//use if statements as checks
// testing is usually beyond the scope of interview
//good to tell the interviewer what you would do

//use good/ names for the function and variables etc
