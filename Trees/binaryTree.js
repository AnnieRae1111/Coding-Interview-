function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  //this represents a binary tree node
  //binary tree node has a value and right and left properties
}

//calculate nodes on a PERFECT binary tree:
//2 to the power of the level wil lgive you the amount of nodes on that level

// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
// Level 2: 2^2 = 4
// Level 3: 2^3 = 8
//subract one from each calculation

//we can find the number of nodes in a tree by doing 2^h-1 (h= height or levels)

// log nodes = steps
//number of steps

// log 100 = 2
// 10^2 = 100

///--------->Binary Tree Implemenation ------- > ///

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    //class for creating a binary tree node
    //at first there is nothing to the left or right because it is the first node we are creating
  }
}

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
      }
    }
  }
  lookup(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//ideadly after running these commands you can create a tree data strucuture

JSON.stringify(traverse(tree.root));
//to verify creation of tree is working
//goign to traverse and turn everything to string
//use this to double check work

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.rigth === null ? null : traverse(node.right);
  return tree;
}
