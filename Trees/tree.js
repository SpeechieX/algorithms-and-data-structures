// This is a simple implentation of a tree class
// Currently it only has a addChild Method

// This is not a binary search tree

Tree = function(value) {
  this.nodes= {};
  this.nodes[value] = [];
};

Tree.prototype.addChild = function(parent, child) {
  this.nodes[parent].push(child)
};

/*
                    1
                  /  \
                2     3
              /      /
            5        7
*/

module.exports = Tree;
