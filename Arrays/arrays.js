const strings = ['a', 'b', 'c', 'd', 'e'];
// push add one to end of array:
strings.push('f');
// O(1)

// pop remove an item from end of array:
strings.pop('e');
// O(1)

// unshift : add item to beginning of array
strings.unshift('x');
// O(n) because we have to shift all of the values to add one to the beginning

// splice
strings.splice(2, 0, 'alien');
//O(n)

//DYNAMIC vs Static Arrays:
//static array has a fixed lenght ahead of time

//Classses in JavaScript:
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//Primitive Type = number, string, boolean,
//Reference Type = not defined by the language. THey are created by the programmer
//arrays are objects
//when createing an array, you are creating a box / data structure
// [] === []  will be false

//------>context vs scope<--------//
//context tells you where we are within the object

this; //keyword in JavaScript that is basically the windo object
console.log(this === window); //will be true
this.alert('hello');
//this is referring to this object1, the one you are in.

// function a() {
//   console.log(this);
// }

// a();

//------>instantiation<--------//
//making instances or multiple copies of an object
//we use classes usually because we want to make a copy of that objcect
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  //saying that Wizard has all the properties of player plus whatever we add
  constructor(name, type) {
    super(name, type);
    //whenever you extend a class, you want to use use super so you have
    //access to the properties of the extended class
  }
  play() {
    console.log(`Wee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shanwn', ' Dark Magic');

//class of array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
    //return the data at whatever index we are saying
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    //the data at the index of the last item(this.length) = the item
    //add 1 to the length each time
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    //get the last item
    //delete that item
    //subtract 1 from the length
    return lastItem;
  }
  delete(index) {
    //index is the item that we want to delete
    const item = this.data[index];
    //grabbing that item we want to delete
    //single responsibility principle //modularization//create another function below to delete/shift , and call it here
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      //start at the index we want to start delete from
      //iterate throgh it until the end
      //within the loop take each item in the data that we have,
      //and instead of what index it was before , add 1 to that index
      //shifting items by 1
    }
    delete this.data[this.length - 1];
    //the last item is still there, we have just shifted everything
    //need to delete it
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.pop('!');
console.log(newArray.get(0));

//------->reverse a string<----- //
const string = 'Hi my name is Andrei';

function reverseString(string) {
  let reverse = string.split('').reverse().join('');
  console.log(reverse);
  return reverse;
}

//------->merge sorted arrays<----- //
//if one of the arrays is empty, just return the other array

let array1 = [0, 2, 4, 5];
let array2 = [3, 9, 11, 31];

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    //this is making sure that the arrays do contain things and one isn't empty
    console.log(array1Item, array2Item);
    //while there are items in the arrays
    if (!array2Item || array1Item < array2Item) {
      //array 2 length is less than array 1, so need to add
      // if no array2Item OR array1Item  < array2Item
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else if (array2Item < array1Item) {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      i++;
      //
    }
  }

  return mergedArray;
}

//extract the if else statements into their own functions to make everything more readable.
//make it more modular
//even though i wrote the solution, it may not be the most readable.
//could clean it up by creating helper functions.
//EXPLAIN THESE THINGS.
