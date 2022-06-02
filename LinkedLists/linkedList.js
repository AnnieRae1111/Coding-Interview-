const basket = ['apples', 'grapes', 'pears'];

//  10 -->5 -->16
// let myLinkedList = {
//   head: {
//     //node a bucket of data
//     //the value will change but the pointer will still point to the same next node
//     value:10,
//     next:{
//       value:5,
//       next:{
//         value:16,
//         next: null
//       }
//         //you can see that the first value is ten, the next value points to 5 and the next to 16 and then finally the pointer is null
//     }
//   }
// }

class NewNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
//use this newNode class to instantiate a newNode in each method
//maybe better syntax

class LinkedList {
  constructur(value) {
    this.head = {
      value: value,
      next: null,
      //its null first becuase it is the first item and not sure if it points to anything
    };
    this.tail = this.head;
    //because there is only one item to begin when we make the class, the tail is the head
    this.length = 1;
    //because there is one item at first when we create it
  }
  append(value) {
    const newNode = new newNode(value);
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
    //return this node
  }
  prepend(value) {
    //add to beginning
    const NewNode = {
      value: value,
      next: null,
    };
    NewNode.next = this.head;
    //the new node we just made is pointing to the head, the very first item
    //meaning the new node has to be before
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      //as long as their is a current node
      array.push(currentNode);
      currentNode = currentNode.next;
      //current node is the next node
    }
    return array;
  }

  insert(index, value) {
    //check parameters
    if (index >= this.length) {
      return this.append(value);
      //if the index is larger than the length of the data,
      //add the the new value to the end
    }
    const newNode = new NewNode(value);
    const leader = this.traverseToIndex(index - 1);
    //new method we will create
    //grabs a reference to the leader node. the first one that we want to put the insertion next to
    const holdingPointer = leader.next;
    //grabbing a reference to the node next to the leader
    leader.next = newNode;
    //saying that the one next to the leader is now our new node
    //this is inserting the newNode next to the leader
    newNode.next = holdingPointer;
    //now we are saying that the the node next to the new one , is the other other node we are putting in in between
    return this.printList();
    //once we insert something, then print the list
  }
  traverseToIndex(index) {
    //check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
    //grabs a reference to the leader node. the first one that we want to put the insertion next to
  }
  remove(index) {
    //check parameters. is index larger than the length?
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    //check to make sure the list is longer than 1 item or node
    if (!this.head.next) {
      //if this head.next doesn't exist
      //if this head.next is null
      //if there is only one head node
      //could also do if(this.head.length === 1)
      return this.head;
      //could also just return this
    }
    let first = this.head;
    //a reference tot he head
    this.tail = this.head;
    //the last one becomes the first one
    let second = first.next;
    //first.next value is pointing to the second node
    while (second) {
      const temp = second.next;
      //technical temp is the third node
      second.next = first;
      //the second element is equal to the second element
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
    //returning this is returning this linked list
  }
}

const myLinkedList = new LinkedList(10);

//-----> Doubly Linked List <---- //
//adds extra pointer. one pointing towards previous node and one points towards next node
