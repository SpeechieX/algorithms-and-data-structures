describe('Djikstras tests', function() {

  var DWGraph = require('../Graphs/djikstra.js');

  beforeEach(function() {

    dwg = new DWGraph();

    dwg.addNode('A');
    dwg.addNode('B');
    dwg.addNode('C');
    dwg.addNode('D');
    dwg.addNode('E');
    dwg.addNode('F');

    dwg.addEdge('A','B',2);
    dwg.addEdge('A','D',4);
    dwg.addEdge('B','E',9);
    dwg.addEdge('E','F',7);
    dwg.addEdge('F','D',9);
    dwg.addEdge('D','C',2);
    dwg.addEdge('C','A',6);
    dwg.addEdge('C','B',1);
    dwg.addEdge('C','E',2);
    dwg.addEdge('C','F',1);

    forest = new DWGraph();

    forest.addNode('1');
    forest.addNode('2');
    forest.addNode('3');
    forest.addNode('4');
    forest.addNode('5');
    forest.addNode('6');

  })

  it('djikstra method should be a function', function() {
    expect(typeof(dwg.djikstra)).toBe('function');
  })

  it('should return correct values for a forest', function() {
    var forestResult = { '1': Infinity, '2': Infinity, '3': Infinity, '4': Infinity, '5': 0, '6': Infinity };
    expect(JSON.stringify(forest.djikstra('5'))).toBe(JSON.stringify(forestResult));
  })

  it('should be return the correct paths when starting at node A', function() {
    var aResult = { A: 0, B: 2, D: 4, C: 6, F: 7, E: 8 };
    expect(JSON.stringify(dwg.djikstra('A'))).toBe(JSON.stringify(aResult));
  })

  it('should return the correct paths when starting at node B', function () {
    var bResult = { B: 0, E: 9, F: 16, D: 25, C: 27, A: 33 };
    expect(JSON.stringify(dwg.djikstra('B'))).toBe(JSON.stringify(bResult));
  })

  it('should return the correct paths when starting at node D', function () {
    var dResult = { D: 0, C: 2, B: 3, F: 3, E: 4, A: 8 };
    expect(JSON.stringify(dwg.djikstra('D'))).toBe(JSON.stringify(dResult));
  })

  it('should return the correct paths when starting at node E', function () {
    var eResult = { E: 0, F: 7, D: 16, C: 18, B: 19, A: 24 };
    expect(JSON.stringify(dwg.djikstra('E'))).toBe(JSON.stringify(eResult));
  })

  it('should return the correct paths when starting at node F', function () {
    var fResult = { F: 0, D: 9, C: 11, B: 12, E: 13, A: 17 };
    expect(JSON.stringify(dwg.djikstra('F'))).toBe(JSON.stringify(fResult));
  })

  it('should not update values when a longer path is found', function() {
    var cResult = { C: 0, B: 1, F: 1, E: 2, A: 6, D: 10 };
    expect(JSON.stringify(dwg.djikstra('C'))).toBe(JSON.stringify(cResult));
  })

});
