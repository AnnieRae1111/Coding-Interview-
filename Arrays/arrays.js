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
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi I am ${this.name}, I'm a ${this.type}`);
  }
}
