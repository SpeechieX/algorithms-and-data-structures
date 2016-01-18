var Graph = require('./undirected-weighted-graph.js');
var PriorityQueue = require('../Queue/priority_queue.js');

function init(graph) {
  var PQ = new PriorityQueue(), INFINITY=1/0, node, tree=[], newTree;
  for (node in graph.nodes) {
    PQ.enqueue(node, INFINITY);
  }
  return PQ;
};

function prims(graph) {
  var PQ = init(graph), node, start,current, visited = [], edges;

  for (node in graph.nodes) {
    start = node;
    break;
  }

  while (!PQ.isEmpty()) {
    current = PQ.dequeue().value;
    visited.push(current);
    edges = graph.nodes[current].edges;

    edges.forEach(function(value) {

      if (current.indexOf(value[0]) === -1) {
        PQ.updatePriority(value[0], value[1]);
        console.log('priority queue',PQ);
      }
    })

  }
  return visited;
};

var g = new Graph();


g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');
g.addNode('G');

/*
    2
  A----B
  | \ /
  |  C
  | / \
  D----F
    7

*/


g.addEdge('A','B', 2);
g.addEdge('A','D', 10);
g.addEdge('D','F', 7);
g.addEdge('A','C', 3);
g.addEdge('B','C', 4);
g.addEdge('B','E', 11);
g.addEdge('C','E', 1);
g.addEdge('C','F', 6);
g.addEdge('F','E', 8);
g.addEdge('D','C', 5);
g.addEdge('F','G', 9);

//console.log(g.nodes['A']);
console.log(prims(g));
