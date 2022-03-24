function SumRange(num) {
  // base case
  if (num === 1) return 1;
  return num + SumRange(num - 1);
}

console.log(SumRange(3));
