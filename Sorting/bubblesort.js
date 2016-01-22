/*

This is a slightly optimized version of bubble sort. I move through
at least part of the array N number of times, where N is the length of
the array. I compare adjacent values in the array and swap them if they are
in the wrong order.

[3,2,1]

[2,3,1] -> [2,1,3]

[1,2,3]

*/

function bubblesort(array) {
  array.forEach(function(value) {
    console.log(array);
    for (var i = 0; i<array.length; i++) {
      var index = i+1;
      if (array[i] > array[index]) {
        var temp = array[i];
        array[i] = array[index];
        array[index] = temp;
      }
    }
  })
  return array;
};

console.log(bubblesort([3,2,1]));
