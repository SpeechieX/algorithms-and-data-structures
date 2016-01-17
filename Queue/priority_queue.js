// This is an inefficient yet simple implentation of a priority queue.

PriorityQueue = function() {
  this.items = [];
};

// if no priority is specified then the item is placed at the
// back of the queue

PriorityQueue.prototype.enqueue = function(value, priority) {
  if (!priority) {
    this.items.push({value: value, priority: this.items.length});
  } else {
    this.items.push({value: value, priority: priority});
  }
  this.sortQueue();
};

PriorityQueue.prototype.dequeue = function() {
  return this.items.shift();
};

PriorityQueue.prototype.sortQueue = function() {
  this.items.sort(function(a,b) {
    return a.priority - b.priority;
  });
};

PriorityQueue.prototype.updatePriority = function(value, newPriority) {
  var index;
  for (index=0; index<this.items.length; index++) {
    if (this.items[index].value === value && this.items[index].priority > newPriority) {
      this.items[index].priority = newPriority;
    }
  }
  this.sortQueue();
}

PriorityQueue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

// Example of its use ranking NBA basketball players

var pq = new PriorityQueue();

pq.enqueue('Kobe', 1);
pq.enqueue('LeBron', 2);
pq.enqueue('Curry', 3);
pq.enqueue('Durant', 4);

module.exports = PriorityQueue;
