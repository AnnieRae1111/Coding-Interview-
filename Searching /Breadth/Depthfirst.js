//    9
//  4    20
//1  16  16  170

//given the tree above:
//breadth first search would give you this list:
[9, 4, 20, 1, 16, 16, 179][ //you are going across level by  level
  //depth first would give you this lst:
  (9, 4, 1, 16, 20, 16, 170)
];

//    101
// 33     105

//inOrder: 33, 101, 105 (numbers are in order )
//preOrder: 101, 33, 105
//postOder: 33, 105, 101

// - inOrder: items are returned in order. Useful with Binary Search Tree
// - preOrder: start with parent, grab child nodes left to right
//- postOrder: grabs children first left to right and then goes up to parent

//Implementing DFS using these 3 optoins.

//using the same binary tree we arleady created and made BFS methods.
//SEE breadthFirst.js
