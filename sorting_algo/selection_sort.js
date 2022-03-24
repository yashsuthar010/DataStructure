function selctionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(i, j);
      if (arr[j] < arr[low]) {
        low = j;
      }
    }
    // // these 4 lines(11,12) just for better visualization
    // console.log(arr);
    // console.log("swapping: ");
    if (i !== low) {
      //   console.log(i, low);
      let temp = arr[i];
      arr[i] = arr[low];
      arr[low] = temp;
    }
  }

  return arr;
}

console.log(selctionSort([0, 2, 23, 45, 78, 10, 70]));
