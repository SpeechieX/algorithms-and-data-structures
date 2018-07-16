function merge(arr1, arr2) {
	let [i,j] = [0,0];

	let result = [];
	while (i < arr1.length || j < arr2.length) {

		// First check to see if i and j are in bounds 
		if (i >= arr1.length) {
			if (j < arr2.length) {
				return [...result, ...arr2.slice(j)]
			}
		}

		if (j >= arr2.length) {
			if (i < arr1.length) {
				return [...result, ...arr1.slice(i)]
			}
		}
	

		if (arr1[i] > arr2[j]) {
			result.push(arr2[j]);
			j++;
		} else if (arr1[j] === arr2[i]) {
			result.push(arr1[j], arr2[i]); 
			i++;
			j++;
		} else {
			result.push(arr1[i]);
			i++;
		}
	}
	return result;
}

function mergeSort(arr) {
	
	if (arr.length === 1) {
		return arr;
	}
	
	let q = Math.floor(arr.length/2);
	let l = arr.slice(0,q);
	let r = arr.slice(q);

	console.log(l, r) 
	return merge(mergeSort(l), mergeSort(r))
}

console.log(mergeSort([1,5,2,7]))

