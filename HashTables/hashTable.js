let user = {
  age: 54,
  name: 'kylie',
  magic: true,
  scream: function () {
    console.log('ahhhh!');
  },
};

user.age; // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // o(1)

//we can have a function as a value
//an array as a value
//another object as value
//can have arrays of objects

//you can also potentially have function has keys
//not just strings for keys
//ESC javaScript we have Map and sets

// ---Map---- ///
const a = new Map();
//allows you to save any data type as the key
//with an object an only save the key as a strin g
//can have functions or arrays as keys
//it maintains insertion order

// --Sets --//
const b = new Sets();
//only stores the keys not values ?

//we can create an object but to create hash table from scratch we can do this:

class HashTable {
  constructore(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    //private properties are created using _
    //you can access these properties or methods outside of the class you are delcaring this in
    //you can technically access it but you shouldn't
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    //store this data we are inserting in this address space that is created by the hash function above
    //givin it the key of grapes
    if (!this.data[address]) {
      //checking there is nothign there to avoid collission
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    //we are always goign to be adding the key and value
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentbucket = this.data[address];
    if (currentbucket) {
      for (let i = 0; i < currentbucket.length; i++) {
        if (currentbucket[i][0] === key) {
          return currentbucket[i][1];
          //returning the second index which is the number we want
          //grapes is the first index at 0
          //this is considered O(1) becuase we are just looping over the key
          //hash tables are so fast so not considered O(n) yet
        }
      }
    }
    //of no collision time complexiity is usually O(1)
    return undefined;
    //there is nothign in the bucket it will come back undefined
  }
  keys() {
    //allows us to loop through all the keys in our hashtable
    //ideally it will iterate and spit out all of the keys
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //if there is something in that memory space
        keysArray.push(this.data[i][0][0]);
        //need to access the inner array by using two [0]
        //first [i][0] is the outer array;
        //the second [0] is the first index of the array
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
