function BinarySearch(arr, elem) {
  if (arr.length === 0) {
    return null;
  }

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  console.log(start, mid, end);

  while (arr[mid] !== elem && start <= end) {
    if (elem < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  console.log(start, mid, end);
  return arr[mid] === elem ? mid : -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5], 1));
