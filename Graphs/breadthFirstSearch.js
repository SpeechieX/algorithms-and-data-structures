var Graph = require('./undirected-graph.js');
var Queue = require('../Queue/queue.js');


Graph.prototype.breadthFirstSearch = function(source) {
  var queue = new Queue(),
      visited = [],
      current,
      node,
      size = 0,
      index,
      distances = {},
      distance = 1,
      children;

  // First we must initialize the distance object.
  for (node in this.nodes) {
    distances[node] = 0;
    size++;
  }

  queue.enqueue(source);


  while (!queue.isEmpty()) {
    children = [];
    while(!queue.isEmpty()) {
      current = queue.dequeue();
      visited.push(current);
      this.nodes[current].forEach(function(value) {
        if (visited.indexOf(value[0]) === -1) {
          visited.push(value[0]);
          distances[value[0]] = distance;
          children.push(value[0]);
        }
      });

    }

    distance += 1;

    children.forEach(function(value) {
      queue.enqueue(value);
    })

  }


  return distances;

};


var graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addNode('G');
graph.addNode('H');



console.log('a',graph.breadthFirstSearch('A'));
console.log('b',graph.breadthFirstSearch('B'));
console.log('c',graph.breadthFirstSearch('C'));
console.log('d',graph.breadthFirstSearch('D'));
console.log('e',graph.breadthFirstSearch('E'));
console.log('f',graph.breadthFirstSearch('F'));
console.log('g',graph.breadthFirstSearch('G'));
console.log('h',graph.breadthFirstSearch('H'));




module.exports = Graph;
