//see Algo cast for stephen grider version
// use whiel loop: two stacks. pop from stack 1 and push to stack 2
//peek at last item and return it
//use while loop: pop from stack two and push to stack 1

//see qfroms in AlgoCasts

//Create Stack first and call it in queue clas

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  //queue is first in first out
  //use two stacks: add record to one stack and pop from first stack to second stack
  //reversing the order
  //pop() from first stack and push() to second stack
  //can iterate directly through a queue , can peek at last record
  //if (peek(record)), stackA. pop(reocrd), stackB.push(record), stackB.pop(record) -> will be the last record
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
    //using stack that is imported above
    //whenever a queue is instantiated , it will create two stacks
  }
  add(record) {
    this.first.push(record);
    //adding records to the first stack
    //the first record added is the last one out
  }
  remove(record) {
    //have to iterate through the records in firststack
    //when we say iterate we can really only tell if there are records left by using the peek method
    //as long as the peek method returns a record , we will continue to push records from first stack to second stack
    //set up while loop
    //stack already has peek method implemented ..see stack.js
    while (this.first.peek()) {
      // const record = this.first.pop();
      this.second.push(this.first.pop());
      //pushing the thing we popped off the first stack to the second stack
    }
    const record = this.second.pop();
    //the record we want will be the thing we popped off the second stack
    //before we return it we need to restore the state of the stack. Pop everyting back from second stack to first stack

    while (this.second.peek()) {
      //while there is a record in the second stack
      this.first.push(this.second.pop());
      //add the thing we popped off the second stack back to the first stack
    }

    //no we can return the record variable
    return record;
  }
  peek() {
    //pop everything from first stack to the second stack
    //once everything is moved over peek at at, but dont' pop it
    //return the the last item, don't pop it off
    while (this.first.peek()) {
      //while there are still records in the first stack
      this.second.push(this.first.pop());
      //push the top record from the first stack to the second stack
    }
    //get a referecne to top item in stack
    const record = this.second.peek();

    while (this.second.peek()) {
      //where there are records in second stack
      this.first.push(this.second.pop());
      //put the records back to first stack
    }
    return record;
    //return the record that it as the top of the second stack
    //see record variable on line 70
  }
}
