// merging sorted arrays
// compare the arrays items by item and return the concatenated result
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //   these 2 loops is for check if there is an element remain in array
  //   if it is the case then we push them in them result
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result.concat(arr1.slice(i).concat(arr2.slice(j)));
}

// divide and conquer
function mergeSort(arr) {
  if (arr.length <= 1) {
    // return once we hit an array with a single item
    return arr;
  }

  //   get the middle item of the array rounded down
  let mid = Math.floor(arr.length / 2);
 
  //   items on the left side
  //   recursion
  let arr1 = mergeSort(arr.slice(0, mid));

  //   items on the right side
  //   recursion
  let arr2 = mergeSort(arr.slice(mid));

  //   printing mid
  console.log(mid);

  //   merging
  return merge(arr1, arr2);
}

console.log(mergeSort([23, 34, 103, 78, 9, 2, 0]));
