function bubblesort(array) {
  array.forEach(function(value, i) {
    for (var index = i+1; index<array.length; index++) {
      if (array[i] > array[index]) {
        var temp = array[i];
        array[i] = array[index];
        array[index] = temp;
      }
    }
  })
  return array;
};
