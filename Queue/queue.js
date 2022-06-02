//we rely on arrays but utulize just the two methods that relate to queues.
//---STPEHEN GRIDER IMPLEMENTATION using array -- ///
class Queue {
  //create an array to hold the data
  //array does the storage of the data
  //we implement the methods  : unshift() and pop()
  constructor() {
    //constructor is called when we make a new instance
    this.data = [];
    //data can be any word we want
  }

  add(record) {
    //add the new record to the front
    this.data.unshift(record);
    //we can use the unshift method here to add the record to the beginning of the array
  }

  remove(record) {
    //utualize pop method to remove the record from the end
    return this.data.pop(record);
    //return that record that we removed so we can work with it
  }
  peek() {
    //returns the next element/peeks at next element that is going to come out of the key
    return this.data.length - 1;
    //returning the last element
    //the lenght - 1
  }
}

//----create wait list app with queue----//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
    //when we do this the first time the queue is empty
    //lenght is 0 and top and bottom are null/ don't exist yet
  }

  peek() {
    return this.first;
    //first in first out
    //return the first item that was added
  }
  enqueue(value) {
    //same as push
    //create a new node
    const newNode = new Node(value);
    if (this.length === 0) {
      //if there is nothing in our queue
      this.first = newNode;
      this.last = newNode;
      //only one node in our list so it is both the first and the last
    } else {
      this.last.next = newNode;
      //instead of the last node.next which is pointing to null, we want to point it to the newNode
      //whatever was pointing to null is now pointing to the newNode
      this.last = newNode;
      //the newNode is now the last node
    }
    this.length++;
    return this; //when we return this we are returning this queue or this data structure
  }
  dequeue() {
    //remove the first item in
    //removing the last node
    //first in first out
    //we grab the node from the beginning not the END
    if (!this.first) {
      return null;
      //if there is nothing in the queue return null
    }
    if (this.first === this.last) {
      //could also do if(this.length === 1)
      //if there is only 1 node
      this.last = null;
    }
    const holdingPointer = this.first; //this holds a reference to that record so it won't be garbage collected/ deleted from memory
    this.first = this.first.next;
    //whoever was after the first node is now the first node
    //the next node to the first is now the first
    this.length--;
    // return this;
    return holdingPointer;
    //returnt the reference to that last node if we still want to use it
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.peek();
myQueue.dequeue();

//once we run dequeue, we delete that ndoe from memory
//garabage collection
