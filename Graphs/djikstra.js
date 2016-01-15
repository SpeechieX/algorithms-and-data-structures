var DWGraph = require('./directed_weighted_graph');
var PriorityQueue = require('../Queue/priority_queue.js');

// This algorithm takes in a two node names (as strings)
// This algorithm should return an array listing the nodes
// you must traverse in order to get from the source to the target
// node in the shortest path regime

// This is a method on a directed_weighted_graph

DWGraph.prototype.init = function(source) {
  var node, PQ = new PriorityQueue(), INFINITY=1/0, distances = {};
  for (node in this.nodes) {
    PQ.enqueue( node, INFINITY );
  };
  PQ.updatePriority(source, 0);
  return [PQ, distances];
};

DWGraph.prototype.djikstra = function(source) {
  var index, visited=[], min, PQ = this.init(source)[0], distances = this.init(source)[1];

  while (!PQ.isEmpty()) {
    min = PQ.dequeue();
    visited.push(min.value);
    distances[min.value] = min.priority;

  this.nodes[min.value].edges.forEach(function(value) {
    if (visited.indexOf(value[0]) === -1) {
      PQ.updatePriority( value[0], min.priority + value[1] )
    }
  });
}
return distances;
};

var dwg = new DWGraph();

dwg.addNode('A');
dwg.addNode('B');
dwg.addNode('C');
dwg.addNode('D');
dwg.addNode('E');

dwg.addEdge('A','C', 2);
dwg.addEdge('A','B', 4);
dwg.addEdge('B','C', 3);
dwg.addEdge('C','B', 1);
dwg.addEdge('C','D', 4);
dwg.addEdge('C','E', 5);
dwg.addEdge('E','D', 1);
dwg.addEdge('B','D', 2);
dwg.addEdge('B','E', 3);

//console.log(dwg.nodes['B']);
console.log(dwg.djikstra('A'));
