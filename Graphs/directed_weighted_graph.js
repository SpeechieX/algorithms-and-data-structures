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

/*
 Example of an directed graph
 Lines are edges and integers are nodes
        3   4
      1-->2-->3
    4 |    |
      v    v  3
      4<--5
        2
*/

// Here is an example of the graph in use

var graph = new DWGraph();

// adding nodes

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

// adding graphs

graph.addEdge(1,2,3);
graph.addEdge(1,4,6);
graph.addEdge(2,3,4);
graph.addEdge(2,5,3);
graph.addEdge(5,4,2);
graph.addEdge(4,1,4);

module.exports = DWGraph;
