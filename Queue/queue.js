//we rely on arrays but utulize just the two methods that relate to queues.

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
