//ways to build graphs

//----EDGE LIST----//:
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];
//this is an array of arrays
//the arrays show how they connect
//edge list shows connection
//0 is connected to 2
// 2 is connected to 3
//2 is connected 1
//1 is connected to 3

//------ADJACENT LIST------/
//can use arrays, objects, linked list
//index is the node, the value is the node's neighbor

const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];
//index or node of 0 is connected to 2
//index or node  of 1 is connected to 2 and 3
//index or node of 2 is connected to 0,1,3
//index or node of 3 is connected to 1,2

//can also do this with an object

//-------ADJACENT MATRIX-------//
const graph3 = [
  // 0 means no
  //1 means yes
  [0, 0, 1, 0][(0, 0, 1, 1)],
  //node outer index 0 or first index is connected to 2 (index )
  //node outer index 1 is connected to 2,3 (index)
];
