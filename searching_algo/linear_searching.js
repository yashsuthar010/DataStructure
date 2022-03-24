// it can take either unsorted data or sorted data but for sorted data there is much better option.

function LinearSearch(arr, val) {
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch([1, 2, 3, 4, 4], 4));
