var Graph = require('./undirected-graph.js');
var Queue = require('../Queue/queue.js');


Graph.prototype.breadthFirstSearch = function(source) {
  var queue = new Queue(),
      visited = [],
      current,
      node,
      distances = {},
      distance = 1,
      children;

  for (node in this.nodes) {
    distances[node] = 0;
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


module.exports = Graph;
