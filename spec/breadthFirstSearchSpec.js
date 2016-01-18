describe('Breadth first search tests', function() {

  var Graph = require('../Graphs/breadthFirstSearch.js');

  beforeEach(function() {

    graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    graph.addNode('G');
    graph.addNode('H');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'B');
    graph.addEdge('B', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'F');
    graph.addEdge('F', 'G');
    graph.addEdge('G', 'H');

    forest = new Graph();

    forest.addNode('A');
    forest.addNode('B');
    forest.addNode('C');
    forest.addNode('D');
    forest.addNode('E');
    forest.addNode('F');


  })

  it('should be able to handle a forest', function() {
    var forestResult = forest.breadthFirstSearch('A');
    expect(JSON.stringify(forest.breadthFirstSearch('A'))).toBe(JSON.stringify(forestResult));
  })

  it('the breadth first method should be a function', function() {
    expect(typeof(graph.breadthFirstSearch)).toBe('function');
  });

  it('should return an object', function() {
    expect(typeof(graph.breadthFirstSearch('A'))).toBe('object');
  });

  it('should return the correct output when source is A', function() {
    var aResult = { A: 0, B: 1, C: 1, D: 2, E: 2, F: 2, G: 3, H: 4 };
    expect(JSON.stringify(graph.breadthFirstSearch('A'))).toBe(JSON.stringify(aResult));
  });

  it('should return the correct output when source is B', function() {
      var bResult = { A: 1, B: 0, C: 1, D: 1, E: 1, F: 1, G: 2, H: 3 };
      expect(JSON.stringify(graph.breadthFirstSearch('B'))).toBe(JSON.stringify(bResult));
  });

  it('should return the correct output when source is C', function() {
      var cResult = { A: 1, B: 1, C: 0, D: 1, E: 2, F: 2, G: 3, H: 4 };
      expect(JSON.stringify(graph.breadthFirstSearch('C'))).toBe(JSON.stringify(cResult));
  });

  it('should return the correct output when source is D', function() {
      var dResult = { A: 2, B: 1, C: 1, D: 0, E: 1, F: 2, G: 3, H: 4 };
      expect(JSON.stringify(graph.breadthFirstSearch('D'))).toBe(JSON.stringify(dResult));
  });

  it('should return the correct output when source is E', function() {
      var eResult = { A: 2, B: 1, C: 2, D: 1, E: 0, F: 1, G: 2, H: 3 };
      expect(JSON.stringify(graph.breadthFirstSearch('E'))).toBe(JSON.stringify(eResult));
  });

  it('should return the correct output when source is F', function() {
      var fResult = { A: 2, B: 1, C: 2, D: 2, E: 1, F: 0, G: 1, H: 2 };
      expect(JSON.stringify(graph.breadthFirstSearch('F'))).toBe(JSON.stringify(fResult));

  });

  it('should return the correct output when source is G', function() {
      var gResult = { A: 3, B: 2, C: 3, D: 3, E: 2, F: 1, G: 0, H: 1 };
      expect(JSON.stringify(graph.breadthFirstSearch('G'))).toBe(JSON.stringify(gResult));

  });

  it('should return the correct output when source is H', function() {
      var hResult = { A: 4, B: 3, C: 4, D: 4, E: 3, F: 2, G: 1, H: 0 };
      expect(JSON.stringify(graph.breadthFirstSearch('H'))).toBe(JSON.stringify(hResult));
  });



});
