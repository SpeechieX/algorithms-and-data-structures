var Tree = require('../Trees/tree.js');
var Graph = require('./undirected-graph.js');
var PriorityQueue = require('../Queue/priority_queue.js');
var Tree = require('../Trees/tree.js');

function init(graph) {
  var PQ = new PriorityQueue(), INFINITY=1/0, node, tree=[], newTree;
  for (node in graph.nodes) {
    PQ.enqueue(node, INFINITY);
    newTree = new Tree(node);
    tree.push(newTree)
  }
  return [PQ, tree];
};

function prims(graph) {
  var PQ = init(graph)[0], tree = [], index, node, start, visited, edges;

  // we are picking an arbitary node here
  for (node in graph.nodes) {
    start = node;
    break;
  }

  while (!PQ.isEmpty()) {
    visited = PQ.dequeue().value;
    tree.push(visited);
    edges = graph.nodes[visited];
    for (index=0; index<edges.length; index++) {
      PQ.updatePriority(edges[index][0], edges[index][1])
    }
  }

  return tree;
}

  // we will first create an object that will be made of all the Trees
  // possible. { 'node name': Tree with node as root }
  //var spanningTree = new Tree
  //return tree

var g = new Graph();


g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');
g.addNode('G');


g.addEdge('A','B', 2);
g.addEdge('A','D', 3);
g.addEdge('D','F', 7);
g.addEdge('A','C', 3);
g.addEdge('B','C', 4);
g.addEdge('B','E', 3);
g.addEdge('C','E', 1);
g.addEdge('C','F', 6);
g.addEdge('F','E', 8);
g.addEdge('D','C', 5);
g.addEdge('F','G', 9);

console.log(prims(g));
//console.log(prims(g));
