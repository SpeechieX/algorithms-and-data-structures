// This is a weighted, directed graph.

Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(value) {
  this.nodes[value] = [];
};

Graph.prototype.addEdge = function(fromNode, toNode, weight) {
  this.nodes[fromNode].push([toNode, weight]);
  this.nodes[toNode].push([fromNode, weight]);
};

module.exports = Graph;
