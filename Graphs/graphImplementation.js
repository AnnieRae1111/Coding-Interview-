//recreated undirected, unwaited
//using agacent list

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
      // this is an object because its better than array
      //dont' have to unshift
      // 0: [1, 2],
      //index of key of 0 conects to nodes 1, 2
    };
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    //undirected
    //node1 and node2 point to each other
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  //showConnections(){}
}
