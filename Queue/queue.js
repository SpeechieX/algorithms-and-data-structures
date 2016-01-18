var Queue = function() {
  this.items = [];
};

Queue.prototype.enqueue = function(item) {
  this.items.push(item);
};

Queue.prototype.dequeue = function() {
  return this.items.shift();
};

Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

module.exports = Queue;
