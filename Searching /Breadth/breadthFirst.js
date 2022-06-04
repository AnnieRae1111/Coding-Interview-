// as it goes through each level, we have to keep track of the children nodes so we can go back and search the children
//this is where the memory space comes in
//use a QUEUE data strucutre to keep a reference to the nodes we know we want to come back to

//using our binary search tree we already made to search through it

//this tree as example:

//      9
//  4      20
//1  6  16  170

class BinarySearchTree {
  constructor() {
    this.root = null;
    //it's null at first because there is nothing there yet
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      //if the tree is empty
      this.root = newNode;
      //the root is now the newNode we created
    } else {
      //if rootnode is already filled
      let currentNode = this.root;
      //we will have to travese this root node until we find the right place to insert our next value
      while (true) {
        //have to make sure there is a way to exit out since we are saying true
        //we need to traverse the tree
        if (value < currentNode.value) {
          //if the value w are inserting is less than the currentNode value
          //we will go left
          if (!currentNode.left) {
            //if there is not a left node yet,
            //the newNode is the leftNode
            currentNode.left = newNode;
            return this; //return the tree and exit while loop
          }
          //if the value we are inserting is less than then the currentNode value
          currentNode = currentNode.left;
        } else {
          //if the value we are inserting is greater than the currenNode.value
          //first need to check if there is a right node yet
          if (!currentNode.right) {
            //if there isn't a right node yet, then the newNode is now the right node
            //if the value we are inserting is larger than the currentNode.value
            currentNode.right = newNode;
            return this; // to return the tree and stop looping
          }
          currentNode = currentNode.right;
        }
        //see UDEMY VIDEO for other steps and optoins.
        //THIS IS NOT DONE YET
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      // if the root is empty/not a root node
      return false;
      //if there is no root note, it doesnt matter return false. we aren't goign to find the node
    }
    let currentNode = this.root;
    while (currentNode) {
      //while there is a current node , loop through
      if (value < currentNode.value) {
        //if the value we are inserting is less than the current nodes' value
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
        //keep checking to the right
      } else if (currentNode.value === value) {
        //if the current node we are on equal the value we are looking for
        return currentNode;
        //retun that node because it is a match and it;s what we are looking for
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      //if there is not a root node
      return false;
      //there is nothing to remove
    }
    let currentNode = this.root;
    //otherwise the currentNode is the root
    let parentNode = null;
    //declaring a new variable for the parent node
    //we need a reference to the parent node
    while (currentNode) {
      //while a currentNode exists
      if (value < currentNode.value) {
        //go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //we have a match but need to consider some things and use if statements to check
        //Optoin 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            //if there is no right child and and no parent node
            this.root = currentNode.left;
            //the root becaomse the current left node
          } else {
            //if parent > current value, maek the current left child a child of the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              //if parent < current value , amek left child a right child of parent
              parentNode.right = currentNode.left;
            }
          }
        }
      }
    }
  }
  breadthFirstSearch() {
    //we need the current node
    let currentNode = this.root;
    //we need the actual list that will be our answer
    let list = [];
    //we need a queue , which we wil use an array for to keep track of the level we are at so we can acces the children once we go through it
    let queue = [];
    queue.push(currentNode);
    //adding the first item to the queue

    //go from current node and search left to right. use a while loop
    while (queue.length > 0) {
      currentNode = queue.shift();
      //we take the first item . shift gets the first item
      //with tree exampe above, 9 is the first node
      list.push(currentNode.value);
      if (currentNode.left) {
        //does it have a left value
        //does 9 have a left child? yes, it is 4 , so push it into the queue
        queue.push(currentNode.left);
      }

      //check for right node
      if (currentNode.right) {
        //yes it's 20 so push to queue
        queue.push(currentNode.right);
      }
    }
    return list;
    //pushing to queue and then looping through queue and pushing orderd items to list
    //depending on the data lenght, the queue can get really long. we keep adding to list but we also keep adding to queue
    //if we have very wide tree instead of binary tree, the queue can get very big. memory consumption can get very big
    //we are pushing the values to the list so need to return the list
  }
  //going to do BFS recursively
  breadthFirstSearchRecursive(queue, list) {
    //base case:
    if (queue.length === 0) {
      //base case stop when theere is nothing in the list
      return list;
      //but we haven't defined list or queue yet
      //we need to pass queue and list as paremeters instead
      //s that when we call it, we give it
    }
    const currentNode = this.queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      //does it have a left value
      //does 9 have a left child? yes, it is 4 , so push it into the queue
      queue.push(currentNode.left);
    }

    //check for right node
    if (currentNode.right) {
      //yes it's 20 so push to queue
      queue.push(currentNode.right);
    }
    return breadthFirstSearchRecursive(queue, list);
    //going over the same if statements again and again .
    //similar to iterative approach above but just calling function with parameters
  }
  DFSInorder() {
    //since this using recursion we can't just declare the variables inside, because they will be reset each time the function recalls it self . so declare variables as paremeters instead
    return travserseInorder(this.root, []);
    //this is the recursive function
    //delcare the variables in the recursive function
    //create this function below outside of tree class
  }
  DFSPostorder() {
    return traversePreOrder(this.root, []);
    //create this function below outside of tree class
  }
  DFSPreorder() {
    return traversePostOrder(this.root, []);
    //create this function below outside of tree class
  }
}

function travserseInorder(node, list) {
  //going to give us the list of nodes in sorted order
  console.log(node.value);
  if (node.left) {
    //does the root/current node have a left child?
    //if it does traverse down
    travserseInorder(node.left, list);
    //will call this functinountil the node has no more children
    list.push(node.value);
    //once there is no more nodes left, push the most bottome node to the list
    //becuase this is binary search tree and we atre traversing the left, the left has the lowest values and so the lowest values are pushed to list.
    //binary tree is sorted left to right
  }
  if (node.right) {
    //does the root/current node have a left child?
    //if it does traverse down
    travserseInorder(node.righ, list);
    //will call this functinountil the node has no more children
    list.push(node.value);
    //once there is no more nodes left, push the most bottome node to the list
  }
  return list;
}

function traversePreOrder(node, list) {
  console.log(node.value);
  list.push(node.value);
  //start with the parent, so push that to list
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value); //at the very end because post order
}

const tree = new BinarySearchTree();
tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive([tree.root], []);
//we are naming the queue and list . queue: an array with the root value [this.root]
//list is the  empty []
//the this key word only works when we are inside the class . this.root needs to become tree.root instaed
tree.DFSInorder();
tree.DFSPostorder();
tree.DFSPreorder();
//all DFS just done in different order
//recursion
