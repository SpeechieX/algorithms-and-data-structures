// This is a simple implentation of a tree class
// Currently it only has a addChild Method

// This is not a binary search tree

Tree = function(value) {
  this.children = [];
  this.value = value;
};

Tree.prototype.addChild = function(tree) {
  this.children.push(tree)
};

/*
                    1
                  /  \
                2     3
              /      /
            5        7
*/

var root = new Tree(1);
var child1 = new Tree(2);
var child2 = new Tree(5);
var child3 = new Tree(3);
var child4 = new Tree(7);

root.addChild(child1);
root.addChild(child3);
child3.addChild(child4);
child1.addChild(child2);

console.log(root);
