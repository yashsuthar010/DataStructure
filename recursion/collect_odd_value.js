// this recursion method is just pattern where we have an outer funtion that not an recursion funtion
//  which calls inner function which is rescursive

function collectOddValues(arr) {
  let result = [];
  function helper(helperinput) {
    if (helperinput.length === 0) {
      return;
    }

    if (helperinput[0] % 2 !== 0) {
      result.push(helperinput[0]);
    }

    // for dividing array into sub-array by excluding 1 element from array each item when we iterate
    helper(helperinput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 9]));
