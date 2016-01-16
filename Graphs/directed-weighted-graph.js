// A graph is a data structure that is made up of nodes (i.e. vertices) and edges.
// This is an implentation of a weighted, directed graph

var DWGraph = function() {
  this.nodes = {};
};

DWGraph.prototype.addNode = function(value) {
  this.nodes[value] = { edges: [] };
};

// The graph has an adjacency list representation of edges
// You create an edge from a node to a node and NOT the other way around

DWGraph.prototype.addEdge = function(fromNode, toNode, weight) {
  this.nodes[fromNode].edges.push([toNode, weight]);
};

module.exports = DWGraph;
