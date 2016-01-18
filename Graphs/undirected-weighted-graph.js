var UWGraph = function() {
  this.nodes = {};
};

UWGraph.prototype.addNode = function(value) {
  this.nodes[value] = { edges: [] };
};

UWGraph.prototype.addEdge = function(fromNode, toNode, weight) {
  this.nodes[fromNode].edges.push([toNode, weight]);
  this.nodes[toNode].edges.push([fromNode, weight]);
};

module.exports = UWGraph;
