//Stacks
//like browser history

//google
//udemy.com
//youtube

//since google is the first item, it is place on the stack
//stack woudl work like this:
//youtube is fisrt because that is the last thing we visited
//udemy.com
//google

//JS runtime environment: (in the browser)
//Call Stack

//Web API
//because setTime out is not part of JS but part of web API, it triggers the web API to say setTimeout has just been called and is popped out of callback until the time is up.
//the callstack is now empty and moves to next item
//setTimeout finishes after the time say 2 seconds
//setimeOut is is turned into callbackqueue?

//Callback Queue

//Event Loop
//checks to see if the call stack is emtpy
//if nothing is running, it will move to callback queue
//is anything in callback queue? Yes, setTimeout is there and is moved from callback queue to callstack queue and then pops it out of callstack once done

//event listener:
//has a callback function that happens everytime that action occurs

//-----Stack Implemntation with LINKED LIST----- //

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      //checking input . if the stack is emtpy then make the newNode the top and bottom
      this.top = newNode;
      this.bottom = newNode;
    }
    const holdingPointer = this.top;
    //whatever is ontop gets replaced by what we add
    //this is holding the reference to what was the top originally
    this.top = newNode;
    this.top.next = holdingPointer;
    //the node that the top node is pointing to
    //the old top is now after our newNode
    this.length++;
    //add one to the length each time as we are adding a newNode
    return this; //returns us the linked list
  }
  pop() {
    if (!this.top) {
      //if there is no top, return null
    }

    if (this.top === this.bottom) {
      //if(this.length === 0)
      // if there is just one node
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    //reference to what is currently at top
    this.top = this.top.next;
    //this is saying that this.top is now underneath the top
    this.length--;
    return holdingPointer;
    //can just return this if we don't need the holdingPointer/ if we just want to delete it and don't need to return the top
  }

  // isEmpty() {}
}
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
//udemy came next so its now on top
//LIFO
myStack.push('discord');
myStack.pop(); //removes top node//removes the holding pointer

/// -----> Creating Stack using ARRAY<------ ///
class Stack {
  constructor() {
    this.data = [];
    //create an empty array each time we create a stack
  }
  peek() {
    //we want to see the very top thing
    this.data[this.data.length - 1];
    //finding the last index of this.data which is the empty array
  }
  push(value) {
    this.data.push(value);
    //use the push method since we are using arrays to make the stack,  to add the value to the array
  }
  pop() {
    this.data.pop();
    return this; //returns the stack
  }
}

const myStack2 = new Stack();
myStack2.push('google');
myStack2.pop();
//----STEPHEN GRIDER STACK IMPLEMENTATION -----//
class Stack {
  //use array to create stack
  constructor() {
    this.data = [];
    //can use whatever word for data
    //could be this.myStack = []
  }
  push(record) {
    this.data.push(record);
    //can utualize push method because we are using an array
  }
  pop(record) {
    return this.data.pop();
    //return the last one that is popped off
  }
  peek() {
    return this.data[this.data.length - 1];
    //accessing the last index of this.data
  }
}

// --- QUEUE from STACK --- //
//very common interview questoin

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
//see STEPEHN GRIDER ALGO CASTS
class Queue {}
