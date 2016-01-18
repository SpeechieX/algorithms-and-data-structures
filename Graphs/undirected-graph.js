// This is a weighted, directed graph.

Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(value) {
  this.nodes[value] = [];
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push([toNode]);
  this.nodes[toNode].push([fromNode]);
};

module.exports = Graph;
