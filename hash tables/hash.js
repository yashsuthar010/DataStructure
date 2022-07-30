// BIF O of hash tables
// 1. average case:
// a. insert:O(1)
// b. Deletion:O(1)
// c. Access:O(1)

//
// DEFINITION
// 1.Hash tables are collection of key-value pairs
// 2.hash tables can find values quickly given a key
// 3.hash tables can add new key-values quickly
// 4.hash tables store data in a large array, and work by hashing the keys
// 5.a good hash should be fast, distribute keys uniformly,and be deterministic
// 6.separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index

//
// basic hash function using "CharCodeAt()" method
// this both function only works for strings
// Not constant time - linear in key length
// could be little more random

// function hash(key, arrlen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrlen;
//   }

//   return total;
// }

console.log(`hash value  is: `, hash("yash", 11));
console.log(`hash value  is: `, hash("pink", 9));

// improved hash function
function hash(str, strlen) {
  let total = 0;
  let prime_num = 31;
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime_num + value) % strlen;
  }
  return total;
}
